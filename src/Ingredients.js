import { useEffect, useState } from "react";
export default function Ingredients ({ id, ingredientInputs, setIngredientInputs, isFormSubmitted }) {
  
  const [quantity, setQuantity] = useState('');
  const [description, setDescription] = useState('')
  // const newArray = [...ingredientInputs];

  // setIngredientInputs(newArray)
  // const [newArray, setNewArray] = useState(ingredientInputs);
  const [newArray, setNewArray] = useState(ingredientInputs);
  console.log(newArray)
  
  if (newArray) {
    setNewArray(()=> {
      // console.log('test')
      const currentObject = newArray.find(obj => obj.id === id);
      currentObject.quantity = quantity;
      currentObject.description = description;
    })
  }
  
  // useEffect(()=> {
  // },[quantity, description, newArray])

  useEffect(()=> {
    setQuantity('');
    setDescription('')
  }, [isFormSubmitted]);

  return (
    <div key={id}>
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
  );
};

