import { Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";

import Home from "./pages/home";
import Game from "./pages/game";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
      </Routes>
      <Toaster position="top-center"/>
    </>
  );
}

export default App;
