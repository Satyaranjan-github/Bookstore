import Book from "../model/book.model.js";
import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User already exists" })
        }
        const hashedPassword = await bcryptjs.hash(password, 10);
        const createdUser = new User({
            fullname: fullname,
            email: email,
            password: hashedPassword,
        });
        await createdUser.save();
        res.status(201).json({
            message: "User created successfully", user: {
                _id: createdUser._id,
                fullname: createdUser.fullname,
                email: createdUser.email
            }
        })
    } catch (error) {
        console.log("Error:" + error.message);
        res.status(500).json({ message: "Internal server error" })
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        const isMatch = await bcryptjs.compare(password, user.password);
        if (!user || !isMatch) {
            return res.status(400).json({ message: "Invalid username or password" })
        }
        else {
            res.status(200).json({
                message: "Login successful", user: {
                    _id: user._id,
                    fullname: user.fullname,
                    email: user.email,
                    cartList: user.cartList
                }
            })
        }
    } catch (error) {
        console.log("Error:" + error.message);
        res.status(500).json({ message: "Internal server error" })
    }

}

export const addToCart = async (req, res) => {
    try {
        const { email, book } = req.body;
        const response = await User.updateOne({ email: email }, {
            $push: {
                cartList: {
                    bookId: book.bookId,
                    name: book.name,
                    price: book.price,
                    category: book.category,
                    image: book.image,
                    title: book.title,
                    amount: book.amount,
                }
            }
        })

        if (response.modifiedCount > 0) {
            const user = await User.findOne({ email: email });
            user ? res.status(200).json({
                message: "Login successful", user: {
                    _id: user._id,
                    fullname: user.fullname,
                    email: user.email,
                    cartList: user.cartList
                }
            }) : res.status(200).send(null)
        }
    } catch (error) {
        console.error(`Server Error : add to cart --> ${error}`)
    }
}

export const handleItemCount = async (req, res) => {
    try {
        const { bookId, val, _id } = req.body;
        const response = await User.updateOne({ _id: _id, "cartList.bookId": bookId }, { $inc: { "cartList.$.totalItem": val } })

        if (response.modifiedCount > 0) {
            const data = await User.findById(_id);
            data ? res.status(200).json({ status: true, user: data }) : res.status(200).json({ status: false, user: data })
        }
        else {
            res.status(200).json({ status: false, user: null })
        }
    } catch (error) {
        console.error(`Error --> ${error}`)
    }
}


export const removeFromCart = async (req, res) => {
    try {
        const { email, bookId } = req.body;

        const response = await User.updateOne({ email: email }, { $pull: { cartList: { bookId: bookId } } })
        
        if (response.modifiedCount > 0) {
            const user = await User.findOne({ email: email });
            user ? res.status(200).json({
                message: "Login successful", user: {
                    _id: user._id,
                    fullname: user.fullname,
                    email: user.email,
                    cartList: user.cartList
                }
            }) : res.status(200).send(null)
        }
    } catch (error) {
        console.error(`Server Error : remove from cart --> ${error}`)
    }
}
