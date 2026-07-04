import { Router } from "express";
import markdownRoutes from "./markdown.route.js";

const router = Router();

router.use("/markdown", markdownRoutes);

export default router;
