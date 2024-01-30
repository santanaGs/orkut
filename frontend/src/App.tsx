import Home from "./pages/Home"
import Login from "./pages/Login"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Register from "./pages/Register"

function App() {
  return (
    <Router >
      <Routes >
        <Route path="/" element={<Login />} />
        <Route path="/profile" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  )
}

export default App
