import express from "express";
import cors from "cors";
import { corsOptions } from "@/config/corsOptions.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));

export default app;
