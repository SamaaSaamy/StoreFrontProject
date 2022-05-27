import express from "express";
import { verifyAuthToken } from "../middleware/auth";
import { index, show, create } from "../controller/bookController";
import client from "../database";

const bookRoutes = express.Router();

bookRoutes.get("/index", index);
bookRoutes.get("/show/:id", show);
bookRoutes.post("/create",verifyAuthToken, create);

export default bookRoutes;