import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import History from "./pages/History.js";
import "./styles.css"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </BrowserRouter>
  );
}