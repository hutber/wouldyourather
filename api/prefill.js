// add this to app.js to prefill mongo on launch (1 time)
const mongoose = require('mongoose')
const Questions = mongoose.model('Questions')

const question = new Questions({
	left: 'Red',
	right: 'Blue',
	severity: 0,
	approved: false,
	leftVotes: 0,
	rightVotes: 0,
	skipVotes: 0
})
question.save()

const question2 = new Questions({
	left: 'Run real fast',
	right: 'Fly',
	severity: 0,
	approved: false,
	leftVotes: 0,
	rightVotes: 0,
	skipVotes: 0
})
question2.save()

const question3 = new Questions({
	left: 'Pineapple Pizza',
	right: 'Margherita Pizza',
	severity: 0,
	approved: false,
	leftVotes: 0,
	rightVotes: 0,
	skipVotes: 0
})
question3.save()

const question4 = new Questions({
	left: 'Vodka',
	right: 'Whiskey',
	severity: 1,
	approved: false,
	leftVotes: 0,
	rightVotes: 0,
	skipVotes: 0
})
question4.save()

const question5 = new Questions({
	left: 'Fuck your girlfriend in your mums body',
	right: 'Fuck your mum in your girlfriends body',
	severity: 5,
	approved: false,
	leftVotes: 0,
	rightVotes: 0,
	skipVotes: 0
})
question5.save()

const Users = mongoose.model('Questions')

const user1 = new Users({
	email: 'infosth@joshuatoth.com',
	salt: '644249f54aa2cfd5cd23741dc48290da',
	hash:
		'5e3ada99cddc9905d93f1cc4f19e676e6172428572fb614a290b96f771fe1dbe8515e25f2d350af2f4efc0f9a773abba87e1133667de71a89d7b28b7cc3b7efd553958b1daae46bbb207fb5fb4d3657451b62fa9a892aa4cb8cbdb48ef718135aa422fbdef23c0c61b45e1282cc387788fcfd6c5ad0943952163a4ec7bb776ad4f8cc1ed5ed678fd390938d6f28e75bd815d5ec2a44294d1c16f47442bbbb8084e8de1e01914b3f2c0af6612933c2d2cf3c5c1fa394e9a571728433fda0d3b857dd18d1555e096836355d21bcfa594bf204a630d7c9aba4ebdbcd58d1ea7c987ab8160e28fb8d124aae21c701e4f69d8c229cb952a457a36ad9fb08bf2e9a9513eab1c0abc5a4634f625ce0a3f9322e4a1af583f6146f468b886fcdc5a87b4e59712135a79ed8027d72fb236b8a8c9eb9ed0f1822933831920589ddd0462c17f368908f548297d5d0503768cc3ee0cdf238bd023502781861124f8c93c013ed71dddf0413c48e6c0c2abaf864b1bbb4761238c7c008798bd1c7a54df974e5d9b8f8f605fb7296c8777d3c90380b44afc2f5e90d9f4034f8c1cc8fda73ab45c39c1f01a15d3cce1e18ba3b711b046e8da3c3da3839c4716d959d09dffa413ef42a7f76138ad0747c4eab88a27ef0416b59d98b37f23176fa5249421a898fec83192041f1533fbb9a7ac52a9f1df6914315ebb08e8105bc58f34348ff88dc08217'
})
user1.save()
