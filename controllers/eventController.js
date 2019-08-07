const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Event
      .find(req.query)
      .then(eventData => res.json(eventData))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Event
      .findById(req.params.id)
      .then(eventData => res.json(eventData))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Event
      .create(req.body)
      .then(eventData =>{ 
        res.json(eventData)})
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Event
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(eventData => res.json(eventData))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Event
      .findById({ _id: req.params.id })
      .then(eventData => eventData.remove())
      .then(eventData => res.json(eventData))
      .catch(err => res.status(422).json(err));
  },
  findAll: function(req, res) {
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
  remove: function(req, res) {
    db.AddEvent
      .findById({ _id: req.params.id })
      .then(eventData => eventData.remove())
      .then(eventData => res.json(eventData))
      .catch(err => res.status(422).json(err));
  }
};