import express from "express";

import {
  createStory,
  readStories,
  readStory,
  updateStory,
  deleteStory,
} from "../controllers/storyControllers.js";

const router = express.Router();

router.post("/", createStory);
router.get("/", readStories);
router.get("/:storyId", readStory);
router.patch("/:storyId", updateStory);
router.delete("/:storyId", deleteStory);

export default router;
