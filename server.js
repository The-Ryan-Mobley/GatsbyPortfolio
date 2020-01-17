const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 1337;
//const routes = require("./routes");
const app = express();

app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });