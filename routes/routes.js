const express = require('express')
const indexRoutes = express.Router()
const UserController = require('../controllers/UserController')

indexRoutes.get('/', UserController.view)
indexRoutes.post('/create_user', UserController.create)

module.exports = indexRoutes;