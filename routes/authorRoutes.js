import express from "express";

import {
  signupAuthor,
  signinAuthor,
  readAuthor,
} from "../controllers/authorControllers.js";

const router = express.Router();

router.post("/signup", signupAuthor);
router.post("/signin", signinAuthor);
router.get("/:authorId", readAuthor);

export default router;
