import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    name: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    idAdmin: {
        type: Boolean,
        require: true,
        default: false
    }
}, {timestamps: true})

const User = mongoose.model('User', userSchema)

export default User