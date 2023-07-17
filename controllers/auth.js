const { validationResult } = require("express-validator")
const User = require("../models/User")

const createUser = async ( req, res ) => {

    const { name, email, password } = req.body

    try {

        const user = new User( req.body )
        await user.save()
        res.status(201).json({
            ok: true,
            msg: 'register',
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