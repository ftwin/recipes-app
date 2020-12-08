const express = require('express');
const router = express.Router();

//fake database
const recipes = require('../data');

router.get('/', (req, res) => {
    // response
    res.json(recipes);
});

// router.route('/add')
// .post((req, res) => {
//     //1. grab new info

//     const { ingredient, directions, quantity } = req.body; 
//     //2. push to array

//     recipes.push({
//         ingredient: ingredient,
//         directions: directions,
//         quantity: quantity
//     });
//     //3. respond with updated array
//     res.status(200).send({
//         data: recipes
//     });
// });

module.exports = router;