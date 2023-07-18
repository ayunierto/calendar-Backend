const { validationResult } = require("express-validator")
const User = require("../models/User")
const bcrypt = require('bcryptjs')

const { generateJWT } = require('../helpers/jwt')

const createUser = async ( req, res ) => {

    const { email, password } = req.body

    try {

        let user = await User.findOne({ email })

        if ( user ) {
            return res.status(400).json({
                ok: false,
                msg: 'The mail is already in use',
            })
        }

        user = new User( req.body )
        // encrypt password
        const salt = bcrypt.genSaltSync()
        user.password = bcrypt.hashSync( password, salt )
        await user.save() // Save

        // generate token
        const token = await generateJWT( user.id, user.name )

        res.status(201).json({
            ok: true,
            uid: user.id,
            name: user.name,
            token
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: true,
            msg: 'Error ocurred',
        })
    }
}

const login = async ( req, res ) => {

    try {

        const { email, password } = req.body

        const user = await User.findOne({ email })
    
        if ( !user ) {
            return res.status(400).json({
                ok: false,
                msg: 'Incorrect credentials',
            })
        }
    
        const validPassword = bcrypt.compareSync( password, user.password )
    
        if ( !validPassword ) {
            return res.status(400).json({
                ok: false,
                msg: 'Incorrect credentials',
            })
        }

        // generate token
        const token = await generateJWT( user.id, user.name )
    
        res.status(200).json({
            ok: true,
            uid: user.id,
            name: user.name,
            token
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Incorrect credentials',
        })
    }
}

const renewToken = async ( req, res ) => {

    const { uid, name } = req

    // Generate a new JWT and return in this request
    const token = await generateJWT( uid, name )

    res.json({
        ok: true,
        token
    })
}

module.exports = {
    createUser,
    login,
    renewToken
}