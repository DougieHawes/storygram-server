import express from "express";

import {
  createGallery,
  getGalleries,
  getGallery,
  updateGallery,
  deleteGallery,
} from "../controllers/galleryControllers.js";

const router = express.Router();

router.post("/", createGallery);
router.get("/", getGalleries);
router.get("/:galleryid", getGalleries);
router.patch("/:galleryid", getGalleries);
router.delete("/:galleryid", getGalleries);

export default router;
