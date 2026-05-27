import './App.css'

import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <div className="flex items-center justify-center rounded-lg bg-blue-500 p-4 text-white">
      <button onClick={handleClick} className="rounded bg-red-500 px-4 py-2">
        Count: {count}
      </button>
    </div>
  )
}

export default App
