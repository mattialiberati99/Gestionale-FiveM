const express = require("express")
const router = express.Router()
const passport = require("passport")

// To return the user data to the client
router.get("/check", (req, res) => {
	if (req.user === undefined) {
		res.json({})
	} else {
		res.json({
			user: req.user,
		})
	}
})

router.get("/", passport.authenticate("steam"))

router.get(
	"/return",
	function (req, res, next) {
		req.url = req.originalUrl
		next()
	},
	passport.authenticate("steam", { failureRedirect: "/" }),
	function (req, res) {
		res.redirect("http://localhost:8080/account")
	}
)

module.exports = router
