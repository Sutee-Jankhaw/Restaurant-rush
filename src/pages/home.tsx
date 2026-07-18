import { useNavigate } from "react-router-dom";
import { Button } from '../components/ui/button'
import './home.css'

function Home() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className='flex flex-col gap gap-20'>
        <header className='header'>
          <h1>Restaurant Rush</h1>
        </header>
        <Button className="start" size="lg" onClick={() => navigate("/game")}>Start</Button>
      </div>
    </div>
  )
}

export default Home
