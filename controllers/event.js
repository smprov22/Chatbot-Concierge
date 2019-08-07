// const request = require('request');
// const queryString = require('query-string');

// const API_KEY = process.env.REACT_APP_EVENT_API_KEY;
// const url = 'https://www.eventbriteapi.com/v3/users/me/?';
// const dev_mode = false;
// const api_url = 'https://www.eventbriteapi.com/v3/events';
// const api_token = 'XG7FPMSVPXDUOMDHXYBX33H6DC5XJ32IZENSWNF66J4HEAIJRQ'
// module.exports = {
//     getAll: function(filter, cb) {
//         let events, clean_res;
//         filter.token = API_KEY
//         let token_api_url = `${url}token=${api_token}`;
// // SEARCH BY CATEGORIES
// // curl -X GET   https://www.eventbriteapi.com/v3/categories/   -H 'Authorization: Bearer PERSONAL_OAUTH_TOKEN'         
// // SEARCH BY LOCATION
// // curl -X GET   https://www.eventbriteapi.com/v3/events/search?location.address=vancovuer&location.within=10km&expand=venue   -H 'Authorization: Bearer PERSONAL_OAUTH_TOKEN' 
// // SEARCH BY DATE RANGE
// //         curl -X GET   https://www.eventbriteapi.com/v3/events/search?date_modified.range_start=2018-01-01T00:00:01Z   -H 'Authorization: Bearer PERSONAL_OAUTH_TOKEN' 
// // curl -X GET   https://www.eventbriteapi.com/v3/events/search?start_date.range_end=2019-01-01T00:00:01Z   -H 'Authorization: Bearer PERSONAL_OAUTH_TOKEN' 
// // curl -X GET   https://www.eventbriteapi.com/v3/events/search?start_date.keyword=this_week   -H 'Authorization: Bearer PERSONAL_OAUTH_TOKEN' 
//         if (!dev_mode) {
//             request( token_api_url , function(err, res) {
//                 events = JSON.parse(res.body).events;
//                 clean_res = events.map(function(event) {
//                     return {
//                         name: event.categories.text,
//                         location: event.location,
//                         start_date: event.start.local,
//                         url: event.url,
//                         // end: event.end,
//                         thumbnail: event.logo ? event.logo.url : 'https://www.eventbrite.com/'
//                     }
//                 })
//                 cb(err, res, clean_res);
//             })
//         } else {
//             console.log('development mode on')
//             cb(null, {
//                 body: 'developed body'
//             }, 'events');
//         }
//     }
// }