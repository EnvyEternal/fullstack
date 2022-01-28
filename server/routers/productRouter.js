const express = require('express')
//const product = require('../models/product')
//const {productCotroller} = require ('./../controllers')
//const {upload} = require('../middleware')
const { createProd, getById, getAll, getLast } = require('../controllers/product.controller')


const productRouter = express.Router()

productRouter.post('/', createProd)

productRouter.get('/:productId', getById)

productRouter.get('/', getAll)


module.exports = productRouter