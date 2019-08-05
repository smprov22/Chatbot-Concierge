const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/chatbot-concierge"
);

const answersSeed = [
  {
    kids: 15,
    duration: 87,
    location: 50,
    active: 2,
    price: 9
  }
 
];

db.Answers
  .remove({})
  .then(() => db.Answers.collection.insertMany(answersSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
