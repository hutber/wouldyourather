const mongoose = require('mongoose')

const { Schema } = mongoose

// Possibly have one sided questions for generation in the future

const QuestionSchema = new Schema({
	left: String,
	right: String,
	severity: Number,
	approved: Boolean,
	leftVotes: Number,
	rightVotes: Number,
	skipVotes: Number
})

mongoose.model('Questions', QuestionSchema)
