import express from "express";

import {
  signupAuthor,
  signinAuthor,
  readAuthor,
  updateAuthor,
  deleteAuthor,
} from "../controllers/authorControllers.js";

const router = express.Router();

router.post("/signup", signupAuthor);
router.post("/signin", signinAuthor);
router.get("/:authorId", readAuthor);
router.patch("/:authorId", updateAuthor);
router.delete("/:authorId", deleteAuthor);

export default router;
