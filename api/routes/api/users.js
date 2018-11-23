const mongoose = require('mongoose')
const passport = require('passport')
const router = require('express').Router()
const auth = require('../auth')
const Users = mongoose.model('Users')
const usersCore = require('../../core/Users')
// const logger = require('../../helpers/logger')

//POST new user route (optional, everyone has access)
router.post('/', auth.optional, (req, res) => {
	const {
		body: { user }
	} = req

	if (!user.email) {
		return res.boom.badData({
			errors: {
				email: 'is required'
			}
		})
	}

	if (!user.password) {
		return res.boom.badData({
			errors: {
				password: 'is required'
			}
		})
	}

	const finalUser = new Users(user)
	const password = usersCore.saltAndHash(user.password)
	finalUser.salt = password.salt
	finalUser.hash = password.hash
	finalUser.tAndCs = true

	return finalUser.save().then(() => res.json({ user: usersCore.toAuthJSON(finalUser) }))
})

//POST login route (optional, everyone has access)
router.post('/login', auth.optional, (req, res, next) => {
	const {
		body: { user }
	} = req

	if (!user.email) {
		return res.boom.badData({
			errors: {
				email: 'is required'
			}
		})
	}

	if (!user.password) {
		return res.boom.badData({
			errors: {
				password: 'is required'
			}
		})
	}

	return passport.authenticate('local', { session: false }, (err, passportUser, info) => {
		if (err) {
			return next(err)
		}

		if (passportUser) {
			return res.json({ user: usersCore.toAuthJSON(passportUser) })
		}

		return res.boom.badRequest('', info)
	})(req, res, next)
})

//GET current route (required, only authenticated users have access)
router.get('/current', auth.required, (req, res) => {
	const {
		payload: { id }
	} = req

	return Users.findById(id).then(user => {
		if (!user) {
			return res.boom.badRequest()
		}

		return res.json({ user: usersCore.toAuthJSON(user) })
	})
})

module.exports = router
