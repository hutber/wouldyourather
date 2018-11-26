const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const session = require('express-session')
const cors = require('cors')
const mongoose = require('mongoose')
const errorHandler = require('errorhandler')
const boom = require('express-boom')

//Configure mongoose's promise to global promise
mongoose.promise = global.Promise

const isProduction = process.env.NODE_ENV === 'production'
process.env.SECRET = 'super_secret_wyr_fdfsngng' // TODO: set via ci
process.env.AUTOAPPROVE = true

const app = express()
app.use(cors())
app.use(boom())
app.use(require('morgan')('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')))
app.use(session({ secret: 'passport-wyr', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false }))

if (!isProduction) {
	app.use(errorHandler())
}

//Configure Mongoose
mongoose.connect('mongodb://localhost/wyr')
mongoose.set('debug', true)

//Models & routes
require('./models/Users')
require('./models/Questions')
require('./config/passport')
app.use(require('./routes'))

// //Error handlers & middlewares
// if(!isProduction) {
// 	app.use((req, res) => {
// 		res.status(err.status || 500)

// 		res.json({
// 			errors: {
// 				message: err.message,
// 				error: err,
// 			},
// 		})
// 	})
// }

// app.use((req, res) => {
// 	res.status(err.status || 500)

// 	res.json({
// 		errors: {
// 			message: err.message,
// 			error: {},
// 		},
// 	})
// })

app.listen(8000, () => console.log('Server running on http://localhost:8000/'))
