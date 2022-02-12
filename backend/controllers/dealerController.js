const Dealer = require("../models/dealerModels");

exports.getAllDealers = asyncError(async (req, res, next) => {
    const dealers = await Dealer.find();
    if (!dealers) ErrorHandler("Dealers not found", 404);

    res.status(200).json({
        success: true,
        data: dealers
    });
})