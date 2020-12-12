function Recipes({ recipes }) {
    return(
        <div className="recipes">
            {recipes.map(recipe => {
                return (
                    <div key={recipe._id}>
                        <h3>{recipe.name}</h3>
                        <ul className="ingredients-list">
                            {recipe.ingredients.map(ingredient => {
                                return (
                                    <li key={ingredient._id}>
                                        {ingredient.quantity} {ingredient.description}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                )
            })}
        </div>
    )
}

export default Recipes