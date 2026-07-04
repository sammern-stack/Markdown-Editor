import { Router } from "express";
import * as markdownController from "@/controllers/markdown.controller.js";

const router = Router();

router
  .route("/")
  .get(markdownController.getMarkdowns)
  .post(markdownController.createMarkdown);

router
  .route("/:id")
  .get(markdownController.getMarkdown)
  .put(markdownController.updateMarkdown)
  .delete(markdownController.deleteMarkdown);

export default router;
