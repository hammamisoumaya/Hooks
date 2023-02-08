import React,{useEffect, useState} from 'react'

const CounterHooks = () => {
const [counter,setCounter]=useState(0)
const increment =()=>{
    setCounter(counter + 1 )
}

const decrement =()=>{
    if(counter>0){
        setCounter(counter - 1 )
    }
}
const reset =()=>{

        setCounter(0)
    
}
const [name,setName]=useState('')
const handel=(e)=>{
    setName(e.target.value)
}
useEffect(()=>{
    console.log(`this ${name}`)
},[])



  return (
    <div>
        {counter}
<button onClick={()=>increment()}>Plus</button>
<button onClick={()=>decrement()}>Moins</button>
<button onClick={()=>reset()}>Reset</button>
<input placeholder='put something' value={name} onChange={(e)=>handel(e) } />




    </div>
  )
}

export default CounterHooks