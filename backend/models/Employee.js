import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const schema = new Schema(
    {
        username: { type: String ,required:"true"},
        password: { type: String ,required:"true"},
        email: { type: String,required:"true" },
        phone: { type: String,required:"true" },
        address: { type: String,required:"true" },
        role: {type: Number,default:0},
        status:{type:String,default:'active'}
        },
        {timestamps:true}
);

export const EmployeeModel = mongoose.model('Employee',schema)