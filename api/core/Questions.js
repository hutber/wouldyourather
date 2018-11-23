const mongoose = require('mongoose')
const Questions = mongoose.model('Questions')

const getRandomQuestion = callback => {
	Questions.aggregate([{ $sample: { size: 1 } }]).then(question => {
		callback(question)
	})
}

module.exports = {
	getRandomQuestion
}
