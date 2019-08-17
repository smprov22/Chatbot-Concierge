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
  findFilter: function(req, res) {
    console.log("Find Filter")
    console.log(req.query)
    db.AddEvent
      .find(req.query)
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
    console.log("Updating and Approving")
    console.log(req.body)
    db.AddEvent
      .findOneAndUpdate({ _id: req.params.id }, req.body)
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