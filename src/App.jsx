import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import Products from "./pages/Products";
import ProductDetailsPage from "./pages/ProductDetailsPage";

export default function App() {
  return (
    <>

      <div className="min-h-screen">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:name" element={<ProductDetailsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      </div>
      <Footer />
    </>
  );
}
