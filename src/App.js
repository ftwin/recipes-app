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
  useEffect(() => {
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
  }, []) //empty array stops it from being called over and over again in an infinite loop. (inside the array it is looking for dependencies, when they change it will re-run the callback function, since it's epty this  will never happen)

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
      </div>
    </Router>
  );
}

export default App;
