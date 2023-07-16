const { Router } = require('express')
const { createUser, login, renewToken } = require('../controllers/auth')
const { check } = require('express-validator')
const router = Router()


router.post(
    '/new', 
    [
        // Middlewares
        check('name', 'The name must contain at least 4 characters').not().isEmpty(),
        check('email', 'Email is required').isEmail(),
        check('password', 'The password must contain at least 6 characters').isLength({ min: 6 })
    ],
    createUser )

router.post(
    '/login', 
    [
        // Middlewares
        check('email', 'Email is required').isEmail(),
        check('password', 'The password must contain at least 6 characters').isLength({ min: 6 })
    ],    
    login 
)

router.get('/renew', renewToken )


module.exports = router