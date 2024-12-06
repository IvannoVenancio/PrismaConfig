const express = require('express')
const indexRoutes = express.Router()
const UserController = require('../controllers/UserController')
const UserTypeController = require('../controllers/UserTypeController')

indexRoutes.get('/', UserController.view)
indexRoutes.post('/create_user', UserController.create)

indexRoutes.get('/user_type', UserTypeController.view)
indexRoutes.post('/user_type', UserTypeController.create)

module.exports = indexRoutes;