
require('dotenv').config();
const path = require('path');
const express = require('express')
const morgan = require('morgan')
const session = require('express-session')
const dbConnection = require('./database')
const MongoStore = require('connect-mongo')(session)
const passport = require('./passport');
const app = express()
const PORT = process.env.PORT || 3001
require('dotenv').config({
	debug: process.env.DEBUG
});
// Route requires
const user = require('./routes/user')
const job = require('./routes/job')
const send_sms = require('./routes/send_sms')


// MIDDLEWARE
app.use(morgan('dev'))
app.use(
	express.urlencoded({
		extended: false
	})
)



if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, './client/build')))

	app.get('*', function(_, res) {
	  res.sendFile(path.join(__dirname, '../client/build/index.html'), function(err) {
		if (err) {
		  res.status(500).send(err)
		}
	  })
	})
  }


  


app.use(express.json())

// Sessions
app.use(
	session({
		secret: 'SnOmOre', //pick a random string to make the hash that is generated secure
		store: new MongoStore({ mongooseConnection: dbConnection }),
		resave: false, //required
		saveUninitialized: false //required
	})
)



// Passport
app.use(passport.initialize())
app.use(passport.session()) // calls the deserializeUser

// Routes
app.use('/user', user)
app.use('/api', job)
app.use('/sms', send_sms)

// Starting Server 
app.listen(PORT, () => {
	console.log(`App listening on PORT: ${PORT}`)
})
