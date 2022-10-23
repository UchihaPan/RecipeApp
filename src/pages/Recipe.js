import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  Link,
} from "react-router-dom";
import {useFetch} from '../hooks/useFetch'
import './Recipe.css'


function Recipe() {
  let { id } = useParams()
  const url=   'http://localhost:5000/recipes/'+ id
  const { data:recipe, isPending, error }=useFetch(url)



  return (
    <div className="recipe">
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>loading....</p>}

      {recipe && 

      <div >
      <h2 className='page-title'>{recipe.title}</h2>
      <p>{recipe.cookingTime} to cook</p>
      <ul>
      {recipe.ingredients && recipe.ingredients.map(item=><li key={item}>{item}</li>)}
      </ul>
      
      
      <p className='method'>{recipe.method}</p>
      </div>



      }


    </div>
  )
}

export default Recipe