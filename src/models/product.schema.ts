import * as mongoose from 'mongoose'

export const ProductSchema = new mongoose.Schema({
    title: String,
    description: String,
    image: String,
    price: Number,
    oldPrice: Number,
    created: {
        type: Date,
        default: Date.now
    }
})