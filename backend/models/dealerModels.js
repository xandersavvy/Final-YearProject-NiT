const { Schema , model} = require("mongoose");
const  validator = require("validator");

const dealerSchema = new Schema({
        name: {
            type: String,
            required: [true, "Please Enter Dealer name"],
            trim: true
        },
        email: {
            type: String,
            required: [true, "Please Enter Dealer email"],
            trim: true,
            unique: true,
            validate: validator.isEmail
        },
        contact:{
            type: String,
            required: true,
            trim: true,
            unique: true,
            validate: validator.isMobilePhone
        },
        location:{
            type: String,
            trim: true,
            required: [true, "Please Enter your location"],
            default: "India"
        },
        type:{
            type: String,
            required: [true, "Please type of the product dealer is selling"],
            trim: true,
        },
        due:{
            type: Number,
            default: 0  
        }
})


module.exports = model("Dealer", dealerSchema);