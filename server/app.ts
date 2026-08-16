import express from "express";
import { connectDB } from "./config/db";

const app = express();

// middlewares
app.use(express.json());

// routes


// coonect database
connectDB();


export default app;

