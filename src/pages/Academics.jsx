import { motion } from "framer-motion";
import { FiArrowRight, FiBookOpen, FiCheckCircle } from "react-icons/fi";

import studentsImage from "../assets/images/students-learning.jpg";
import scienceImage from "../assets/images/science-lab.jpg";
import computerImage from "../assets/images/computer-lab.jpg";
import PageHero from "../components/shared/PageHero";
import ClassroomImage from "../assets/images/classroom.jpg";

const subjects = [
  {
    title: "Humanities & Languages",
    description:
      "Developing communication, creativity and critical thinking through Languages, History, Geography, Literature and Religious Studies.",
    image: studentsImage,
  },
  {
    title: "Science",
    description:
      "Building problem-solving skills through Biology, Chemistry, Physics and practical scientific learning.",
    image: scienceImage,
  },
  {
    title: "Commercial Studies",
    description:
      "Equipping learners with financial and entrepreneurial knowledge through Accounting, Business Studies and Economics.",
    image: studentsImage,
  },
  {
    title: "ICT & Digital Skills",
    description:
      "Preparing students for the modern world through computer literacy, technology and digital innovation.",
    image: computerImage,
  },
];

const strengths = [
  "Strong academic foundations",
  "Practical learning experiences",
  "Critical thinking and problem solving",
  "Digital literacy",
  "Leadership development",
  "Preparation for higher education",
];

export default function Academics() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <PageHero eyebrow="Academic Excellence" title="Preparing Students" highlight="For The Future." description="Our curriculum equips learners with knowledge, creativity, leadership and critical thinking for higher education and life." image={ClassroomImage} imageAlt="Classroom learning at Corridors Of Hope High School" imagePosition="center" />
      {/*
      <section className="relative overflow-hidden bg-[#102A5C] py-28 lg:py-36">
        <div className="absolute inset-0">
          <img
            src={studentsImage}
            alt="Students learning at Corridors Of Hope High School"
            className="h-full w-full object-cover opacity-20"
          />

          <div className="absolute inset-0 bg-[#102A5C]/85" />
        </div>

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
                Academic Excellence
              </span>
            </div>

            <h1 className="mt-6 text-5xl font-extrabold leading-tight text-white sm:text-6xl lg:text-7xl">
              Preparing Students
              <span className="block text-[#C9A13B]">
                For The Future.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/75">
              At Corridors Of Hope High School, we believe education should
              develop knowledge, character, creativity and the confidence to
              make a meaningful contribution to society.
            </p>
          </motion.div>
        </div>
      </section> */}

      {/* INTRODUCTION */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:px-8 lg:items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#C9A13B]">
              Our Approach
            </span>

            <h2 className="mt-5 text-4xl font-extrabold leading-tight text-[#102A5C] sm:text-5xl">
              Education That Goes
              <span className="block text-[#C9A13B]">
                Beyond The Classroom.
              </span>
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              Our academic approach combines strong subject knowledge with
              practical learning, critical thinking, creativity and character
              development.
            </p>

            <p className="mt-5 leading-8 text-gray-600">
              We aim to give every learner the foundation, discipline and
              confidence needed to progress into higher education and future
              careers.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <img
              src={studentsImage}
              alt="Students at Corridors Of Hope High School"
              className="h-[420px] w-full rounded-[2rem] object-cover shadow-2xl"
            />

            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-[#C9A13B] p-6 shadow-xl sm:block">
              <FiBookOpen className="text-white" size={28} />

              <p className="mt-3 text-sm font-semibold text-white">
                Knowledge
                <br />
                Character
                <br />
                Excellence
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* SUBJECT AREAS */}
      <section className="bg-[#F8F7F4] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#C9A13B]">
              Learning Areas
            </span>

            <h2 className="mt-5 text-4xl font-extrabold text-[#102A5C] sm:text-5xl">
              Areas Of
              <span className="text-[#C9A13B]"> Study.</span>
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">

            {subjects.map((subject, index) => (
              <motion.article
                key={subject.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className="group overflow-hidden rounded-[2rem] bg-white shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={subject.image}
                    alt={subject.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#102A5C]/80 to-transparent" />

                  <h3 className="absolute bottom-6 left-6 text-2xl font-bold text-white">
                    {subject.title}
                  </h3>
                </div>

                <div className="p-7">
                  <p className="leading-7 text-gray-600">
                    {subject.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-sm font-bold text-[#102A5C]">
                    Explore Learning
                    <FiArrowRight className="transition group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.article>
            ))}

          </div>
        </div>
      </section>

      {/* WHAT STUDENTS DEVELOP */}
      <section className="bg-[#102A5C] py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:px-8">

          <div>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#C9A13B]">
              Developing The Whole Learner
            </span>

            <h2 className="mt-5 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
              Skills For School.
              <span className="block text-[#C9A13B]">
                Skills For Life.
              </span>
            </h2>

            <p className="mt-6 max-w-xl leading-8 text-white/70">
              Academic success is only one part of preparation for the future.
              We encourage learners to develop the skills and mindset needed
              to thrive beyond school.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {strengths.map((strength) => (
              <div
                key={strength}
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <FiCheckCircle
                  className="mt-1 shrink-0 text-[#C9A13B]"
                  size={20}
                />

                <span className="text-sm font-medium leading-6 text-white/80">
                  {strength}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

    </main>
  );
}
