const createUser = ( req, res ) => {

    const { name, email, password } = req.body

    if ( name.length < 4 ) {
        return res.status( 400 ).json({
            ok: false,
            msg: "The name must contain at least 4 characters"
        })
    }
    res.json({
        ok: true,
        msg: 'register',
        name,
        email,
        password
    })
}

const login = ( req, res ) => {
    res.json({
        ok: true,
        msg: 'login'
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