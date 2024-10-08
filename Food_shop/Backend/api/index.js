const express = require('express');
const path = require('path');
const cors = require('cors');

const router = express.Router();
// Route to serve food data
router.get("/food", (req, res) => { 
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

module.exports = router;
