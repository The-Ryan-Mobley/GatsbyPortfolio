const path = require("path");
const router = require("express").Router();
const portController = require("./portController");
//router.use("/api");
router.route("/api/pieces").get(portController.queryportfolio);
// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});