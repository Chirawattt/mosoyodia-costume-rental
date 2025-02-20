import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Yukata from "./pages/Yukata";
import Kimono from "./pages/Kimono";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/uniform-school" />
        <Route path="/kimono" element={<Kimono />} />
        <Route path="/yukata" element={<Yukata />} />
      </Routes>
    </Router>
  );
}

export default App;
