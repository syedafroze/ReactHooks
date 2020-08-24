import React from 'react'
import {useState,useEffect,useReducer} from 'react'


function reducer(state,action){
  switch(action.type){
    case 'Add': return   [...state,action.payload.text]
  }
}

function UseReduce() {
let [state,dispatch]=useReducer(reducer,[])
let [name,setName]=useState('');




  function handleSubmit(e){
    e.preventDefault();
    dispatch({type:"Add",payload:{text:name}})
  }

  return (<div>
    <input type="text" onChange={(e)=>setName(e.target.value)}></input>
    <button onClick={handleSubmit}>Submit</button>
    {state.map((i,index)=><p key={index}>{i}</p>)}
    </div>
  )
}

export default UseReduce
