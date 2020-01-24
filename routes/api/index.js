const router = require("express").Router();
const controller = require("../../portController");

router.route("/pieces/").get(controller.queryportfolio);

module.exports = router;
