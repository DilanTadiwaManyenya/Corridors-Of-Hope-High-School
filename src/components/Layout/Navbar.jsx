import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  HiOutlineMenuAlt3,
  HiOutlineX,
} from "react-icons/hi";
import { FiArrowRight } from "react-icons/fi";

import logo from "../../assets/images/cohhs-logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Academics", path: "/academics" },
  { name: "Admissions", path: "/admissions" },
  { name: "Student Life", path: "/student-life" },
  { name: "Gallery", path: "/gallery" },
  { name: "News", path: "/news" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-gray-200/70 bg-white/95 shadow-sm backdrop-blur-xl"
            : "bg-[#102A5C]/95 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="flex h-[4.5rem] items-center justify-between">

            {/* BRAND */}
            <Link
              to="/"
              onClick={closeMenu}
              className="flex items-center gap-3"
            >
              <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-lg bg-white shadow-sm">
                <img
                  src={logo}
                  alt="Corridors Of Hope High School"
                  className="h-full w-full object-contain p-1"
                />
              </div>

              <div className="hidden sm:block">
                <p
                  className={`text-sm font-extrabold leading-none ${
                    scrolled ? "text-[#102A5C]" : "text-white"
                  }`}
                >
                  Corridors Of Hope
                </p>

                <p
                  className={`mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] ${
                    scrolled
                      ? "text-gray-500"
                      : "text-white/60"
                  }`}
                >
                  High School
                </p>
              </div>
            </Link>

            {/* DESKTOP NAVIGATION */}
            <nav className="hidden items-center gap-1 xl:flex">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `relative px-3 py-2 text-[13px] font-semibold transition-all ${
                      isActive
                        ? scrolled
                          ? "text-[#102A5C]"
                          : "text-white"
                        : scrolled
                        ? "text-gray-600 hover:text-[#102A5C]"
                        : "text-white/75 hover:text-white"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.name}

                      {isActive && (
                        <motion.span
                          layoutId="navbar-active"
                          className="absolute bottom-0 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#C9A13B]"
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* DESKTOP CTA */}
            <div className="hidden xl:block">
              <Link
                to="/admissions"
                className={`group inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition-all ${
                  scrolled
                    ? "bg-[#102A5C] text-white hover:bg-[#C9A13B]"
                    : "bg-[#C9A13B] text-white hover:bg-white hover:text-[#102A5C]"
                }`}
              >
                Admissions

                <FiArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>

            {/* MOBILE BUTTON */}
            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label={
                isOpen ? "Close navigation" : "Open navigation"
              }
              className={`flex h-11 w-11 items-center justify-center rounded-xl transition xl:hidden ${
                scrolled
                  ? "bg-[#102A5C] text-white"
                  : "bg-white/10 text-white"
              }`}
            >
              {isOpen ? (
                <HiOutlineX size={25} />
              ) : (
                <HiOutlineMenuAlt3 size={25} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="fixed inset-0 z-40 bg-[#102A5C]/50 backdrop-blur-sm xl:hidden"
            />

            {/* DRAWER */}
            <motion.div
              initial={{
                opacity: 0,
                y: -20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              transition={{
                duration: 0.25,
              }}
              className="fixed inset-x-4 top-20 z-50 max-h-[calc(100dvh-6rem)] overflow-y-auto rounded-2xl border border-gray-200 bg-white shadow-2xl xl:hidden"
            >
              <div className="p-5">

                <div className="mb-4 border-b border-gray-100 pb-4">
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#C9A13B]">
                    Navigation
                  </p>

                  <p className="mt-2 text-sm text-gray-500">
                    Opening Corridors Of Life
                  </p>
                </div>

                <nav className="space-y-1">
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      onClick={closeMenu}
                      className={({ isActive }) =>
                        `flex items-center justify-between rounded-2xl px-4 py-3.5 text-sm font-semibold transition ${
                          isActive
                            ? "bg-[#102A5C] text-white"
                            : "text-gray-700 hover:bg-gray-50 hover:text-[#102A5C]"
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          <span>{link.name}</span>

                          {isActive && (
                            <span className="h-2 w-2 rounded-full bg-[#C9A13B]" />
                          )}
                        </>
                      )}
                    </NavLink>
                  ))}
                </nav>

                <Link
                  to="/admissions"
                  onClick={closeMenu}
                  className="mt-5 flex items-center justify-center gap-2 rounded-2xl bg-[#C9A13B] px-5 py-4 text-sm font-bold text-white transition hover:bg-[#102A5C]"
                >
                  Admissions Enquiries
                  <FiArrowRight size={17} />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
