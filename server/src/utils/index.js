// @ts-nocheck
const passport = require("passport")
const SteamStrategy = require("../../lib/passport-steam").Strategy

passport.serializeUser(function (user, done) {
	done(null, user)
})

passport.deserializeUser(function (obj, done) {
	done(null, obj)
})

passport.use(
	new SteamStrategy(
		{
			returnURL: "http://localhost:3000/auth/return",
			realm: "http://localhost:3000/",
			apiKey: "537B4504C07D1ED9359261CA017BD558",
		},
		function (identifier, profile, done) {
			process.nextTick(function () {
				profile.identifier = identifier
				return done(null, profile)
			})
		}
	)
)

module.exports = passport
