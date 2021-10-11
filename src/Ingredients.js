export default function Ingredients ({ quantity, setQuantity, description, setDescription, id }) {
  
  // const [quantity, setQuantity] = useState([]);
  // const [description, setDescription] =useState([])
  // const ingredients = [{quantity: "1", description: "bananas"},{quantity, description}];

  // console.log(quantity);
  // console.log(props.quantity);

  return (
    <div>
      <label>
      Quantity:
      <input
        className="quantity"
        type = "text"
        value = {quantity}
        id = {`quantity${id}`}
        onChange = {e => setQuantity(e.target.value)}
      />
      </label>
      <label>
        Description:
        <input
          type = "text"
          value = {description}
          id = {`description${id}`}
          onChange = {e => setDescription(e.target.value)} 
        />
      </label>
    </div>
  );
};

