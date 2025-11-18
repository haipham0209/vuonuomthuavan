import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import AboutUs from "./pages/AboutUsPage";

function App() {
  return (
    // Thêm basename để SPA biết app chạy ở sub-path
    <Router basename="/vuonuomthuavan/home">
      <Routes>
        {/* Trang home */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
