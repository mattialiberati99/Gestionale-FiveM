// @ts-nocheck
const express = require("express")
const router = express.Router()
const { wrap } = require("@phoenix35/express-async-methods")
const { ensureAuthenticated } = require("../middleware/has_logged")
const { query } = require("../database")

router.get(
	"/",
	ensureAuthenticated,
	wrap(async (req, res) => {
		let user = await query(`SELECT * FROM users WHERE steam_id = ?`, [req.user.id])
		if (user.length === 0) {
			res.status(404).json({ message: "Utente non trovato nel database FiveM!" })
			return
		}
		res.json(user)
	})
)

router.get("/logout", (req, res) => {
	req.logout()
	res.redirect("http://localhost:8080/")
})

module.exports = router
