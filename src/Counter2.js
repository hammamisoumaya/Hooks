import React ,{useState} from 'react'

const Counter2 = () => {
const [Counter,setCounter]=useState(0)
const add=()=>{
setCounter(Counter+1)
}
  return (
    <div>
        
        <h1>Counter Hooks</h1>
        {Counter}
        <button onClick={()=>add()}>ADD</button>



    </div>
  )
}

export default Counter2