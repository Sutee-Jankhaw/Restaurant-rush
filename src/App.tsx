// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import { Button } from './components/ui/button'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className='flex flex-col gap gap-20'>
        <header className='header'>
          <h1>Restaurant Rush</h1>
        </header>
        <Button className="start" size="lg">Start</Button>
      </div>
    </div>
  )
}

export default App
