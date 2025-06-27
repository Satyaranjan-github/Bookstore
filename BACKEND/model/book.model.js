import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
  bookId: { type: String, unique: true },
  name: String,
  price: Number,
  category: String,
  image: String,
  title: String,
  amount: Number
})

const Book = mongoose.model("Book", bookSchema)


export default Book