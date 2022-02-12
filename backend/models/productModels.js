const { Schema,model } = require("mongoose");

const productSchema = new Schema({
    name: {
        type: String,
        required: [true, "Please Enter Product name"],
        minlength: [2, "Product name must be at least 2 characters"],
        maxlength: [50, "Product name must be less than 50 characters"],
        trim: true
    },
    buyingPrice: {
        type: Number,
        required: [true, "Please Enter Product buying price"],
        min: [1, "Product buying price must be at least 1"],
        max: [1000000, "Product buying price must be less than 1000000"],
        trim: true
    },
    mrp: {
        type: Number,
        required: [true, "Please Enter Product price"],
        min: [1, "Product price must be at least 1"],
        max: [1000000, "Product price must be less than 1000000"],
        trim: true,
        validate: {
            validator: function (value) {
                return value > this.buyingPrice;
            }
        }
    },
    count: {
        type: Number,
        required: [true, "Please Enter Product count"],
        min: [1, "Product count must be at least 1"],
        max: [1000, "Product count must be less than 1000000"],
        trim: true
    },
    stalkDate: {
        type: Date,
        default: new Date(Date.now())
    },

});

module.exports = model("Product", productSchema); 