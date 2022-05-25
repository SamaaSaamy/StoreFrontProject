import express from "express";
import { checkForExistence } from "../middleware/utils";
import { index, show, create } from "../controller/bookController";
import client from "../database";

const bookRoutes = express.Router();

bookRoutes.get("/index", index);
bookRoutes.get("/show/:id", show);
bookRoutes.post("/create", create);

export default bookRoutes;