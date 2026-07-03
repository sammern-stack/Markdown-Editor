import express from "express";
import cors from "cors";
import { corsOptions } from "@/config/corsOptions.js";
import { errorHandler } from "@/middleware/errorHandler.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));

app.use(errorHandler);

export default app;
