import './App.css'

import React, { useState } from 'react'

const TestProblems = () => {
  const [count, setCount] = useState(0)
  const unusedVar = 'test'

  const handleClick = () => {
    setCount(count + 1)
  }

  console.log(unusedVar)

  return (
    <div className="flex items-center rounded-lg bg-blue-500 p-4 text-white">
      <button onClick={handleClick} className="roundbg-red-500 px-4 py-2">
        Count: {count}
      </button>
    </div>
  )
}

export default TestProblems
