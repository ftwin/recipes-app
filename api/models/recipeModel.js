const mongoose = require("mongoose");
const { Schema } = mongoose;


const recipeSchema = new Schema({
  title: String,
  ingredients: [
    {
			quanity: String,
			description: String,
			required: true,
    }
	],
	directions: [
		{
			type: String,
			required: true,
		}
	],
  publishedDate: {
    type: Date,
    default: Date.now,
	},
	// name: String,
	// directions: String,
	// ingredients: String,
});

// exports.model = mongoose.model("Recipe", recipeSchema);
const Recipe = mongoose.model("Recipe", recipeSchema);
module.exports = Recipe;