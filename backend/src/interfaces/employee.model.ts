import {Document} from 'mongoose'

export interface employeeInterface extends Document {
    
    IdNo : number,    
    name:string,
    salary:number,
    joinedDate : Date,
    designation :  string,
    voterId : number,
    aadhar : number ,
    mobile : number,
    leaveTaken : number,

}