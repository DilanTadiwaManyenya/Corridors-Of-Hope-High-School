import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Academics from "./pages/Academics";
import Admissions from "./pages/Admissions";
import StudentLife from "./pages/StudentLife";
import Gallery from "./pages/Gallery";
import News from "./pages/News";
import Contact from "./pages/Contact";

import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";


export default function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/academics" element={<Academics />} />

        <Route path="/admissions" element={<Admissions />} />

        <Route path="/student-life" element={<StudentLife />} />

        <Route path="/gallery" element={<Gallery />} />

        <Route path="/news" element={<News />} />

        <Route path="/contact" element={<Contact />} />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}