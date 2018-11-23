const mongoose = require('mongoose')
// const logger = require('../helpers/logger')

const { Schema } = mongoose

const UsersSchema = new Schema({
	email: String,
	hash: String,
	salt: String
})

mongoose.model('Users', UsersSchema)
