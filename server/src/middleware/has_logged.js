// @ts-nocheck
const { query } = require("../database");

async function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  } else {
    res.status(500).send("Devi eseguire il login con Steam!");
  }
}
module.exports = { ensureAuthenticated }
