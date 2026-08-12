import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiCheckCircle,
  FiFileText,
  FiMessageCircle,
  FiCalendar,
  FiPhone,
} from "react-icons/fi";
import studentsImage from "../assets/images/community-service.jpg";

const steps = [
  {
    number: "01",
    title: "Make An Enquiry",
    description:
      "Contact the school to learn more about admissions, available places and the appropriate next steps.",
    icon: FiMessageCircle,
  },
  {
    number: "02",
    title: "Submit Your Application",
    description:
      "Complete the required admission process and provide the information requested by the school.",
    icon: FiFileText,
  },
  {
    number: "03",
    title: "School Communication",
    description:
      "The school will guide parents and guardians through the next stage of the admissions process.",
    icon: FiPhone,
  },
  {
    number: "04",
    title: "Begin The Journey",
    description:
      "Once admission arrangements are complete, your child can begin their journey at Corridors Of Hope.",
    icon: FiCalendar,
  },
];

const reasons = [
  "Academic excellence",
  "Character and discipline",
  "Christian values",
  "Supportive learning environment",
  "Leadership development",
  "Student activities and opportunities",
];

export default function Admissions() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#102A5C] py-32 lg:py-40">
        <img src={studentsImage} alt="Students at Corridors Of Hope High School" className="absolute inset-0 h-full w-full object-cover object-center opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071a3d]/88 via-[#102A5C]/70 to-[#102A5C]/40" />
        <div className="absolute inset-x-0 bottom-0 h-1 bg-[#C7372F]" />
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#C9A13B]/10 blur-3xl" />

        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-white/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-[#C9A13B]" />

              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#C9A13B]">
                Admissions 2026
              </span>
            </div>

            <h1 className="mt-6 text-5xl font-extrabold leading-tight text-white sm:text-6xl lg:text-7xl">
              Begin Your Child's
              <span className="block text-[#C9A13B]">
                Journey Towards Excellence.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">
              Discover a learning environment where academic achievement,
              discipline, character development and Christian values work
              together to prepare learners for the future.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#process"
                className="inline-flex items-center gap-3 rounded-full bg-[#C9A13B] px-8 py-4 font-semibold text-white transition hover:bg-[#B88D22]"
              >
                How To Apply
                <FiArrowRight size={18} />
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center gap-3 rounded-full border border-white/30 px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-[#102A5C]"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>

        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center lg:px-8">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#C9A13B]">
              Why Corridors Of Hope
            </span>

            <h2 className="mt-5 text-4xl font-extrabold leading-tight text-[#102A5C] sm:text-5xl">
              Give Your Child
              <span className="block text-[#C9A13B]">
                Room To Grow.
              </span>
            </h2>

            <p className="mt-7 leading-8 text-gray-600">
              Choosing a school is an important decision. At Corridors Of
              Hope, we aim to provide an environment where learners are
              challenged academically while also being encouraged to develop
              character, confidence and responsibility.
            </p>

            <p className="mt-5 leading-8 text-gray-600">
              Our approach seeks to prepare young people not only for
              examinations, but also for the opportunities and responsibilities
              that come after school.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-[2rem] bg-[#F8F7F4] p-8 sm:p-10"
          >
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#C9A13B]">
              What We Value
            </p>

            <h3 className="mt-4 text-2xl font-bold text-[#102A5C]">
              A foundation for the future.
            </h3>

            <div className="mt-7 space-y-4">
              {reasons.map((reason) => (
                <div
                  key={reason}
                  className="flex items-center gap-4"
                >
                  <FiCheckCircle
                    className="shrink-0 text-[#C9A13B]"
                    size={20}
                  />

                  <span className="font-medium text-gray-700">
                    {reason}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* PROCESS */}
      <section
        id="process"
        className="bg-[#F8F7F4] py-24 lg:py-32"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#C9A13B]">
              Admissions Process
            </span>

            <h2 className="mt-5 text-4xl font-extrabold text-[#102A5C] sm:text-5xl">
              Your Journey
              <span className="text-[#C9A13B]">
                {" "}Starts Here.
              </span>
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              Our admissions process is designed to help parents and guardians
              understand the school and receive the information they need.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.article
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  className="group rounded-[2rem] bg-white p-7 shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold tracking-widest text-[#C9A13B]">
                      {step.number}
                    </span>

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#102A5C] text-white transition group-hover:bg-[#C9A13B]">
                      <Icon size={21} />
                    </div>
                  </div>

                  <h3 className="mt-8 text-xl font-bold text-[#102A5C]">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-gray-600">
                    {step.description}
                  </p>

                  <div className="mt-6 h-1 w-8 rounded-full bg-[#C9A13B] transition-all duration-300 group-hover:w-16" />
                </motion.article>
              );
            })}

          </div>
        </div>
      </section>

      {/* IMPORTANT INFORMATION */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">

          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#C9A13B]">
            Admissions Information
          </span>

          <h2 className="mt-5 text-4xl font-extrabold text-[#102A5C] sm:text-5xl">
            Ready To Take The
            <span className="text-[#C9A13B]">
              {" "}Next Step?
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-600">
            For current information regarding places, requirements,
            application procedures and school visits, please contact
            Corridors Of Hope High School directly.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-[#102A5C] px-8 py-4 font-semibold text-white transition hover:bg-[#C9A13B]"
            >
              Contact The School
              <FiArrowRight size={18} />
            </Link>

            <Link
              to="/about"
              className="inline-flex items-center gap-3 rounded-full border border-gray-200 px-8 py-4 font-semibold text-[#102A5C] transition hover:border-[#102A5C]"
            >
              Learn About Our School
            </Link>
          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#102A5C] py-20">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">

          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#C9A13B]">
            Corridors Of Hope High School
          </p>

          <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">
            Opening Corridors Of Life.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-white/60">
            Academic excellence. Character. Leadership. Opportunity.
          </p>

        </div>
      </section>

    </main>
  );
}
