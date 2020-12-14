import { useState } from 'react';

export default function RecipeForm (props) {
  const [name, setName] = useState("");
  const [directions, setDirections] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] =useState("")
  const ingredients = [{quantity, description}];
  const [summary, setSummary] = useState("");


  const createRecipe = async () => {
    try {
      const body = { name, summary, ingredients, directions }
      const response = await fetch('/recipes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      console.log(JSON.stringify(body));
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
    props.onSubmit();
    console.log(`form submitted: ${name}`);
    setName("");
    setDirections("");
    setQuantity("");
    setDescription("");
    setSummary("");
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
          <div>
            <label>
            Quantity:
            <input
              className="quantity"
              type = "text"
              value = {quantity}
              onChange = {e => setQuantity(e.target.value)} 
            />
            </label>
            <label>
              Description:
              <input
                type = "text"
                value = {description}
                onChange = {e => setDescription(e.target.value)} 
              />
            </label>
          </div>
          <div>
            <label>
            Quantity:
            <input
              className="quantity"
              type = "text"
              value = {quantity}
              onChange = {e => setQuantity(e.target.value)} 
            />
            </label><label>
              Description:
              <input
                type = "text"
                value = {description}
                onChange = {e => setDescription(e.target.value)} 
              />
            </label>
          </div>
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