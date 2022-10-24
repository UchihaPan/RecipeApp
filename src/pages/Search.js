import React from 'react'
import { useLocation } from 'react-router-dom'
import RecipeList from '../components/RecipeList'
import {useFetch} from '../hooks/useFetch'



function Search() {

  const querystring=useLocation().search
  const queryparams=new URLSearchParams(querystring)
  const query=queryparams.get('q')
  const url = 'http://localhost:5000/recipes?q=' + query

  const { data, isPending, error }=useFetch(url)



  return (
    <div>
    <h2 className="page-title">Recipe Including "{query}"</h2>
    {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>loading...</p>}
      {data && <RecipeList recipes={data}/> } 

      <p className="page-title">{data && data.length} results available...</p>
      
       </div>
  )
}

export default Search