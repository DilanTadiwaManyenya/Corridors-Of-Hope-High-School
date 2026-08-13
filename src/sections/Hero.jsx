import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight, FiPlay } from "react-icons/fi";

import heroImage from "../assets/images/hero.png";

export default function Hero() {
  const reduceMotion = useReducedMotion();
  return (
    <section className="relative min-h-[38rem] overflow-hidden bg-[#102A5C] lg:min-h-[40rem]">

      {/* Background */}
      <motion.div
        initial={{ scale: 1.04 }}
        animate={reduceMotion ? undefined : { scale: 1.08 }}
        transition={{
          duration: 28,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      />

      {/* Dark cinematic overlay */}
      <div className="absolute inset-0 bg-[#102A5C]/55" />

      <div className="absolute inset-0 bg-gradient-to-r from-[#071a3d]/95 via-[#102A5C]/75 to-[#102A5C]/25" />

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#f8f7f4] to-transparent" />

      {/* Decorative glow */}
      <div className="absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-[#C9A13B]/20 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[38rem] max-w-7xl items-center px-6 pb-14 pt-24 lg:min-h-[40rem] lg:px-8">

        <div className="max-w-4xl">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-4"
          >
            <span className="h-px w-12 bg-[#C9A13B]" />

            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#C9A13B] sm:text-sm">
              Opening Corridors Of Life
            </p>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
            className="
              mt-6
              max-w-4xl
              text-5xl
              font-extrabold
              leading-[0.98]
              tracking-tight
              text-white
              sm:text-6xl
              lg:text-6xl
            "
          >
            Excellence In
            <span className="block text-[#C9A13B]">
              Education.
            </span>

            <span className="block">
              Excellence In
            </span>

            <span className="block">
              Character.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.35,
            }}
            className="
              mt-6
              max-w-2xl
              text-base
              leading-8
              text-white/80
              sm:text-lg
            "
          >
            Corridors Of Hope High School nurtures future leaders through
            academic excellence, discipline, innovation, and Christian values
            in a safe and inspiring learning environment.
          </motion.p>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
            }}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >

            <Link
              to="/admissions"
              className="
                group
                inline-flex
                items-center
                justify-center
                gap-3
                rounded-full
                bg-[#C9A13B]
                px-7
                py-4
                font-semibold
                text-white
                shadow-xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#b88d22]
              "
            >
              Enquire About Admission

              <FiArrowRight
                className="transition-transform duration-300 group-hover:translate-x-1"
                size={18}
              />
            </Link>

            <Link
              to="/about"
              className="
                inline-flex
                items-center
                justify-center
                gap-3
                rounded-full
                border
                border-white/40
                bg-white/10
                px-7
                py-4
                font-semibold
                text-white
                backdrop-blur-md
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-white
                hover:text-[#102A5C]
              "
            >
              <FiPlay size={16} />
              Explore Our School
            </Link>

          </motion.div>

          {/* Trust strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              delay: 0.8,
            }}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/70"
          >
            <span>Academic Excellence</span>

            <span className="h-1 w-1 rounded-full bg-[#C9A13B]" />

            <span>Christian Values</span>

            <span className="h-1 w-1 rounded-full bg-[#C9A13B]" />

            <span>Future Leaders</span>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-10
          left-1/2
          z-20
          hidden
          -translate-x-1/2
          flex-col
          items-center
          gap-2
          text-white/70
          md:flex
        "
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">
          Scroll
        </span>

        <span className="h-10 w-px bg-white/40" />
      </motion.div>

    </section>
  );
}
