import { BrowserRouter, Routes, Route } from "react-router-dom"
// import Home from "./pages/Home.jsx"
// import Input from "./pages/Input.jsx"
import Login from "./pages/Login.jsx"

export default function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/input" element={<Input/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
  )
}