import React from 'react'
import './Recipelist.css'
import { BrowserRouter as Router, Route, Link, Switch} 
        from "react-router-dom";

function RecipeList({recipes}) {

  if(recipes.length===0){
    return(
      <div className="error"><b>Sorry...<p>Not exist anything for that query</p></b></div>
    )
  }
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