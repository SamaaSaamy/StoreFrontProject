import express from "express";

import { verifyAuthToken } from "../middleware/auth";
import { index, show, create } from "../controller/customerController";

const customerRoutes = express.Router();

customerRoutes.get("/index",verifyAuthToken, index);
customerRoutes.get("/show/:id",verifyAuthToken, show);
customerRoutes.post("/create", create);

export default customerRoutes;
