const addEventController = require("../controllers/addEventController");

module.exports = function (app) {
  // Matches with "/api/event"
  app.route("/api/submissions")
    .get(addEventController.findAll)
    .post(addEventController.create);

  // Matches with "/api/event/:id"
  app.route("/api/submissions/:id")
    .get(addEventController.findById)
    .put(addEventController.update)
    .delete(addEventController.remove);

}



