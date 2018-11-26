const mongoose = require('mongoose')
const { Schema } = mongoose

const VoteSchema = new Schema({
	questionId: String,
	side: String,
	skip: Boolean,
	userId: String
})

mongoose.model('Votes', VoteSchema)
