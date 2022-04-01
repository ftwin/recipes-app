import { useState } from 'react';
import Ingredients from './Ingredients';

export default function RecipeForm ({isFormSubmitted, setIsFormSubmitted}) {
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

  const [ingredientInputs, setIngredientInputs] = useState(addIngredientInputs());
  const [summary, setSummary] = useState("");
  const createRecipe = async () => {
    try {
      const body = { name, summary, ingredientInputs, directions }
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
            <Ingredients key={index} id={ingredient.id} ingredientInputs={ingredientInputs} setIngredientInputs={setIngredientInputs} isFormSubmitted={isFormSubmitted}/>)
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