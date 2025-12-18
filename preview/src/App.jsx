import { useState } from 'react'
import { Button } from 'minimalist-ui'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Button>Click me</Button>
      <div className="min-h-screen min-w-screen bg-black text-blue-500 text-4xl">
        Hello World ! Sir
      </div>
    </>
  )
}

export default App
