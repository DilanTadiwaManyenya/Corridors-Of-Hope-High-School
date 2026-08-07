import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function AdmissionsCTA() {
  return (
    <section className="relative py-32 overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero/school.jpg')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#102A5C]/90" />

      {/* Decorative Circles */}
      <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#C9A13B]/10 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-white/5 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .8 }}
        className="relative z-10 max-w-4xl mx-auto text-center px-6"
      >

        <span className="uppercase tracking-[5px] text-[#C9A13B] font-semibold">
          Admissions 2026
        </span>

        <h2 className="mt-6 text-4xl md:text-6xl font-bold text-white leading-tight">
          Begin Your Child's Journey
          <br />
          Towards Excellence
        </h2>

        <p className="mt-8 text-gray-300 text-lg leading-8">
          Join a community where academic excellence, Christian values,
          leadership and innovation prepare every learner for a successful
          future.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">

          <Link
            to="/admissions"
            className="
              bg-[#C9A13B]
              hover:bg-[#b88f28]
              text-white
              px-10
              py-5
              rounded-full
              font-semibold
              shadow-xl
              transition
            "
          >
            Apply Now
          </Link>

          <Link
            to="/contact"
            className="
              border
              border-white
              text-white
              hover:bg-white
              hover:text-[#102A5C]
              px-10
              py-5
              rounded-full
              font-semibold
              transition
            "
          >
            Book a School Tour
          </Link>

        </div>

      </motion.div>

    </section>
  );
}