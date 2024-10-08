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

// Middleware to set Content Security Policy
app.use((req, res, next) => {
    res.setHeader("Content-Security-Policy", "default-src 'self'; script-src 'self' https://vercel.live;");
    next();
});

// Serve static files from the "public/images" directory
app.use("/images", express.static(path.join(__dirname, "../public/images")));

// Root route for checking server status
app.get('/', (req, res) => {
    res.end("Server is running");
});

// Route to serve food data
app.get("/api/food", (req, res) => { // Changed route to "/api/food"
    const foodData = [
        {
            name: "Boiled Egg",
            price: 10,
            text: "A simple yet nutritious start to your day.",
            image: "/images/egg.png",
            type: "breakfast",
        },
        {
            name: "RAMEN",
            price: 25,
            text: "A quick and flavorful Japanese noodle soup.",
            image: "/images/ramen.png",
            type: "lunch",
        },
        {
            name: "GRILLED CHICKEN",
            price: 45,
            text: "A lean and healthy protein option, perfect for a balanced meal.",
            image: "/images/chicken.png",
            type: "dinner",
        },
        {
            name: "CAKE",
            price: 18,
            text: "Indulge in a sweet treat, perfect for any occasion.",
            image: "/images/cake.png",
            type: "breakfast",
        },
        {
            name: "BURGER",
            price: 23,
            text: "A classic American favorite, customizable to your taste.",
            image: "/images/burger.png",
            type: "lunch",
        },
        {
            name: "PANCAKE",
            price: 25,
            text: "Fluffy pancakes, a delicious breakfast or brunch option.",
            image: "/images/pancake.png",
            type: "dinner",
        },
    ];

    res.json(foodData);
});

// Global error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
});

// Start the server
app.listen(5000, () => console.log("Server is running"));
