import React from 'react'
import RecipeList from '../components/RecipeList'

import {useFetch} from '../hooks/useFetch'

function Home() {
  const { data, isPending, error }=useFetch('http://localhost:5000/recipes')
  return (
    <div className="home">
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>loading...</p>}
      {data && <RecipeList recipes={data}/>}


    </div>
  )
}

export default Home