//const {Router} = require('express')
const productRouter = require('./productRouter')
const express = require('express')

const router = express.Router()

router.use('/products', productRouter)

module.exports = router