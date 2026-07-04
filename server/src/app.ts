import express from "express";
import cors from "cors";
import routes from "@/routes/index.js";
import { corsOptions } from "@/config/corsOptions.js";
import { errorHandler } from "@/middleware/errorHandler.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));

// Routes
app.use("/api", routes);

app.use(errorHandler);

export default app;
