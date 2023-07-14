const createUser = ( req, res ) => {
    res.json({
        ok: true,
        mg: 'register'
    })
}

const login = ( req, res ) => {
    res.json({
        ok: true,
        mg: 'login'
    })
}

const renewToken = ( req, res ) => {
    res.json({
        ok: true,
        mg: 'renew'
    })
}

module.exports = {
    createUser,
    login,
    renewToken
}