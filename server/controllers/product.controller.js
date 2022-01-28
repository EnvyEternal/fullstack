const {Products} = require('../db/models');
const {db} = require('../db/models')

module.exports.createProd = async (req,res,next) => {
    try{
        const {body} = req;
        const createdProduct = await Products.create(body);
        if(createdProduct) {
            console.log('Ok')
            return res.status(201).send({data: createdProduct});
        }
        res.status(400).send('Bad request');
    } catch(err){
        next(err);
    }
};
/*
module.exports.getById = async (req,res,next) => {
    const {file, params: {productId}} = req
    try{
        const updProduct = await Product.findByPk(productId)
        if(updProduct){
            updProduct.images.push(file.filename)
            const [updRowCount, [updFoundProducts]] = await Product.update(updProduct.get(), {where: {id: productId}, returning: true})
            return res.status(200).send({data: updFoundProducts})
        }
        res.status(404).send('Product not found')
    }
    catch(e){
        console.log(e)
    }
};
*/

module.exports.getById = async (req, res, next) =>{
    try{
        const findProd = await Products.findByPk(req.params.productId)
        if(findProd){
            return res.status(200).send(findProd)
        }
    }
        catch(e){
            console.log(e)
        }
    }

module.exports.getAll = async (req, res)=>{
    try{
        const allProduct = await Products.findAll({limit: 10})
        if(allProduct){
            return res.status(200).send(allProduct)
        }
    }catch(e){
        console.log(e)
    }
}

module.exports.deleteById = async (req,res,next) => {};