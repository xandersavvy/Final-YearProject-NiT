const {asyncError} = require('../middleware/error');
const Dealer = require("../models/dealerModels");


exports.createDealer = asyncError( async (req, res, next) => {
    const { name, email, contact, location, type } = req.body;
    const dealer = await Dealer.create({
        name, email, contact, location, type
    });
    res.status(201).json({
        success: true,
        data: dealer
    });

})





exports.getAllDealers = asyncError(async (req, res, next) => {
    const dealers = await Dealer.find();
    if (!dealers) ErrorHandler("Dealers not found", 404);

    res.status(200).json({
        success: true,
        data: dealers
    });
})


exports.deleteDealer = asyncError(async (req, res, next) => {
    const dealer = await Dealer.findByIdAndDelete(req.params.id);
    if (!dealer) ErrorHandler("Dealer not found", 404);

    res.status(200).json({
        success: true,
        data: {}
    });
})

exports.updateDealer = asyncError(async (req, res, next) => {
    const dealer = await Dealer.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });
    if (!dealer) ErrorHandler("Dealer not found", 404);

    res.status(200).json({
        success: true,
        data: dealer
    });
})


exports.getSingleDealer = asyncError(async (req, res, next) => {
    const dealer = await Dealer.findById(req.params.id);
    if (!dealer) ErrorHandler("Dealer not found", 404);

    res.status(200).json({
        success: true,
        data: dealer
    });
})