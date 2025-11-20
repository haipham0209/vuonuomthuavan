import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./pages/HomePage";
import AboutUs from "./pages/AboutUsPage";
import ContactPage from "./pages/ContactPage";
import NewsPage from "./pages/NewsPage";
import ProductsPage from "./pages/ProductsPage";

import 'bootstrap/dist/css/bootstrap.min.css';

// import AboutUs from "./pages/AboutUsPage";


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/trang-chu" element={<Home />} />
          <Route path="/ve-chung-toi" element={<AboutUs />} />
          <Route path="/lien-he" element={<ContactPage />} />
          <Route path="/tin-tuc" element={<NewsPage />} />
          <Route path="/cay-giong" element={<ProductsPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
