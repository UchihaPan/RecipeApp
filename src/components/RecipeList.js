import React from 'react'
import './Recipelist.css'
import { BrowserRouter as Router, Route, Link, Switch} 
        from "react-router-dom";

function RecipeList({recipes}) {
  return (
    <div className="recipe-list">
        {recipes.map(recipe=>(
            <div className="card" key={recipe.id}>
                <h3>{recipe.title}</h3>
                <p>{recipe.cookingtime} to make</p>

                <div>{recipe.method.substring(0,100)}</div>
                <Link to={`/recipe/${recipe.id}`}>Cook this</Link>
            </div>
        ))}
    </div>
  )
}

export default RecipeList