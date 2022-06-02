import express from "express";

import {  currentOrder } from "../controller/customerOrders";
import {  verifyAuthToken } from "../middleware/auth";


const customerOrdersRoutes = express.Router();


// customerOrdersRoutes.post("/newOrder", createOrder);
// customerOrdersRoutes.get("/currentOrder/:id", verifyAuthToken, currentOrder);


export default customerOrdersRoutes;