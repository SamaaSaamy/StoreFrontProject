import express from "express";

import {  currentOrder } from "../controller/orderController";
import {  verifyAuthToken } from "../middleware/auth";


const orderRoutes = express.Router();


// orderRoutes.post("/newOrder/:id",verifyAuthToken, create);
orderRoutes.get("/currentOrder/:id", verifyAuthToken, currentOrder);


export default orderRoutes;