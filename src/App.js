import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero/Hero";
import Service from "./components/Service/Service";
import About from "./components/About/About";
import Products from "./components/Products/Products";
import Blog from "./components/Blog/Blog";
import Footer from "./components/Footer/Footer";
import NewsLetter from "./components/NewsLetter";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Products />} />
        <Route path="/testimonial" element={<Blog />} />
        <Route path="/faq" element={<NewsLetter />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
