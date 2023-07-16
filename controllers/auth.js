const { validationResult } = require("express-validator")

const createUser = ( req, res ) => {

    const { name, email, password } = req.body

    res.status(201).json({
        ok: true,
        msg: 'register',
        name,
        email,
        password
    })
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