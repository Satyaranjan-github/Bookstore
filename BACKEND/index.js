import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'

import bookRoute from './route/book.route.js'
import userRoute from './route/user.route.js'


dotenv.config();
const app = express()

app.use(cors());
app.use(express.json());


const PORT = process.env.PORT || 4000
const URI = "mongodb://localhost:27017/BookStore";
//connect to mongoDB
mongoose.connect(process.env.mongodburi)
   .then(() => console.log("BookStore database connected"))
   .catch((err) => console.error(`database connection error : --> ${err}`))

//defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);


app.listen(PORT, () => {
   console.log(`Server is listening on port ${PORT}`)
})