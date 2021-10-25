import { model,Model,Schema } from "mongoose";

const Role:Model<string | any> = model( "Role",new Schema({name: String}) );

export {
    Role
}