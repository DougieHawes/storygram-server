const router = require("express").Router();

const {
  createPost,
  readPosts,
  readPost,
  updatePost,
  deletePost,
} = require("../controllers/Post");

router.post("/", createPost);
router.get("/", readPosts);
router.get("/:id", readPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);

module.exports = router;
