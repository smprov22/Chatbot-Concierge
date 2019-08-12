const db = require("../models");

// Defining methods for the addEventController
module.exports = {
  findAll: function(req, res) {
    console.log("Find All")
    db.AddEvent
      .find()
      .then(eventData => res.json(eventData))
      .catch(err => res.status(422).json(err));
  },
  findByParams: function(req, res) {
    db.AddEvent
      .find({
        ages: req.params.ages,
        location: req.params.location,
        duration: req.params.duration,
        activityLevel: req.params.activityLevel,
        price: req.params.price
      })
      .then(eventData => res.json(eventData))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.AddEvent
      .findById(req.params.id)
      .then(eventData => res.json(eventData))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.AddEvent
      .create(req.body)
      .then(eventData =>{ 
        res.json(eventData)})
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.AddEvent
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(eventData => res.json(eventData))
      .catch(err => res.status(422).json(err));
  },
  approve: function(req, res) {
    db.AddEvent
      .findOneAndUpdate({ _id: req.params.id }, {approved : true})
      .then(eventData => res.json(eventData))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.AddEvent
      .findById({ _id: req.params.id })
      .then(eventData => eventData.remove())
      .then(eventData => res.json(eventData))
      .catch(err => res.status(422).json(err));
  }
};