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
});

exports.model = mongoose.model("Recipe", recipeSchema);

recipe.save();
