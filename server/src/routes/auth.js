const express = require("express");
const router = express.Router();
const passport = require("passport");

router.get("/", passport.authenticate("steam"));

router.get(
  "/return",
  function (req, res, next) {
    req.url = req.originalUrl;
    next();
  },
  passport.authenticate("steam", { failureRedirect: "/" }),
  function (req, res) {
    res.redirect("/account");
  }
);

module.exports = router;
