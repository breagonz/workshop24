import './App.css'
import {puppyList} from './data.js'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  console.log(puppyList)
  const [puppies, setPuppies] = useState(puppyList)
  return (
    <>
      <div>{
        puppies.map((puppy) => {
          return <p>{puppy.name}</p>
        })
        }      
      </div>
      
    </>
  )
}

export default App
