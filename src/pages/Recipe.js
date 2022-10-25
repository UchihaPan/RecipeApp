import React,{useState,useEffect} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  Link,
} from "react-router-dom";
import './Recipe.css';
import { projectfirestore } from '../firebase/config'



function Recipe() {
  const [recipe,setrecipe]=useState(null)
  const [isPending,setisPending]=useState(false)
  const [error,seterror]=useState(false)
  let { id } = useParams()

  useEffect(()=>{

    setisPending(true)
   const unsub= projectfirestore.collection('recipes').doc(id).onSnapshot((doc)=>
 {   if(doc.exists){
      setisPending(false)
      setrecipe({...doc.data()})
    }

  else{                                           
    seterror('Not available')
    setisPending(false)

  }}
    )


    return ()=>unsub()


  },[id])



  return (
    <div className="recipe">
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>loading....</p>}

      {recipe && recipe!= null &&
      <div >
      <h2 className='page-title'>{recipe.title}</h2>
      <p>{recipe.cookingtime } to cook</p>
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