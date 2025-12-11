
const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground');
// A list of 10 real camping images
const sampleImages = [
    'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1492648272180-61e45a8d98a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1496947850313-7743325fa58c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1532339142463-fd0a8979791a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1537905569824-f89f14cceb68?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1508873696983-2dfd5898f08b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1517824806704-9040b037703b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1525811902676-d458d3c50652?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
];


 mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp-maptiler')
  .then(() => console.log("Database connected"))
  .catch(err => console.error("connection error:", err));

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const sample = array => array[Math.floor(Math.random() * array.length)];


const seedDB = async () => {
    await Campground.deleteMany({});
    
    for (let i = 0; i < 300; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
      const camp = new Campground({
  author: '68fcec1479aa69ed71339e04',
  location: `${cities[random1000].city}, ${cities[random1000].state}`,  
  price,
  geometry: {
    type: "Point",
    coordinates: [
      cities[random1000].longitude,
      cities[random1000].latitude,
    ]
  },
  title: `${sample(descriptors)} ${sample(places)}`,
  description: 'Lorem ipsum dolor sit amet...',
images: [
                {
                    // Pick a random image from the array
                    url: sampleImages[Math.floor(Math.random() * sampleImages.length)],
                    filename: 'YelpCamp/sample'
                },
                {
                    // Pick another random one for the gallery
                    url: sampleImages[Math.floor(Math.random() * sampleImages.length)],
                    filename: 'YelpCamp/sample2'
                }
            ]



        })
        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})

