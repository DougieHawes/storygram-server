const router = require("express").Router();

const { userRoute } = require("../controllers/user");

router.get("/", userRoute);

module.exports = router;
