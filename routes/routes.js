const express = require('express')
const router = express.Router()
// const controller = require("../controllers/index")
const axios = require("axios");
const { inspect } =  require('util');
 
router.get('/events/:loc', (req, res) => {
    axios({
        url: `https://api.yelp.com/v3/events?location=${req.params.loc}`,
        method: "get",
        headers: { 
            Authorization: 'Bearer eSsnxVxEO_xQsxlUU0vwhUix96goujkh93qUuZI5K_MJhHs0yk4u00llG0G0ZxQOZE0AVi9UoL18nUyxj0E9XIXPeFUxL_87k8uTuxbtH_ipbG636X7RdY2FF-hFXXYx' },
    }).then(response => res.json(response.data)).catch(err => console.log(err));

})

module.exports = router;