const express = require('express')
// const bodyParser = require('body-parser')
const morgan = require('morgan')
const session = require('express-session')
const dbConnection = require('./database') 
const MongoStore = require('connect-mongo')(session)
const passport = require('./passport');
const app = express()

const PORT = process.env.PORT || 3020;

// Route requires
// const routes = require("./routes");
const user = require('./routes/user')

// MIDDLEWARE
app.use(morgan('dev'))
// app.use(
// 	bodyParser.urlencoded({
// 		extended: false
// 	})
// )
// app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Sessions
app.use(
	session({
		secret: 'fraggle-rock', //pick a random string to make the hash that is generated secure
		store: new MongoStore({ mongooseConnection: dbConnection }),
		resave: false, //required
		saveUninitialized: false //required
	})
)

// Passport
app.use(passport.initialize())
app.use(passport.session()) // calls the deserializeUser

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/chatbot",  { useNewUrlParser: true });

// Routes
// Define API routes here
// app.use(routes);
app.use('/user', user)

// Starting Server 
app.listen(PORT, () => {
	console.log(`App listening on PORT: ${PORT}`)
})

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
