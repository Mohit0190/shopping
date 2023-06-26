const express = require('express')
const ProductRouter = express.Router();

const productController = require('../controller/products')

//  Create Post API
ProductRouter
    .post('/', productController.createProduct)//Create Product
    .get('/ssr', productController.getAllProductsSSr)
    .get('/', productController.getAllProducts) // Read GET /products
    .get('/:id', productController.getProductwithId) // Read GET /products/:id
    .put('/:id', productController.replaceProduct)// UPDATE (REPLACE) Put  API sara product change
    .patch('/:id', productController.updatedProduct)  // Update PAtch  API only thing change 
    .delete('/:id', productController.deleteProduct);// Delete  API only thing change 
exports.router = ProductRouter;