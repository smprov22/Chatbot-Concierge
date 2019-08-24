const express = require('express')
// const bodyParser = require('body-parser')
const morgan = require('morgan')
const session = require('express-session')
const dbConnection = require('./database') 
const MongoStore = require('connect-mongo')(session)
const passport = require('./passport');
const app = express()

const PORT = process.env.PORT || 3001;

// MIDDLEWARE
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Sessions
app.use(
	session({
		secret: 'fraggle-rock', //pick a random string to make the hash that is generated secure
		store: new MongoStore({ mongooseConnection: dbConnection }),
		resave: true, //required
		saveUninitialized: true //required
	})
)

// Passport
app.use(passport.initialize())
app.use(passport.session()) // calls the deserializeUser

// Routes
// Define API routes here
require("./routes/user")(app);
require("./routes/apiRoutes")(app);

// Starting Server 
app.listen(PORT, () => {
	console.log(`App listening on PORT: ${PORT}`)
})

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
