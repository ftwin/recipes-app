function Recipes({ recipes }) {
    return(
        <div className="recipes">
            {recipes.map(recipe => {
                return (
                    <div key={recipe._id} className="recipe-card">
                        <h2>{recipe.name}</h2>
                        <p>{recipe.summary}</p>
                        <h3>Ingredients</h3>
                        <ul className="ingredients-list">
                            {recipe.ingredients.map(ingredient => {
                                return (
                                    <li key={ingredient._id}>
                                        {ingredient.quantity} {ingredient.description}
                                    </li>
                                )
                            })}
                        </ul>
                        <h3>Directions</h3>
                        <ol className="directions">
                            {recipe.directions.map(direction => {
                                return (
                                    <li key={direction._id}>
                                        {direction}
                                    </li>
                                )
                            })}
                        </ol>
                    </div>
                )
            })}
        </div>
    )
}

export default Recipes