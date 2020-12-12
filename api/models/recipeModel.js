const mongoose = require("mongoose");
const { Schema } = mongoose;


const recipeSchema = new Schema({
  name: String,
  ingredients: [
    {
			quantity: String,
			description: String,
    }
	],
	directions: [String],
  publishedDate: {
    type: Date,
    default: Date.now,
	},
	name: String,
	directions: String,
	ingredients: String,
});

// exports.model = mongoose.model("Recipe", recipeSchema);
const Recipe = mongoose.model("Recipe", recipeSchema);
module.exports = Recipe;