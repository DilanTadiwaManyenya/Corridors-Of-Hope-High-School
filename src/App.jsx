import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Academics from "./pages/Academics";
import Admissions from "./pages/Admissions";
import StudentLife from "./pages/StudentLife";
import Gallery from "./pages/Gallery";
import News from "./pages/News";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Layout
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";

const pageMeta = {
  "/": ["Corridors Of Hope High School | Harare, Zimbabwe", "Academic excellence, character development and opportunity at Corridors Of Hope High School."],
  "/about": ["About | Corridors Of Hope High School", "Discover the purpose, values and learning community at Corridors Of Hope High School."],
  "/academics": ["Academics | Corridors Of Hope High School", "Explore learning areas and the academic approach at Corridors Of Hope High School."],
  "/admissions": ["Admissions | Corridors Of Hope High School", "Find out how to make an admissions enquiry at Corridors Of Hope High School."],
  "/student-life": ["Student Life | Corridors Of Hope High School", "Explore student activities, leadership, sport and school life at Corridors Of Hope."],
  "/gallery": ["Gallery | Corridors Of Hope High School", "View moments from Corridors Of Hope High School."],
  "/news": ["News | Corridors Of Hope High School", "News, notices and updates from Corridors Of Hope High School."],
  "/contact": ["Contact | Corridors Of Hope High School", "Contact Corridors Of Hope High School in Harare, Zimbabwe."],
};

function PageMetadata() {
  const { pathname } = useLocation();
  useEffect(() => {
    const [title, description] = pageMeta[pathname] ?? ["Page not found | Corridors Of Hope High School", "Corridors Of Hope High School."];
    document.title = title;
    let descriptionTag = document.querySelector('meta[name="description"]');
    if (!descriptionTag) { descriptionTag = document.createElement("meta"); descriptionTag.setAttribute("name", "description"); document.head.appendChild(descriptionTag); }
    descriptionTag.setAttribute("content", description);
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <PageMetadata />
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
            <Route path="*" element={<NotFound />} />

          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

      </div>
    </BrowserRouter>
  );
}
