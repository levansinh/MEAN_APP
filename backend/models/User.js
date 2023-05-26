import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const schema = new Schema(
    {
        username: { type: String ,required:"true"},
        password: { type: String ,required:"true"},
        email: { type: String,required:"true" },
        phone: { type: String,required:"true" },
        address: { type: String,required:"true" },
        role: {type: String,default:null}
        }
);

export const UserModel = mongoose.model('User',schema)