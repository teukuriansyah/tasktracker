import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home.jsx"
import Input from "./pages/Input.jsx"

export default function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/input" element={<Input/>} />
      </Routes>
    </BrowserRouter>
  )
}