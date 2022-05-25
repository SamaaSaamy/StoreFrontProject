import express from "express";

import {  currentOrder } from "../controller/customerOrders";

const customerOrdersRoutes = express.Router();


// customerOrdersRoutes.post("/newOrder", createOrder);
customerOrdersRoutes.get("/currentOrder/id", currentOrder);


export default customerOrdersRoutes;