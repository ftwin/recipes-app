const express = require('express');
// const { createRecipe } = require('../recipeController');
const router = express.Router();

//fake database
// const Recipe = require('../data');
const Recipe = require('../models/recipeModel');

router.route('/')
.get(async (req, res) => {
    // response
    const recipes = await Recipe.find();
    res.json(recipes);
})
.post(async (req, res) => {
    try {
        //1. grab new info
        const { name, summary, ingredientInputs, directions } = req.body;
        //2. push to array
        const newRecipe = new Recipe({
            name: name,
            summary: summary,
            ingredients: ingredientInputs,
            directions: directions
        });
        const recipe = await newRecipe.save();
        res.json(recipe);
        } catch(err) {
            console.log(err);
            res.status(500).json({ message: 'internal server error'})
        }

});

module.exports = router;