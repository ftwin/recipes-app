import { useState } from 'react';
import Ingredients from './Ingredients';

export default function RecipeForm ({setIsFormSubmitted}) {
  const [name, setName] = useState("");
  const [directions, setDirections] = useState("");
  class ingredientTemplate {
    constructor() {
      this.id = Math.floor(Math.random() * 123456789 * Math.random())
      this.quantity = "";
      this.description = "";
    }
  }
  const addIngredientInputs = () => {
    let newInputs = [];
    for (let i = 0; i < 3; i++) {
      newInputs.push(new ingredientTemplate());
    }
    return newInputs;
  }

  const cleanIngredientsData = (ingredients) => {
    // only save ingredients input fields with data filled in
    const cleanData = ingredients.filter(ingredient => {
      return ingredient.quantity || ingredient.description;
    })
    return cleanData;
  }

  
  const [ingredientInputs, setIngredientInputs] = useState(addIngredientInputs());
  const cleanIngredients = cleanIngredientsData(ingredientInputs)
  console.log(cleanIngredients);
  console.log(ingredientInputs);
  const [summary, setSummary] = useState("");
  const createRecipe = async () => {
    try {
      const body = { name, summary, cleanIngredients, directions }
      console.log(body);
      const response = await fetch('/recipes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message);
      }
    } catch (err) {
      console.log('error?');
      console.log({ err });
    }
  }

  const handleSubmit = event => {
    event.preventDefault();
    createRecipe();
    console.log(`form submitted: ${name}`);
    setName("");
    setDirections("");
    setSummary("");
    setIngredientInputs(addIngredientInputs());
    setIsFormSubmitted(event);
  }

  const handleChange = (index, event) => {
    let data = [...ingredientInputs];
    data[index][event.target.name] = event.target.value;
    setIngredientInputs(data);
  }

  const handleClick = () => {
    setIngredientInputs([...ingredientInputs, ...addIngredientInputs()]);
  }

  return (
    <div className="recipe-form">
      <form onSubmit={handleSubmit}>
        <h2>Create a Recipe</h2>
        <label>
          Recipe Name:
          <input
            type = "text"
            value = {name}
            onChange = {e => setName(e.target.value)} 
          />

        </label>
        <label>
          Recipe Description:
          <textarea
            value = {summary}
            onChange = {e => setSummary(e.target.value)}
          />
        </label>
        <fieldset>
          <legend>Ingredients</legend>
          {ingredientInputs.map((ingredient, index) => {
            return (
            <Ingredients key={ingredient.id} ingredient={ingredient} handleChange={handleChange} index={index}/>)
          })}
          <button type="button" onClick={e => handleClick(e)} value="add ingredient">add more ingredients</button> 
        </fieldset>
        <label>
          Direction #1:
          <input
            type = "text"
            value = {directions}
            onChange = {e => setDirections(e.target.value)} 
          />
        </label>
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};