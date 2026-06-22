import { BrowserRouter, Routes, Route } from "react-router-dom";

import { CartProvider } from "./context/CartContext";
import { SearchProvider } from "./context/SearchContext";

import TopNavbar from "./Components/TopNavbar";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Perfumes from "./pages/Perfumes";
import NewArrival from "./pages/NewArrival";
import BestSeller from "./pages/BestSeller";
import Offer from "./pages/Offer";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Checkout from "./pages/checkout";

function App() {
  return (
    <CartProvider>
      <SearchProvider>
        <BrowserRouter>
          <TopNavbar />
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/perfumes" element={<Perfumes />} />
            <Route path="/perfumes/:category" element={<Perfumes />} />
            <Route path="/new-arrivals" element={<NewArrival />} />
            <Route path="/best-sellers" element={<BestSeller />} />
            <Route path="/offers" element={<Offer />} />
            <Route path="/offers/:category" element={<Offer />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/Admin" element={<Admin />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>

          <Footer />
        </BrowserRouter>
      </SearchProvider>
    </CartProvider>
  );
}

export default App;