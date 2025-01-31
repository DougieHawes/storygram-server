import express from "express";

import {
  createStory,
  getStories,
  getStory,
  updateStory,
  deleteStory,
} from "../controllers/storyControllers.js";
import { isAuth } from "../middleware/isAuth.js";

const router = express.Router();

router.post("/", isAuth, createStory);
router.get("/", getStories);
router.get("/:galleryid", getStory);
router.patch("/:galleryid", isAuth, updateStory);
router.delete("/:galleryid", isAuth, deleteStory);

export default router;
