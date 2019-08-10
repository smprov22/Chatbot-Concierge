const addEventController = require("../controllers/addEventController");
const axios = require("axios");

module.exports = function (app) {
  // Matches with "/api/submissions"
  app.route("/api/submissions")
    .get(addEventController.findAll)
    .post(addEventController.create);

  // Matches with "/api/submissions/:id"
  app.route("/api/submissions/:id")
    .get(addEventController.findById)
    .put(addEventController.approve)
    .delete(addEventController.remove);

  app.get("/api/events/:loc", (req, res) => {
    console.log(req.params.loc)
    axios({
      url: `https://api.yelp.com/v3/events?location=${req.params.loc}`,
      method: "get",
      headers: {
        Authorization: "Bearer eSsnxVxEO_xQsxlUU0vwhUix96goujkh93qUuZI5K_MJhHs0yk4u00llG0G0ZxQOZE0AVi9UoL18nUyxj0E9XIXPeFUxL_87k8uTuxbtH_ipbG636X7RdY2FF-hFXXYx"
      },
    }).then(response => console.log(response.data))
      .catch(err => console.log(err));

  })

  
}



