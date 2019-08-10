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
    },
    {
      title: "Sacramento Zoo",
      city: "Sacramento, CA",
      link: "https://www.saczoo.org/",
      image: "https://www.daytrippen.com/wp-content/uploads/2014/11/sacramento-zoo-train.jpg",
      ages: 0,
      duration: 1,
      location: 0,
      activityLevel: 1,
      price: 1,
      approved: false,
      description: "The Sacramento Zoo inspires appreciation, respect and a connection with wildlife and nature through education, recreation and conservation. A few of the programs we offer are: summer camp, family and group overnights, ZooMobile, wildlife stage shows, keeper chats, zoo previews, animal encounters and much more."
    },
    {
      title: "Fairytale Town",
      city: "Sacramento, CA",
      link: "https://www.fairytaletown.org/",
      image: "https://www.fairytaletown.org/wp-content/uploads/2018/10/1-Humpty-Dumptys-Bridge.jpg",
      ages: 0,
      duration: 1,
      location: 0,
      activityLevel: 0,
      price: 1,
      approved: false,
      description: "For 60 years, Fairytale Town has offered children and families a safe place to imagine, play and learn. With 26 playsets based on nursery rhymes and fairytales, a friendly flock of farm animals, two performing arts stages and several gardens, learning has never been more fun!"
    },
    {
      title: "SeaQuest Folsom",
      city: "Sacramento, CA",
      link: "https://folsom.visitseaquest.com/",
      image: "https://kncifm.com/wp-content/uploads/sites/6/2018/03/GettyImages-842398218.jpg",
      ages: 0,
      duration: 1,
      location: 2,
      activityLevel: 0,
      price: 1,
      approved: false,
      description: "SeaQuest is a complete hands-on, interactive experience - not only with animals, but also with the community. SeaQuest strives to be an integral part of nearby neighborhoods by supporting local nonprofits, hosting field trips for kids, educating students of all ages and even acting as a tropical pet rescue for animals."
    },
    {
      title: "California State Railroad Museum",
      city: "Sacramento, CA",
      link: "https://www.californiarailroad.museum/",
      image: "https://www.californiabeaches.com/wp-content/uploads/2016/05/california-sacramento-state-railway-museum-1.jpg",
      ages: 0,
      duration: 1,
      location: 2,
      activityLevel: 0,
      price: 1,
      approved: false,
      description: "Experience the feats of engineering and ingenuity that have kept the Golden State steaming along for nearly 200 years – from immaculately restored engines and cars to exciting events and exhibits that bring the railroad to life."
    },
    {
      title: "Crocker Art Museum",
      city: "Sacramento, CA",
      link: "https://www.crockerart.org/",
      image: "https://cdn.carmel-apartments.com/system/uploads/fae/image/asset/5008/1600x1040-discover-enchanting-artwork-at-the-crocker-art-museum-in-sacramento.jpg",
      ages: 1,
      duration: 1,
      location: 2,
      activityLevel: 0,
      price: 1,
      approved: false,
      description: "With art ranging from European drawings and Native American ceramics to California paintings and Chinese tomb figures, there is much to discover. If you are hoping to see the whole museum in one visit, we recommend you allow for at least three hours."
    },
    {
      title: "Sacramento Historic River Cruise",
      city: "Sacramento, CA",
      link: "https://www.hornblower.com/sacramento/sacramento-historic-river-cruises/",
      image: "https://my.hornblower.com/assets/images/products/hbsac/ec793343-50c7-4a5b-8f70-b9cfc5233a17.jpeg",
      ages: 1,
      duration: 1,
      location: 2,
      activityLevel: 0,
      price: 1,
      approved: false,
      description: "In this Sacramento river cruise, we’ll sail past Old Sacramento's famous historical sites, including the Delta King, the I Street Bridge, the Tower Bridge, and the Air Force Docks. As we tour, we’ll hear fascinating stories—from John Sutter, the founder of Sacramento to the wild days of the Gold Rush. California's capital city is filled with lively history and beautiful sights, and you’ll have the perfect view on this cruise. "
    },
    {
      title: "Capitol Park",
      city: "Sacramento, CA",
      link: "https://www.visitsacramento.com/listing/capitol-park/3764/",
      image: "https://live.staticflickr.com/4123/4935559470_23bb92b068_b.jpg",
      ages: 1,
      duration: 1,
      location: 2,
      activityLevel: 0,
      price: 1,
      approved: false,
      description: "This popular park, surrounding the California State Capitol, has trees from around the world and memorials to significant state events."
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
