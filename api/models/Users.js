const mongoose = require('mongoose')
// const logger = require('../helpers/logger')

const { Schema } = mongoose

const UsersSchema = new Schema({
	email: String,
	hash: String,
	salt: String,
	tAndCs: Boolean
})

mongoose.model('Users', UsersSchema)
