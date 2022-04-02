export default function Ingredients ({ ingredient, handleChange, index }) {

  return (
    <div index={index}>
      <label>
      Quantity:
      <input
        className="quantity"
        name = 'quantity'
        type = "text"
        value = {ingredient.quantity}
        onChange = {event => handleChange(index, event)}
      />
      </label>
      <label>
        Description:
        <input
          name = 'description'
          type = "text"
          value = {ingredient.description}
          onChange = {event => handleChange(index, event)} 
        />
      </label>
    </div>
  );
};

