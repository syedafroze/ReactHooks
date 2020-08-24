import React, { useCallback, useRef } from "react";
import { useState, useEffect, useMemo,useRefs } from "react";
import "./App.css";
import UseReduce from './Component/useReduce'
function App() {
  //useState
  let [count, setCount] = useState(0);
  let [text,setText]=useState('')
  let num = 3;
  let renderCount= useRef(0);
  console.log(renderCount)
  //-------------------useMemo------------------------------
  let fact = useMemo(() => factorial(num), [count]);

  //------------------useCallback()------------------------
  let increment = useCallback(() => {
    return count;
  }, [count]);

  //  console.log(increment(count));
  // console.log(increment);

  //-----------useEffect----------------
  useEffect(() => {
    document.title = count + 1;
    
  }, [count]);

  useEffect(()=> {renderCount.current=renderCount.current+1})

   let inputRef =useRef()

   function focus(){
    inputRef.current.focus()
   }

  return (
    <div className="App">
      <h2>Count is : {count}</h2>
      <button onClick={() => setCount(count + 1)}>Click</button>
<br></br>
<hr></hr>
<label>Name : </label>
      <input type="text" placeholder="Enter iur name" ref={inputRef} onChange={(e)=>setText(e.target.value)}></input>
      
      <h2>Name is - {text}</h2>
      <button onClick={focus}>Enter Name</button>
  <h2>RenderCount-{renderCount.current}</h2>
  <hr></hr>
  <UseReduce></UseReduce>
    </div>
  );
}
export default App;

function factorial(num) {
  if (num == 0) {
    console.log(num);
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}
