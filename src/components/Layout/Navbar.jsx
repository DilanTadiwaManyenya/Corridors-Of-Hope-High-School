import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  HiOutlineMenuAlt3,
  HiOutlineX,
} from "react-icons/hi";
import { FiArrowUpRight } from "react-icons/fi";

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
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  return (
    <>
      {/* NAVBAR */}
      <header
        className={`
          fixed
          top-0
          left-0
          right-0
          z-50
          transition-all
          duration-500
          ${
            scrolled
              ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100"
              : "bg-white/90 backdrop-blur-md"
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="h-20 lg:h-24 flex items-center justify-between">

            {/* LOGO */}
            <Link
              to="/"
              onClick={closeMobileMenu}
              className="flex items-center gap-3 shrink-0"
            >
              <motion.img
                src={logo}
                alt="Corridors Of Hope High School"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.2 }}
                className="
                  w-14
                  h-14
                  lg:w-16
                  lg:h-16
                  object-contain
                "
              />

              <div className="hidden sm:block leading-none">
                <p className="text-[#102A5C] font-extrabold text-sm lg:text-base tracking-tight">
                  Corridors Of Hope
                </p>

                <p className="text-[#102A5C]/60 text-[10px] lg:text-xs mt-1 tracking-[0.18em] uppercase">
                  High School
                </p>
              </div>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden xl:flex items-center gap-7">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) => `
                    relative
                    py-2
                    text-[13px]
                    font-semibold
                    transition-colors
                    duration-300
                    ${
                      isActive
                        ? "text-[#102A5C]"
                        : "text-gray-600 hover:text-[#102A5C]"
                    }
                  `}
                >
                  {({ isActive }) => (
                    <>
                      {link.name}

                      <span
                        className={`
                          absolute
                          -bottom-1
                          left-0
                          h-[2px]
                          bg-[#C9A13B]
                          rounded-full
                          transition-all
                          duration-300
                          ${
                            isActive
                              ? "w-full"
                              : "w-0"
                          }
                        `}
                      />
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden xl:flex items-center">
              <Link
                to="/admissions"
                className="
                  group
                  flex
                  items-center
                  gap-2
                  bg-[#102A5C]
                  hover:bg-[#C9A13B]
                  text-white
                  px-5
                  py-3
                  rounded-full
                  text-sm
                  font-semibold
                  shadow-md
                  hover:shadow-xl
                  transition-all
                  duration-300
                "
              >
                Apply for 2026

                <FiArrowUpRight
                  size={17}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                  "
                />
              </Link>
            </div>

            {/* MOBILE BUTTON */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={
                mobileOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              className="
                xl:hidden
                w-11
                h-11
                rounded-full
                bg-[#102A5C]
                text-white
                flex
                items-center
                justify-center
                hover:bg-[#C9A13B]
                transition-colors
              "
            >
              {mobileOpen ? (
                <HiOutlineX size={24} />
              ) : (
                <HiOutlineMenuAlt3 size={24} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobileMenu}
              className="
                fixed
                inset-0
                z-40
                bg-[#102A5C]/40
                backdrop-blur-sm
                xl:hidden
              "
            />

            {/* Drawer */}
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
              className="
                fixed
                top-20
                left-4
                right-4
                z-50
                bg-white
                rounded-3xl
                shadow-2xl
                border
                border-gray-100
                p-6
                xl:hidden
              "
            >
              <nav className="flex flex-col">

                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{
                      opacity: 0,
                      x: -10,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.04,
                    }}
                  >
                    <NavLink
                      to={link.path}
                      onClick={closeMobileMenu}
                      className={({ isActive }) => `
                        flex
                        items-center
                        justify-between
                        py-4
                        border-b
                        border-gray-100
                        font-semibold
                        transition-colors
                        ${
                          isActive
                            ? "text-[#C9A13B]"
                            : "text-[#102A5C] hover:text-[#C9A13B]"
                        }
                      `}
                    >
                      {({ isActive }) => (
                        <>
                          <span>{link.name}</span>

                          {isActive && (
                            <span className="w-2 h-2 rounded-full bg-[#C9A13B]" />
                          )}
                        </>
                      )}
                    </NavLink>
                  </motion.div>
                ))}

              </nav>

              {/* Mobile CTA */}
              <Link
                to="/admissions"
                onClick={closeMobileMenu}
                className="
                  mt-6
                  flex
                  items-center
                  justify-center
                  gap-2
                  w-full
                  bg-[#102A5C]
                  hover:bg-[#C9A13B]
                  text-white
                  py-4
                  rounded-2xl
                  font-semibold
                  transition-colors
                "
              >
                Apply for 2026

                <FiArrowUpRight size={18} />
              </Link>

              {/* Motto */}
              <p
                className="
                  mt-6
                  text-center
                  text-[10px]
                  uppercase
                  tracking-[0.25em]
                  text-gray-400
                "
              >
                Opening Corridors Of Life
              </p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}