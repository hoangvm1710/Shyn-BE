import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    name: String,
    password: String,
    email: String,
    phone: Number,
    address: {
        address1: String,
        address2: String,
        city: String,
        country: String
    },
    created: {
        type: Date,
        default: Date.now
    }
})