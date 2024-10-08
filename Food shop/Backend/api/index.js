const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const corsOptions = {
  origin: ["https://my-food-zone.netlify.app"],
  methods: ["POST", "PUT", "DELETE", "GET"],
  credentials: true,
};

app.use(cors(corsOptions));

// Serve static files from the "public/images" directory
app.use("/images", express.static(path.join(__dirname, "../public/images")));

app.get('/',(res,req)=>{
  res.end("running");
})

app.get("/", (req, res) => {
  const foodData = [
    {
      name: "Boiled Egg",
      price: 10,
      text: "A simple yet nutritious start to your day.",
      image: "/images/egg.png",  // Correct path for Vercel
      type: "breakfast",
    },
    {
      name: "RAMEN",
      price: 25,
      text: "A quick and flavorful Japanese noodle soup.",
      image: "/images/ramen.png", // Correct path for Vercel
      type: "lunch",
    },
    {
      name: "GRILLED CHICKEN",
      price: 45,
      text: "A lean and healthy protein option, perfect for a balanced meal.",
      image: "/images/chicken.png", // Correct path for Vercel
      type: "dinner",
    },
    {
      name: "CAKE",
      price: 18,
      text: "Indulge in a sweet treat, perfect for any occasion.",
      image: "/images/cake.png", // Correct path for Vercel
      type: "breakfast",
    },
    {
      name: "BURGER",
      price: 23,
      text: "A classic American favorite, customizable to your taste.",
      image: "/images/burger.png", // Correct path for Vercel
      type: "lunch",
    },
    {
      name: "PANCAKE",
      price: 25,
      text: "Fluffy pancakes, a delicious breakfast or brunch option.",
      image: "/images/pancake.png", // Correct path for Vercel
      type: "dinner",
    },
  ];

  res.json(foodData);
});

// Export the app as a serverless function
module.exports = app; // Change this line
