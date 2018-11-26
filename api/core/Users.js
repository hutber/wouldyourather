const crypto = require('crypto') // bcrypt?
const jwt = require('jsonwebtoken')

//TODO: validate that email hasn't been used before

const saltAndHash = password => {
	const salt = crypto.randomBytes(16).toString('hex')
	return {
		salt: salt,
		hash: crypto.pbkdf2Sync(password, salt, 10000, 512, 'sha512').toString('hex')
	}
}

const validatePassword = (salt, hash, password) => {
	const tempHash = crypto.pbkdf2Sync(password, salt, 10000, 512, 'sha512').toString('hex')
	return hash === tempHash
}

const generateJWT = user => {
	const today = new Date()
	const expirationDate = new Date(today)
	expirationDate.setDate(today.getDate() + 60)

	return jwt.sign(
		{
			email: user.email,
			id: user._id,
			exp: parseInt(expirationDate.getTime() / 1000, 10)
		},
		process.env.SECRET
	)
}

const toAuthJSON = user => {
	return {
		_id: user._id,
		email: user.email,
		token: generateJWT(user)
	}
}

module.exports = {
	saltAndHash,
	validatePassword,
	generateJWT,
	toAuthJSON
}
