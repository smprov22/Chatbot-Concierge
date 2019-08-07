const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const addEventSchema = new Schema({
  title: String,
  ages: Number,
  duration: Number,
  location: Number,
  activityLevel: Number,
  price: Number,
  approved: { type: Boolean, default: false },
  description: String,
  date: { type: Date, default: Date.now }
});

const AddEvent = mongoose.model("AddEvent", addEventSchema);

module.exports = AddEvent;