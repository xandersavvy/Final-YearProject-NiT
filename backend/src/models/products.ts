import mongoose , { Model,Schema } from "mongoose";
import { productsInterface } from "../interfaces"; 

const ProductSchema = new Schema({
    prodictId:{
        type:String ,
        index: {unique: true, dropDups: true}
    },
    name :{
        type: String,
        required : true,
    },
    enteredDate :{
        type: Date,
        default:Date.now()
    },
    dealer_id : {
        type: String,
        required:true
    },
    buyingPrice : {
        type: Number,
        required : true 
    },
    retailSellingPrice : {
        type: Number,
        required : true 
    },
    employeeSellingPrice:{
        type: Number,
        required : true 
    },
    stock : {
        type: Number,
        required : true 
    }
})

const Products : Model<productsInterface | any> = mongoose.model('products',ProductSchema);

export {
    Products
}