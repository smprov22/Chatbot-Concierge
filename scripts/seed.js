const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/chatbot-concierge"
);

const eventSeed = [
    {
        title: "California State Capitol Museum Tour",
        city: "Sacramento, CA",
        ages: 0,
        duration: 0,
        location: 0,
        activityLevel: 1,
        price: 0,
        approved: false,
        description: "At the State Capitol, the past, present and future of California interact with equal force. The building serves as both a museum and the state’s working seat of government. Visitors to the Capitol can experience California’s rich history and witness the making of history through the modern lawmaking process.",
        link: "http://capitolmuseum.ca.gov/",
        image:"https://images.mapsofworld.com/allwonders/california-state-capitol-museum.jpg"
    },
    {
        title: "American River Bike Trail",
        city: "Sacramento, CA",
        ages: 1,
        duration: 1,
        location: 2,
        activityLevel: 2,
        price: 0,
        approved: false,
        description: "32 mile bike trail that starts in Discovery Park in Old Sac and ends near Folsom Lake at Beal's Point.",
        link:"https://www.traillink.com/trail/american-river-bike-trail-(jedediah-smith-memorial-trail)/",
        image:"https://media-cdn.tripadvisor.com/media/photo-s/02/68/1b/7d/filename-img-1666-jpg.jpg"
    },
    {
        title: "Second Saturday Art Walks",
        city: "Sacramento, CA",
        ages: 0,
        duration: 1,
        location: 1,
        activityLevel: 1,
        price: 0,
        approved: false,
        description: "On the 2nd Saturday of every month, Sacramento galleries and local businesses host an open house evening starting at around 5:30pm until 9pm or later. Enjoy the art exhibits, local artists, food and wine, live music, street fairs and special events.",
        link:"https://sacramento.downtowngrid.com/2nd-saturday/",
        image:"http://sacramento.downtowngrid.com/wp-content/uploads/2016/01/Art_Walk-400x279.jpg"
    },
    {
        title: "Folsom Historic District",
        city: "Sacramento, CA",
        ages: 0,
        duration: 0,
        location: 0,
        activityLevel: 0,
        price: 0,
        approved: false,
        description: "Historic Folsom is a destination offering a wide variety of things to do. Visit our art galleries and live theatre. Listen to live music and dance the night away at one of our nightclubs. It's also the place to go for a unique shopping experience.",
        link:"https//www.historicfolsom.org/",
        image:"https://media-cdn.tripadvisor.com/media/photo-s/01/74/d1/66/folsom-historic-district.jpg"
    },
    {
        title: "Apple Hill",
        city: "Sacramento, CA",
        ages: 0,
        duration: 0,
        location: 2,
        activityLevel: 0,
        price: 0,
        approved: false,
        description: "Representing over 50 local, family farms, the Apple Hill Growers are dedicated to supporting agriculture in our community.  Founded in 1964 with just 16 apple ranches, we’ve now grown to include unique fruit & veggie farms, wineries, B&Bs, flower gardens, Christmas tree farms, and even a day spa. Our winding roads and scenic beauty have been a popular destination for over 50 years.   Come enjoy the fruits of our Apple Hill Growers any time of year!",
        link: "http://applehill.com/",
        image:"https://pbs.twimg.com/media/DCFZJjSUAAARwN9.jpg"
    },
    {
        title: "Sacramento River Delta",
        city: "Sacramento, CA",
        ages: 0,
        duration: 1,
        location: 2,
        activityLevel: 1,
        price: 0,
        approved: false,
        description: "Just minutes from the city of Sacramento, the delta area feels like a million miles away from busy city life. Wandering along scenic Highway 160 throughout the southern portion of Sacramento County, the Delta area is rich in history and folklore. Whether you're exploring islands, fishing, swimming or enjoying a picnic with your family, you'll notice the pace of life slows as you enter this beautiful and majestic world. From fall through spring, it is a quiet getaway for people in search of back-road adventures and towns that haven't changed in 50 years. In summer, the waterways become full of people enjoying boating, waterskiing, and windsurfing. ",
        link: "https://visitcadelta.com/",
        image:"https://regionalchange.ucdavis.edu/sites/g/files/dgvnsk986/files/styles/sf_landscape_16x9/public/images/article/Aerial%20Photo%20Sac.jpg?h=0b568681&itok=8jZhs9s6"
    }
]

db.AddEvent
  .remove({})
  .then(() => db.AddEvent.collection.insertMany(eventSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
