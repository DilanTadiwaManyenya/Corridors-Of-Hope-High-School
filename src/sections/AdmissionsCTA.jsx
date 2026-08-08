import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiCheckCircle,
  FiCalendar,
} from "react-icons/fi";

export default function Admissions() {
  const highlights = [
    "Quality academic education",
    "Strong character development",
    "Supportive learning environment",
    "Opportunities beyond the classroom",
  ];

  return (
    <section className="relative overflow-hidden bg-[#102A5C] py-24 lg:py-32">
      {/* Decorative shapes */}
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#C9A13B]/10 blur-3xl" />

      <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-white/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-[#C9A13B]" />

              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#C9A13B]">
                Admissions 2026
              </span>
            </div>

            <h2 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              Begin Your Child's Journey
              <span className="block text-[#C9A13B]">
                Towards Excellence.
              </span>
            </h2>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">
              Join a learning community where academic excellence, Christian
              values, discipline, leadership and innovation help prepare
              learners for a successful future.
            </p>

            {/* Highlights */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm text-white/80"
                >
                  <FiCheckCircle
                    className="shrink-0 text-[#C9A13B]"
                    size={19}
                  />

                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/admissions"
                className="inline-flex items-center gap-3 rounded-full bg-[#C9A13B] px-8 py-4 font-semibold text-white transition hover:bg-[#B88D22]"
              >
                Apply Now
                <FiArrowRight size={18} />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-3 rounded-full border border-white/30 px-8 py-4 font-semibold text-white transition hover:border-white hover:bg-white hover:text-[#102A5C]"
              >
                Contact School
              </Link>
            </div>
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-[2rem] bg-white p-8 shadow-2xl sm:p-10">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#102A5C] text-white">
                <FiCalendar size={25} />
              </div>

              <p className="mt-7 text-xs font-bold uppercase tracking-[0.25em] text-[#C9A13B]">
                Admissions
              </p>

              <h3 className="mt-3 text-3xl font-extrabold text-[#102A5C]">
                Start The Conversation
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                If you are considering Corridors Of Hope for your child,
                contact the school to learn more about admissions and the
                next steps.
              </p>

              <Link
                to="/admissions"
                className="mt-7 inline-flex items-center gap-2 font-bold text-[#102A5C] transition hover:text-[#C9A13B]"
              >
                View Admissions
                <FiArrowRight size={18} />
              </Link>

              <div className="mt-8 h-px bg-gray-100" />

              <p className="mt-6 text-sm text-gray-500">
                Opening Corridors Of Life through education, character and
                opportunity.
              </p>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}