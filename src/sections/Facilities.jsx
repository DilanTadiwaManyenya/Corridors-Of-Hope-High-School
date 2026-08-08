import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

import scienceImage from "../assets/images/science-lab.jpg";
import computerImage from "../assets/images/computer-lab.jpg";
import libraryImage from "../assets/images/library.jpg";
import sportsImage from "../assets/images/sports.jpg";
import classroomImage from "../assets/images/classroom.jpg";
import campusImage from "../assets/images/campus.jpg";

const facilities = [
  {
    title: "Science Laboratories",
    description:
      "Modern laboratories supporting practical Biology, Chemistry and Physics lessons.",
    image: scienceImage,
    category: "Learning",
  },
  {
    title: "Computer Laboratory",
    description:
      "Technology-enabled learning spaces developing digital literacy and ICT skills.",
    image: computerImage,
    category: "Technology",
  },
  {
    title: "Library",
    description:
      "A quiet learning environment with books and educational resources.",
    image: libraryImage,
    category: "Resources",
  },
  {
    title: "Sports Facilities",
    description:
      "Encouraging physical fitness, teamwork and talent development.",
    image: sportsImage,
    category: "Sport",
  },
  {
    title: "Modern Classrooms",
    description:
      "Comfortable classrooms designed to maximize student engagement.",
    image: classroomImage,
    category: "Learning",
  },
  {
    title: "Safe Campus",
    description:
      "A secure and disciplined environment where students learn with confidence.",
    image: campusImage,
    category: "Campus",
  },
];

export default function Facilities() {
  return (
    <section className="bg-[#F8F7F4] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end"
        >
          <div className="max-w-3xl">

            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-[#C9A13B]" />

              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#C9A13B]">
                Facilities
              </span>
            </div>

            <h2 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-[#102A5C] sm:text-5xl lg:text-6xl">
              Designed For
              <span className="block text-[#C9A13B]">Modern Learning.</span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              Every facility supports an environment where students can learn, discover and thrive.
            </p>

          </div>

          <div className="hidden max-w-xs lg:block">
            <p className="text-sm leading-7 text-gray-500">
              From practical science and technology to sport and independent study, our facilities support the complete learner.
            </p>
          </div>
        </motion.div>

        {/* Facilities grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {facilities.map((facility, index) => (
            <motion.article
              key={facility.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group relative overflow-hidden rounded-[2rem] bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >

              {/* Image */}
              <div className="relative h-72 overflow-hidden">

                <img
                  src={facility.image}
                  alt={facility.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                {/* Category */}
                <span className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#102A5C] backdrop-blur">
                  {facility.category}
                </span>

                {/* Arrow */}
                <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#C9A13B] text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <FiArrowUpRight size={20} />
                </div>

                {/* Image title */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white">{facility.title}</h3>
                </div>

              </div>

              {/* Description */}
              <div className="p-6">

                <p className="text-sm leading-7 text-gray-500">{facility.description}</p>

                <div className="mt-5 h-1 w-8 rounded-full bg-[#C9A13B] transition-all duration-300 group-hover:w-16" />

              </div>

            </motion.article>
          ))}

        </div>

      </div>
    </section>
  );
}