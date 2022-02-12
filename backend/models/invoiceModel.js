const { Schema, model } = require("mongoose");
const validator = require("validator");

const invoiceSchema = new Schema({
    invoiceDate: {
        type: Date,
        default: new Date(Date.now())
    },
    productBought: [{
        type: Schema.Types.ObjectId,
        ref: "Product",
        required: true
    }],
    totalPrice: {
        type: Number,
        required: true,
        minlength:[1, "Total price must be greater than 0"]
    },
    customerContact: {
        type: String,
        validate: validator.isMobilePhone
    },
})

module.exports = model("Invoice", invoiceSchema);