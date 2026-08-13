import { motion } from "framer-motion";
import {
  FiAward,
  FiHeart,
  FiUsers,
  FiTarget,
  FiBookOpen,
} from "react-icons/fi";

import schoolImage from "../assets/images/gallery-2.jpg";
import studentsImage from "../assets/images/students-learning.jpg";
import PageHero from "../components/shared/PageHero";

const values = [
  {
    icon: FiTarget,
    title: "Excellence",
    text: "We encourage every learner to pursue excellence in academics, character, leadership and personal growth.",
  },
  {
    icon: FiHeart,
    title: "Character",
    text: "We develop integrity, discipline, respect and responsibility as foundations for a meaningful life.",
  },
  {
    icon: FiUsers,
    title: "Community",
    text: "We believe strong relationships between learners, teachers, parents and the wider community create a better learning environment.",
  },
  {
    icon: FiAward,
    title: "Achievement",
    text: "We celebrate progress and encourage learners to discover their abilities and confidently pursue their goals.",
  },
];

export default function About() {
  return (
    <main className="bg-white">

      <PageHero eyebrow="About Corridors Of Hope" title="Opening Corridors" highlight="Of Life." description="A learning community committed to academic excellence, discipline, character development, Christian values and the preparation of future leaders." image={schoolImage} imageAlt="Corridors Of Hope High School campus" imagePosition="center" />

      {/* OUR STORY */}
      <section className="py-14 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-2 lg:items-center lg:px-8">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#C9A13B]">
              Who We Are
            </span>

            <h2 className="mt-5 text-4xl font-extrabold leading-tight text-[#102A5C] sm:text-5xl">
              A School Built
              <span className="block text-[#C9A13B]">
                Around Purpose.
              </span>
            </h2>

            <p className="mt-7 leading-8 text-gray-600">
              Corridors Of Hope High School is committed to creating an
              environment where young people can grow academically,
              socially, spiritually and personally.
            </p>

            <p className="mt-5 leading-8 text-gray-600">
              Through dedicated teachers, supportive relationships and a
              culture of discipline and excellence, we seek to give every
              learner the opportunity to discover their potential.
            </p>

            <p className="mt-5 leading-8 text-gray-600">
              Our vision extends beyond examination results. We want our
              learners to leave school equipped with knowledge, confidence,
              character and a sense of responsibility.
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
              className="h-[360px] w-full rounded-[2rem] object-cover shadow-2xl lg:h-[420px]"
            />

            <div className="absolute -bottom-7 -left-7 hidden rounded-2xl bg-[#C9A13B] p-7 shadow-xl sm:block">
              <FiBookOpen size={28} className="text-white" />

              <p className="mt-3 text-sm font-bold leading-6 text-white">
                Education
                <br />
                Character
                <br />
                Leadership
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* VALUES */}
      <section className="bg-[#F8F7F4] py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#C9A13B]">
              Our Foundation
            </span>

            <h2 className="mt-5 text-4xl font-extrabold text-[#102A5C] sm:text-5xl">
              The Values That
              <span className="text-[#C9A13B]">
                {" "}Shape Us.
              </span>
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              Everything we do is guided by principles that prepare learners
              for success in school and in life.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.article
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  className="group rounded-[2rem] bg-white p-7 shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#102A5C] text-white transition group-hover:bg-[#C9A13B]">
                    <Icon size={25} />
                  </div>

                  <h3 className="mt-7 text-xl font-bold text-[#102A5C]">
                    {value.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-gray-600">
                    {value.text}
                  </p>

                  <div className="mt-6 h-1 w-8 rounded-full bg-[#C9A13B] transition-all duration-300 group-hover:w-16" />
                </motion.article>
              );
            })}
          </div>

        </div>
      </section>

      {/* MISSION */}
      <section className="bg-[#102A5C] py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">

          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#C9A13B]">
            Our Mission
          </span>

          <h2 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            Developing learners who are
            <span className="text-[#C9A13B]">
              {" "}ready for tomorrow.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-white/70">
            We strive to provide quality education within a disciplined,
            supportive and inspiring environment where every learner can
            develop knowledge, character, confidence and leadership.
          </p>

        </div>
      </section>

      {/* CTA */}
      <section className="py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-[2rem] bg-[#F8F7F4] p-8 text-center sm:p-12 lg:p-16">

            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#C9A13B]">
              Discover More
            </span>

            <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-extrabold text-[#102A5C] sm:text-4xl">
              Discover what makes Corridors Of Hope different.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-600">
              Explore our academic programmes, student life and opportunities
              for learners to grow and thrive.
            </p>

            <a
              href="/academics"
              className="mt-8 inline-flex rounded-full bg-[#102A5C] px-8 py-4 font-semibold text-white transition hover:bg-[#C9A13B]"
            >
              Explore Academics
            </a>

          </div>
        </div>
      </section>

    </main>
  );
}
