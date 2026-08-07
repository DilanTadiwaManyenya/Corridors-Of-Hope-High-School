import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { AnimatePresence, motion } from "framer-motion";

import logo from "../../assets/images/cohhs-logo.png";
import { NAV_LINKS } from "../../utils/constants";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <>
      {/* ================= NAVBAR ================= */}

      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/85 backdrop-blur-xl shadow-xl py-3"
            : "bg-transparent py-5"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">

          {/* Logo */}

          <Link to="/" className="flex items-center gap-4">

            <motion.img
              whileHover={{ scale: 1.05 }}
              src={logo}
              alt="Corridors Of Hope"
              className="w-14 h-14 object-contain"
            />

            <div>

              <h2
                className={`font-bold text-lg transition ${
                  scrolled ? "text-[#102A5C]" : "text-white"
                }`}
              >
                Corridors Of Hope
              </h2>

              <p
                className={`text-xs transition ${
                  scrolled ? "text-gray-500" : "text-gray-300"
                }`}
              >
                Opening Corridors Of Life
              </p>

            </div>

          </Link>

          {/* Desktop Links */}

          <ul className="hidden lg:flex items-center gap-10">

            {NAV_LINKS.map((link) => (

              <li key={link.path}>

                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `relative font-medium transition ${
                      scrolled
                        ? "text-[#102A5C]"
                        : "text-white"
                    } ${
                      isActive
                        ? "text-[#C9A13B]"
                        : "hover:text-[#C9A13B]"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.title}

                      <motion.span
                        layoutId="navbar-indicator"
                        className={`absolute left-0 -bottom-2 h-[3px] rounded-full bg-[#C9A13B] ${
                          isActive ? "w-full" : "w-0"
                        }`}
                      />
                    </>
                  )}
                </NavLink>

              </li>

            ))}

          </ul>

          {/* CTA */}

          <Link
            to="/admissions"
            className="
              hidden
              lg:flex
              items-center
              bg-[#C9A13B]
              hover:bg-[#B88D22]
              text-white
              px-7
              py-3
              rounded-full
              font-semibold
              shadow-xl
              transition
              hover:-translate-y-1
            "
          >
            Apply for 2026 →
          </Link>

          {/* Mobile Button */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden text-3xl ${
              scrolled ? "text-[#102A5C]" : "text-white"
            }`}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
          </button>

        </nav>
      </header>

      {/* ================= MOBILE MENU ================= */}

      <AnimatePresence>

        {menuOpen && (

          <>
            {/* Overlay */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            />

            {/* Drawer */}

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                damping: 25,
              }}
              className="
                fixed
                top-0
                right-0
                h-screen
                w-[320px]
                bg-white
                z-50
                shadow-2xl
                px-8
                py-10
              "
            >

              <div className="flex justify-between items-center mb-12">

                <img
                  src={logo}
                  alt="Logo"
                  className="w-14"
                />

                <button
                  onClick={() => setMenuOpen(false)}
                  className="text-3xl text-[#102A5C]"
                >
                  <HiOutlineX />
                </button>

              </div>

              <nav className="flex flex-col gap-7">

                {NAV_LINKS.map((link) => (

                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      isActive
                        ? "text-[#C9A13B] text-xl font-semibold"
                        : "text-[#102A5C] text-xl hover:text-[#C9A13B] transition"
                    }
                  >
                    {link.title}
                  </NavLink>

                ))}

              </nav>

              <Link
                to="/admissions"
                onClick={() => setMenuOpen(false)}
                className="
                  mt-12
                  block
                  text-center
                  bg-[#102A5C]
                  text-white
                  py-4
                  rounded-full
                  font-semibold
                  hover:bg-[#0B2149]
                  transition
                "
              >
                Apply for 2026
              </Link>

            </motion.div>

          </>

        )}

      </AnimatePresence>
    </>
  );
}