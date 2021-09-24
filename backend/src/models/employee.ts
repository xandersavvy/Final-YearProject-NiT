import { model,Model,Schema } from "mongoose";
import {employeeInterface} from "../interfaces"; 

const employeechema = new Schema({   
    IdNo :{ 
        type: Number,
        required:true,
    },    
    name : {
        type:String,
        required:true,
    },
    salary: {
        type:Number,
        required:true
    },
    joinedDate :{
        type: Date,
        required:true
    },
    designation :{
        type:String,
        required:true
    },
    voterId : {
        type:Number,
    },
    aadhar : {
        type: Number ,
        required : true,
    },
    mobile : {
        type:Number,
        required:true,
    },
    leaveTaken : {
        type:Number,
        default:0,
        required:true,
    }
})

const Employee : Model<employeeInterface | any> = model('employee',employeechema);

export {
    Employee
}