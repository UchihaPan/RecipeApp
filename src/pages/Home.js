import React, { useEffect, useState } from 'react'
import RecipeList from '../components/RecipeList'
import { projectfirestore } from '../firebase/config'

function Home() {
  const [data,setdata]=useState(null)
  const [isPending,setisPending]=useState(false)
  const [error,seterror]=useState(false)

useEffect(()=>{
  setisPending(true)
 const unsubscribe= projectfirestore.collection('recipes').onSnapshot((snapshot)=>{
    
    if(snapshot.empty){
      
      seterror('Sorry Not exist anything')
      setisPending(false)
    }else{
      let results=[]
      snapshot.docs.forEach(doc=>{
        results.push({id:doc.id,...doc.data()})
      })

      setdata(results)
      setisPending(false)
    }
  },(error)=>{
    seterror(error.message)
    setisPending(false)
  }
  )

  return ()=>unsubscribe()
},[])

  return (
    <div className="home">
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>loading...</p>}
      {data && data.length > 0 && <RecipeList recipes={data}/>}


    </div>
  )
}

export default Home