import express from "express";
import { searchImages } from "../controllers/searchcontroller.js";

const router = express.Router();

router.post("/", searchImages); 

export default router;
