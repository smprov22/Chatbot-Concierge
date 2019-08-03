const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  title: String,
  ages: [Integer],
  duration: [Integer],
  location: [Integer],
  activityLevel: [Integer],
  price: [Integer],
  date: { type: Date, default: Date.now }
});

const Event = mongoose.model("Book", eventSchema);

module.exports = Event;