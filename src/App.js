import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Recipes from './Recipes';
import RecipeForm from './RecipeForm';
import './App.css';



const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};
function App() {
  const [recipes, setRecipes] = useState([]);
  const [isFormSubmitted, setIsFormSubmitted] = useState();

  useEffect(() => {
    const fetchRecipes = async () => {
      // GET recipes
      const response = await fetch('/recipes', {
        method: 'GET',
        headers: headers,
      })
      const data = await response.json();
      setRecipes(data);
    }
    fetchRecipes();

  }, [isFormSubmitted])

  return (
    <Router>
      <div className="App">
        <header className="App-header">
        <h1>Recipes</h1>
        </header>
        <main>
          <section>
          <Route exact path="/" render={() => <Recipes recipes={recipes} />} />
          </section>
        </main>
        <section className="recipe-form-container">
          <RecipeForm setIsFormSubmitted={setIsFormSubmitted}/>
        </section>
      </div>
    </Router>
  );
}

export default App;
