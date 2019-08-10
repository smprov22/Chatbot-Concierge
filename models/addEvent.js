const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const addEventSchema = new Schema({
  
  title: String,
  city: String,
  ages: Number,
  duration: Number,
  location: Number,
  activityLevel: Number,
  price: Number,
  approved: { type: Boolean, default: false },
  description: String,
  date: { type: Date, default: Date.now },
  link: String,
  image: { data: Buffer, contentType: String },
});

const AddEvent = mongoose.model("AddEvent", addEventSchema);

module.exports = AddEvent;