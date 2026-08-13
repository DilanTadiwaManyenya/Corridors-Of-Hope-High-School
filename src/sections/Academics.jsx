import { motion } from "framer-motion";
import { FiArrowUpRight, FiBookOpen } from "react-icons/fi";
import { Link } from "react-router-dom";

import studentsImage from "../assets/images/students-learning.jpg";
import scienceImage from "../assets/images/science-lab.jpg";
import computerImage from "../assets/images/computer-lab.jpg";

const subjects = [
  {
    title: "Humanities & Languages",
    description:
      "Developing communication, creativity and critical thinking through Languages, History, Geography, Literature and Religious Studies.",
    image: studentsImage,
    number: "01",
  },
  {
    title: "Science Excellence",
    description:
      "Building problem-solving skills through Biology, Chemistry, Physics and practical learning experiences.",
    image: scienceImage,
    number: "02",
  },
  {
    title: "Commercial Studies",
    description:
      "Equipping learners with financial knowledge through Accounting, Business Studies, Economics and entrepreneurship.",
    image: studentsImage,
    number: "03",
  },
  {
    title: "ICT & Digital Skills",
    description:
      "Preparing students for the modern world through computer literacy, technology and digital innovation.",
    image: computerImage,
    number: "04",
  },
];

export default function Academics() {
  return (
    <section className="bg-[#F8F7F4] py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid gap-8 lg:grid-cols-[1fr_420px] lg:items-end"
        >
          <div>
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-[#C9A13B]" />

              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#C9A13B]">
                Academic Excellence
              </span>
            </div>

            <h2 className="mt-6 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-[#102A5C] sm:text-5xl lg:text-6xl">
              Preparing Students
              <span className="block text-[#C9A13B]">
                For The Future.
              </span>
            </h2>
          </div>

          <p className="text-lg leading-8 text-gray-600">
            Our curriculum equips learners with knowledge, creativity,
            leadership and critical thinking for higher education and life.
          </p>
        </motion.div>

        {/* Academic cards */}
        <div className="mt-16 grid gap-6 lg:grid-cols-2">

          {subjects.map((subject, index) => (
            <motion.article
              key={subject.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="
                group
                relative
                min-h-[320px]
                overflow-hidden
                rounded-[2rem]
                bg-[#102A5C]
              "
            >

              {/* Image */}
              <img
                src={subject.image}
                alt={subject.title}
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                  opacity-70
                  transition-all
                  duration-700
                  group-hover:scale-105
                  group-hover:opacity-80
                "
              />

              {/* Overlay */}
              <div className="
                absolute
                inset-0
                bg-gradient-to-t
                from-[#102A5C]
                via-[#102A5C]/70
                to-[#102A5C]/10
              " />

              {/* Number */}
              <span className="
                absolute
                right-7
                top-7
                text-sm
                font-bold
                tracking-[0.25em]
                text-white/60
              ">
                {subject.number}
              </span>

              {/* Icon */}
              <div className="
                absolute
                left-7
                top-7
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-2xl
                bg-white/10
                text-[#C9A13B]
                backdrop-blur
              ">
                <FiBookOpen size={22} />
              </div>

              {/* Arrow */}
              <div className="
                absolute
                right-7
                top-16
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                bg-[#C9A13B]
                text-white
                opacity-0
                transition-all
                duration-300
                group-hover:opacity-100
              ">
                <FiArrowUpRight size={18} />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-7 lg:p-9">

                <h3 className="max-w-md text-2xl font-bold text-white sm:text-3xl">
                  {subject.title}
                </h3>

                <p className="
                  mt-4
                  max-w-xl
                  text-sm
                  leading-7
                  text-white/70
                ">
                  {subject.description}
                </p>

                <div className="
                  mt-6
                  h-1
                  w-8
                  rounded-full
                  bg-[#C9A13B]
                  transition-all
                  duration-300
                  group-hover:w-16
                " />

              </div>

            </motion.article>
          ))}

        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            mt-10
            flex
            flex-col
            items-start
            justify-between
            gap-6
            rounded-[2rem]
            bg-[#102A5C]
            p-8
            sm:flex-row
            sm:items-center
            lg:p-10
          "
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#C9A13B]">
              Education With Purpose
            </p>

            <h3 className="mt-2 text-2xl font-bold text-white">
              Building knowledge. Building character.
            </h3>
          </div>

          <Link
            to="/academics"
            className="
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-[#C9A13B]
              px-7
              py-4
              font-semibold
              text-white
              transition
              hover:bg-[#B88D22]
            "
          >
            Explore Academics
            <FiArrowUpRight size={18} />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
