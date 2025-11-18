import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import AboutUs from "./pages/AboutUsPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Trang home */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />

      </Routes>
    </Router>
  );
}

export default App;
