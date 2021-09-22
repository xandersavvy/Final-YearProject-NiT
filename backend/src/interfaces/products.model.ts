import {  Document } from "mongoose";

export interface productsInterface extends Document {
    id: string ,
    productId : string ,
    title : string,
    enteredDate : Date,
    dealerId : string,
    buyingPrice : number,
    retailSellingPrice : number,
    employeeSellingPrice : number,
    stock : number
}