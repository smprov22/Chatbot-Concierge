const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  title: String,
  ages: Integer,
  duration: Integer,
  location: Integer,
  activityLevel: Integer,
  price: Integer,
  approved: Boolean,
  description: String,
  date: { type: Date, default: Date.now }
});

const Events = mongoose.model("Events", eventSchema);

module.exports = Events;