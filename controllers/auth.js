const { validationResult } = require("express-validator")
const User = require("../models/User")
const bcrypt = require('bcryptjs')

const createUser = async ( req, res ) => {

    const { name, email, password } = req.body

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

        res.status(201).json({
            ok: true,
            uid: user.id,
            name: user.name
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: true,
            msg: 'Error ocurred',
        })
    }
}

const login = ( req, res ) => {

    const { email, password } = req.body

    res.status(200).json({
        ok: true,
        msg: 'login',
        email,
        password
    })
}

const renewToken = ( req, res ) => {
    res.json({
        ok: true,
        msg: 'renew'
    })
}

module.exports = {
    createUser,
    login,
    renewToken
}