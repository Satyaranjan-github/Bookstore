import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    cartList: [{
        bookId:String,
        name: String,
        price: Number,
        category: String,
        image: String,
        title: String,
        amount: Number,
        totalItem: { type: Number, default: 1 }
    }]

})

const User = mongoose.model("User", userSchema)

export default User