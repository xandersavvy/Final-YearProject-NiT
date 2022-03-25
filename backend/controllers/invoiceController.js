const Invoice = require("../models/invoiceModel");
const {asyncError} = require("../middleware/error");
const ApiFeatures = require('../utils/apiFeatures');



exports.createInvoice = asyncError(async (req, res, next) => {
    const { invoiceDate, productBought, totalPrice, customerContact } = req.body;
    const invoice = await Invoice.create({
        invoiceDate, productBought, totalPrice, customerContact
    });
    if(!invoice) ErrorHandler("Invoice can not be created", 404);
    res.status(201).json({
        success: true,
        data: invoice
    });
})

exports.getAllInvoices = asyncError(async (req, res, next) => {
    const invoiceCount = await Invoice.countDocuments();
    const apiFeatures = new ApiFeatures(Invoice , req.query).filter().sort()
                                                         .paginate()
                                                         .searchByContact()
                                                         .searchById();
    const invoices = await apiFeatures.query;
    if(!invoices) ErrorHandler("Invoice can not be found", 404);
    const pagedInvoices = invoices.length;
    res.status(200).json({
        success: true,
        data: invoices,
        count: invoiceCount,
        pagedInvoices
    });

})

exports.getSingleInvoice = asyncError(async (req, res, next) => {
    const invoice = await Invoice.findById(req.params.id);
    if(!invoice) ErrorHandler("Invoice can not be found", 404);
    res.status(200).json({
        success: true,
        data: invoice
    });
})

exports.deleteInvoice = asyncError(async (req, res, next) => {
    const invoice = await Invoice.findByIdAndDelete(req.params.id);
    if(!invoice) ErrorHandler("Invoice can not be found", 404);
    res.status(200).json({
        success: true,
        data: {}
    });
})

exports.updateInvoice = asyncError(async (req, res, next) => {
    const invoice = await Invoice.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });
    if(!invoice) ErrorHandler("Invoice can not be found", 404);
    res.status(200).json({
        success: true,
        data: invoice
    });
})
