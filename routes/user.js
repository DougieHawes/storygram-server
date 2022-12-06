const router = require("express").Router();

const {
  createUser,
  signinUser,
  signoutUser,
  readUser,
  updateUser,
  deleteUser,
} = require("../controllers/user");

router.post("/", createUser);
router.post("/signin", signinUser);
router.post("/signout", signoutUser);
router.get("/:id", readUser);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
