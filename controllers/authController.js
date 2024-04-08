/**
 * Module dependencies.
 */
const User = require('../models/user')
const jwtHelpers = require('../utils/jwtHelpers')
const bcrypt = require('bcrypt')

/**
 * User login
 */
exports.login = async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (user && bcrypt.compareSync(password, user.password)) {
        res.json({
            success: true,
            data: {
                id: user.id,
                name: user.name,
                accessToken: jwtHelpers.sign({ sub: user.id })
            }
        })
    } else {
        res.status(401).json({
            message: 'Invalid credentials'
        })
    }
}

/**
 * Create new account
 */
exports.register = async (req, res) => {
    const { name, email, password , isAdmin} = req.body
    const user = User({
        name,
        email,
        password: bcrypt.hashSync( password , 8),
        isAdmin

    })
    try {
        await user.save()
        res.json({
            success: true
        })
    } catch (e) {
        res.status(500).json({
            messasge: 'Something went wrong!'
        })
    }
}

/**
 * Get user information
 */
exports.me = async (req, res) => {
    const user = await User.findById(req.userId)
    res.json({
        success: true,
        data: {
            id: user.id,
            name: user.name,
            email: user.email
        }
    })
}