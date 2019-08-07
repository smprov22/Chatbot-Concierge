const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const answersSchema = new Schema({
    kids: { type: Number, required: true },
    duration: { type: Number, required: true },
    location: { type: Number, required: true },
    active: { type: Number, required: true },
    price: { type: Number, required: true },
    description: {type: String},
    city:{type: String},
    date: { type: Date, default: Date.now }
});

const Answers = mongoose.model("Answers", answersSchema);

module.exports = Answers;
