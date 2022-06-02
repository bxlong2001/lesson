const express = require('express')
const router = express.Router()
const authController = require('../app/controllers/AuthController')

router.get('/register', authController.register)

module.exports = router


