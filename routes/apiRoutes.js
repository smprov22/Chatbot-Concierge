const addEventController = require("../controllers/addEventController");
const axios = require("axios");

module.exports = function (app) {
  // Matches with "/api/submissions"
  app.route("/api/submissions")
    .get(addEventController.findAll)
    .post(addEventController.create);

  app.route("/api/submissions/filter")
    .get(addEventController.findFilter)

  // Matches with "/api/submissions/:id"
  app.route("/api/submissions/:id")
    .get(addEventController.findById)
    .put(addEventController.approve)
    .delete(addEventController.remove);
  
}



