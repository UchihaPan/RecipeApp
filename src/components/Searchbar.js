import React,{useState} from 'react'
import './Search.css'
import { useHistory } 
        from "react-router-dom";

function Searchbar() {
    const [term,setterm]=useState('')
    const history=useHistory()


    const handleform=(e)=>{
        e.preventDefault()

        setterm('')
        history.push(`/search?q=${term}`)

    }

  return (

   <div className="searchbar">

   <form onSubmit={handleform}>

    <label htmlFor="search">Search</label>
    <input type="text" id='search' value={term} onChange={e=>setterm(e.target.value)}/>
   </form>

   </div>

  )
}

export default Searchbar