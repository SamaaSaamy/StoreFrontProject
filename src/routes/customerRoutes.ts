import express from "express";

import { checkForExistence } from "../middleware/utils";
import { index, show, create } from "../controller/customerController";

const customerRoutes = express.Router();

customerRoutes.get("/index", index);
customerRoutes.get("/show/:id", show);
customerRoutes.post("/create", create);

export default customerRoutes;