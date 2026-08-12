import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
// Keep the extension casing aligned with the Git-tracked asset. Vercel builds on Linux.
import principalImage from "../assets/images/principal.JPG";

export default function Welcome() {
  return (
    <section className="relative overflow-hidden bg-[#F8F7F4] py-24 lg:py-32">

      {/* Decorative background */}
      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#C9A13B]/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20 lg:px-8">

        {/* IMAGE SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >

          <div className="absolute -left-4 -top-4 hidden h-full w-full border-l-2 border-t-2 border-[#C9A13B] lg:block" />

          {/* Image */}
          <div className="relative overflow-hidden bg-[#102A5C] shadow-[0_24px_60px_rgba(16,42,92,0.16)]">

            <img
              src={principalImage}
              alt="Principal of Corridors Of Hope High School"
              className="
                h-[460px]
                w-full
                object-cover
                object-[center_20%]
                transition-transform
                duration-700
                hover:scale-105
                lg:h-[620px]
              "
            />

            {/* Image overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#102A5C]/80 via-transparent to-transparent" />

            <p className="absolute bottom-6 left-6 text-xs font-bold uppercase tracking-[0.25em] text-white/90">School leadership</p>

          </div>
        </motion.div>

        {/* CONTENT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >

          {/* Eyebrow */}
          <div className="flex items-center gap-4">

            <span className="h-px w-12 bg-[#C9A13B]" />

            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#C9A13B]">
              Welcome
            </span>

          </div>

          <div className="relative mt-6">
            <span aria-hidden="true" className="absolute -left-3 -top-8 font-serif text-7xl leading-none text-[#C9A13B]/30 sm:-left-7 sm:text-8xl">“</span>
            <h2 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-[#102A5C] sm:text-5xl lg:text-6xl">A Message From<br />The Principal</h2>
          </div>

          {/* Main paragraph */}
          <p className="
            mt-8
            text-lg
            leading-8
            text-gray-600
          ">
            Welcome to Corridors Of Hope High School, where we inspire
            academic excellence, leadership, discipline, and innovation.
            Our commitment is to prepare every learner for a successful
            future through quality education and strong moral values.
          </p>

          {/* Secondary paragraph */}
          <p className="
            mt-5
            leading-8
            text-gray-500
          ">
            Through dedicated teachers, a supportive environment, and
            character-driven education, we create opportunities for every
            student to discover their potential.
          </p>

          <div className="mt-8 flex items-center gap-3 text-sm font-semibold text-[#102A5C]">
            <span className="h-px w-10 bg-[#C9A13B]" />
            Education with purpose
          </div>

          {/* CTA */}
          <Link
            to="/about"
            className="
              group
              mt-10
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-[#102A5C]
              px-7
              py-4
              font-semibold
              text-white
              transition-all
              duration-300
              hover:bg-[#C9A13B]
            "
          >
            Discover Our School

            <FiArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>

        </motion.div>

      </div>
    </section>
  );
}
