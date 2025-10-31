import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import searchRoutes from "./routes/searchRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/search", searchRoutes);

export default app;
