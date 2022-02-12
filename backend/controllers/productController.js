const Products = require('../models/productModels');
const{asyncError} = require('../middleware/error');


exports.createProduct = asyncError(async (req, res, next) => {
    const { name , buyingPrice , mrp , count } = req.body;
    const product = await Products.create({
         name, buyingPrice, mrp, count
    });
    if(!product) ErrorHandler("Product can not be created", 404);
    res.status(201).json({
        success: true,
        data: product
    });
    
})

exports.updateProduct = asyncError(async (req, res, next) => {
    const product = await Products.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });
    if(!product) ErrorHandler("Product can not be updated", 404);
    res.status(200).json({
        success: true,
        data: product
    });
})

exports.getSingleProduct = asyncError(async (req, res, next) => {
    const product = await Products.findById(req.params.id);
    if(!product) ErrorHandler("Product can not be found", 404);
    res.status(200).json({
        success: true,
        data: product
    });
})

exports.getAllProducts = asyncError(async (req, res, next) => {
    const productCount = await Products.countDocuments();
    const apiFeatures = new ApiFeatures(User , req.query).filter().sort()
                                                        .paginate()
                                                        .searchByName()
                                                        .searchById();
    const products = await apiFeatures.query;
    const pagedProducts = products.length;
    res.status(200).json({
        success: true,
        data: products,
        count: productCount,
        pagedProducts
    });
})

exports.deleteProduct = asyncError(async (req, res, next) => {
    const product = await Products.findByIdAndDelete(req.params.id);
    if(!product) ErrorHandler("Product can not be deleted", 404);
    res.status(204).json({
        success: true,
        data: {}
    });
})

