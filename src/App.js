import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Recipes from './Recipes';
// import './App.css';

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

function App() {
  const [recipes, setRecipes] = useState([]);
  useEffect(()=> {
    const fetchRecipes = async () => {
      // GET recipes
      const response = await fetch('http://localhost:3000/recipes', {
        method: 'GET',
        headers: headers,
      })
      const data = await response.json();
      setRecipes(data);
    }

    fetchRecipes();
  }, []) // empty array stops it from being called over and over again


  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Recipes Home</h1>
        </header>
        <main>
          <div className="recipe-card">
            {/* {props.text} */}
          </div>
          <button>Create a New Recipe</button>
          <Route exact path="/" render={() => <Recipes recipes={recipes} />} />
        </main>
      </div>
    </Router>

  );
}

export default App;
