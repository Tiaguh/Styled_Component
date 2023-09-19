import "./App.css"
import Home from "./Pages/Home/Home"
import Teste from "./Pages/Teste/Teste"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teste" element={<Teste />} />
      </Routes>
    </Router>
  )
}