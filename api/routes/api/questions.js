const mongoose = require('mongoose')
const router = require('express').Router()
const auth = require('../auth')
const questionsCore = require('../../core/Questions')
const Questions = mongoose.model('Questions')

router.get('/', auth.optional, (_req, res) => {
	questionsCore.getRandomQuestion(question => {
		res.json(question)
	})
})

router.post('/', auth.optional, (req, res) => {
	const {
		body: { question }
	} = req

	const finalQuestion = new Questions(question)
	finalQuestion.approved = process.env.AUTOAPPROVE
	finalQuestion.leftVotes = 0
	finalQuestion.rightVotes = 0
	finalQuestion.skipVotes = 0

	return finalQuestion.save().then(() => res.json(finalQuestion))
})

// TODO: add user saved votes
router.post('/vote', auth.optional, (req, res) => {
	const {
		body: { vote }
	} = req

	Questions.findById(vote.questionId, (err, question) => {
		if (err) return res.boom.badRequest('question not found')
		else {
			switch (vote.side.toLowerCase()) {
				case 'left':
					question.leftVotes += 1
					break
				case 'right':
					question.rightVotes += 1
					break
				default:
					question.skipVotes += 1
					break
			}
		}
		question.save().then(() => res.json(question))
	})
})

module.exports = router
