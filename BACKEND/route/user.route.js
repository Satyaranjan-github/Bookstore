import express from "express";
import { signup, login, addToCart, removeFromCart,handleItemCount } from "../controller/user.controller.js";

const router = express.Router();

router.post("/signup", signup);

router.post("/login", login);

router.post("/addToCart", addToCart)

router.put("/handleItemCount", handleItemCount)

router.post("/removeFromCart", removeFromCart)

export default router;