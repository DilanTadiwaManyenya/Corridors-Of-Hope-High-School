import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight, FiCheck } from "react-icons/fi";

export default function Welcome() {
  return (
    <section className="relative overflow-hidden bg-[#F8F7F4] py-24 lg:py-32">

      {/* Decorative background */}
      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#C9A13B]/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">

        {/* IMAGE SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >

          {/* Gold frame */}
          <div className="
            absolute
            -left-5
            -top-5
            hidden
            h-full
            w-full
            rounded-[2rem]
            border-2
            border-[#C9A13B]
            lg:block
          " />

          {/* Image */}
          <div className="relative overflow-hidden rounded-[2rem] shadow-2xl">

            <img
              src="/images/principal.jpg"
              alt="Principal of Corridors Of Hope High School"
              className="
                h-[480px]
                w-full
                object-cover
                transition-transform
                duration-700
                hover:scale-105
                lg:h-[580px]
              "
            />

            {/* Image overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#102A5C]/80 via-transparent to-transparent" />

            {/* Principal label */}
            <div className="absolute bottom-6 left-6 right-6">

              <div className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-md">

                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#C9A13B]">
                  Leadership
                </p>

                <p className="mt-1 text-lg font-bold text-white">
                  Principal
                </p>

                <p className="mt-1 text-sm text-white/70">
                  Corridors Of Hope High School
                </p>

              </div>

            </div>

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

          {/* Heading */}
          <h2 className="
            mt-6
            text-4xl
            font-extrabold
            leading-tight
            tracking-tight
            text-[#102A5C]
            sm:text-5xl
            lg:text-6xl
          ">
            A Message From
            <span className="block text-[#C9A13B]">
              The Principal
            </span>
          </h2>

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

          {/* Values */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2">

            <div className="flex items-center gap-3">
              <span className="
                flex
                h-8
                w-8
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-[#102A5C]
                text-white
              ">
                <FiCheck size={15} />
              </span>

              <span className="text-sm font-semibold text-[#102A5C]">
                Academic Excellence
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="
                flex
                h-8
                w-8
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-[#102A5C]
                text-white
              ">
                <FiCheck size={15} />
              </span>

              <span className="text-sm font-semibold text-[#102A5C]">
                Character Development
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="
                flex
                h-8
                w-8
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-[#102A5C]
                text-white
              ">
                <FiCheck size={15} />
              </span>

              <span className="text-sm font-semibold text-[#102A5C]">
                Leadership Development
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="
                flex
                h-8
                w-8
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-[#102A5C]
                text-white
              ">
                <FiCheck size={15} />
              </span>

              <span className="text-sm font-semibold text-[#102A5C]">
                Christian Values
              </span>
            </div>

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
              shadow-lg
              transition-all
              duration-300
              hover:-translate-y-1
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