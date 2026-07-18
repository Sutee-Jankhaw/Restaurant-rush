import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Game from "./pages/game";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/game" element={<Game />} />
    </Routes>
  );
}

export default App;
