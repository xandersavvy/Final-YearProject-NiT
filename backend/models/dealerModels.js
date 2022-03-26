const { Schema , model} = require("mongoose");
const  validator = require("validator");

const dealerSchema = new Schema({
        name: {
            type: String,
            required: [true, "Please Enter Dealer name"],
            minlength: [2, "Dealer name must be at least 2 characters"],
            maxlength: [50, "Dealer name must be less than 50 characters"],
            trim: true
        },
        email: {
            type: String,
            required: [true, "Please Enter Dealer email"],
            trim: true,
            // unique: true,
            validate: validator.isEmail
        },
        contact:{
            type: String,
            required: true,
            trim: true,
            // unique: true,
            validate: validator.isMobilePhone
        },
        location:{
            type: String,
            trim: true,
            required: [true, "Please Enter your location"],
            minlength: [3, "Please Enter at least 3 characters"],
            maxlength: [30, "Please Enter less than 30 characters"],
            default: "India"
        },
        type:{
            type: String,
            required: [true, "Please Enter type of the product dealer is selling"],
            maxlength: [30, "Please Enter less than 30 characters"],
            trim: true,
        }
})


module.exports = model("Dealer", dealerSchema);