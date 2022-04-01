const mongoose = require("mongoose");
const { Schema } = mongoose;


const recipeSchema = new Schema({
	name: String,
	summary: String,
  ingredients: [
    {
			quantity: String,
			description: String,
    }
	],
	directions: [String],
  publishedDate: {
    type: Date,
    default: Date.now(),
	},
});

const Recipe = mongoose.model("Recipe", recipeSchema);
module.exports = Recipe;