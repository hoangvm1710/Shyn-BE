import { Document } from 'mongoose'

interface Address{
    address1: String
    address2: String
    city: String
    country: String
}

export interface User extends Document {
    name: string
    readonly password: string
    address: Address
    created: Date
}