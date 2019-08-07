const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  title: String,
  ages: Number,
  duration: Number,
  location: Number,
  activityLevel: Number,
  price: Number,
  approved: Boolean,
  description: String,
  date: { type: Date, default: Date.now }
});

const Events = mongoose.model("Events", eventSchema);

module.exports = Events;