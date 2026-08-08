import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Academics from "./pages/Academics";
import Admissions from "./pages/Admissions";
import StudentLife from "./pages/StudentLife";
import Gallery from "./pages/Gallery";
import News from "./pages/News";
import Contact from "./pages/Contact";

// Layout
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-[#F8FAFC]">

        {/* Global Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="flex-grow">
          <Routes>

            {/* Home */}
            <Route
              path="/"
              element={<Home />}
            />

            {/* About */}
            <Route
              path="/about"
              element={<About />}
            />

            {/* Academics */}
            <Route
              path="/academics"
              element={<Academics />}
            />

            {/* Admissions */}
            <Route
              path="/admissions"
              element={<Admissions />}
            />

            {/* Student Life */}
            <Route
              path="/student-life"
              element={<StudentLife />}
            />

            {/* Gallery */}
            <Route
              path="/gallery"
              element={<Gallery />}
            />

            {/* News */}
            <Route
              path="/news"
              element={<News />}
            />

            {/* Contact */}
            <Route
              path="/contact"
              element={<Contact />}
            />

          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

      </div>
    </BrowserRouter>
  );
}