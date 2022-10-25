import React,{ useRef, useState} from 'react'
import './Create.css'
import { projectfirestore } from '../firebase/config'

import { useHistory } 
        from "react-router-dom";

function Create() {
  const [title,settitle]=useState('')
  const [method,setmethod]=useState('')
  const [cookingtime,setcookingtime]=useState('')
  const [newingridient,setnewingridient]=useState('')

  const [ingridients,setingridients]=useState([])
const inputdom=useRef(null)
const history=useHistory()

  const handlesubmit=async (e)=>{

    e.preventDefault()
    const doc ={title,method,ingridients,cookingtime:cookingtime + ' minutes'}
   try {
   await projectfirestore.collection('recipes').add(doc)
   history.push('/')
     } catch (error) {
    console.log(error)
   }
    settitle('')
    setmethod('')
    setcookingtime('')
    setnewingridient('')
    setingridients([])

  }

  const handleinc=(e)=>{
    e.preventDefault()

    const ing=newingridient.trim()

    if(ing && !ingridients.includes(ing)){
      //setingridients(prev=>[...prev,ing])
      setingridients([...ingridients,ing])
      
    }
    setnewingridient('')
    inputdom.current.focus()    
  }
  return (
    <div className="create">
      <div className="page-title">Add a new recipe</div>
      <form onSubmit={handlesubmit}>
        <label >
          <span>Recipe title</span>
          <input type="text" value={title} onChange={e=>settitle(e.target.value)} required/>
        </label>
        <label >
          <span>Recipe Ingridients</span>

          <div className="ingredients">
            <input type="text" value={newingridient} onChange={(e)=>setnewingridient(e.target.value)} ref={inputdom} />
            <button onClick={handleinc} className="btn">Add</button>
          </div>
        </label>
        <p><b>Current ingredients:</b> {ingridients.map(i=><em key={i}>{i} </em>)}</p>
        <label >
          <span>Recipe Method</span>
          <textarea type="text" value={method} onChange={e=>setmethod(e.target.value)} required />
        </label>
        <label >
          <span>Cooking Time</span>
          <input type="number" value={cookingtime} onChange={e=>setcookingtime(e.target.value)} required/>
        </label>
        <button className="btn" type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Create