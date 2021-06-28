const router = require("express").Router();

const { postRoute } = require("../controllers/post");

router.get("/", postRoute);

module.exports = router;
