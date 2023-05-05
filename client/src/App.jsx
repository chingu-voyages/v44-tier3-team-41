import { useState } from 'react'
import HomePage from './page/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex justify-center'>
      <HomePage />
    </div>
  )
}

export default App
