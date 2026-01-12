import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BlogPage from "./Pages/BlogPage";
import HomePage from "./Pages/HomePage";
import Contact from "./Pages/Contact";
import ServicesPage from "./Pages/ServicesPage";
import Shop from "./Pages/Shop";
import About from "./Pages/About";
import ErrorPage from "./Pages/ErrorPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
