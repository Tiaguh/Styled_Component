import "./App.css"
import Home from "./Pages/Home/Home"
import MathGame from "./Pages/MathGame/MathGame"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MathGame />} />
      </Routes>
    </Router>
  )
}