const express = require('express')
const UserRouter = express.Router();

const userController = require('../controller/users')

//  Create Post API
UserRouter
    .post('/', userController.createUsers)//Create Product
    .get('/', userController.getAllUsers) // Read GET /products
    .get('/:id', userController.getUserswithId) // Read GET /products/:id
    .put('/:id', userController.replaceUsers)// UPDATE (REPLACE) Put  API sara product change
    .patch('/:id', userController.updatedUsers)  // Update PAtch  API only thing change 
    .delete('/:id', userController.deleteUsers);// Delete  API only thing change 

exports.router = UserRouter;