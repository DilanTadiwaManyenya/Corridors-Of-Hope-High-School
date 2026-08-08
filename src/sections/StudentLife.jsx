import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiAward,
  FiUsers,
  FiMusic,
  FiCpu,
  FiHeart,
  FiActivity,
} from "react-icons/fi";

import studentLifeImage from "../assets/images/student-life.jpg";

const activities = [
  {
    icon: FiActivity,
    title: "Sports Excellence",
    text: "Football, netball, athletics and other activities that develop teamwork, discipline and confidence.",
  },
  {
    icon: FiMusic,
    title: "Arts & Culture",
    text: "Music, drama, dance and creative programmes that encourage expression and talent.",
  },
  {
    icon: FiUsers,
    title: "Student Leadership",
    text: "Opportunities that develop responsibility, confidence and decision-making.",
  },
  {
    icon: FiCpu,
    title: "STEM Innovation",
    text: "Technology, coding and innovation activities that prepare learners for a digital future.",
  },
  {
    icon: FiAward,
    title: "Competitions",
    text: "Academic and sporting competitions that encourage achievement and healthy excellence.",
  },
  {
    icon: FiHeart,
    title: "Community Service",
    text: "Activities that develop compassion, teamwork and responsible citizenship.",
  },
];

export default function StudentLife() {
  return (
    <section className="overflow-hidden bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* HEADER */}
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-[#C9A13B]" />

              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#C9A13B]">
                Student Life
              </span>
            </div>

            <h2 className="mt-5 text-4xl font-extrabold leading-tight text-[#102A5C] sm:text-5xl">
              Learning Beyond
              <span className="block text-[#C9A13B]">
                The Classroom.
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl text-lg leading-8 text-gray-600 lg:justify-self-end"
          >
            Education is about more than academics. We encourage leadership,
            creativity, teamwork, innovation and personal growth through a
            vibrant student experience.
          </motion.p>

        </div>

        {/* FEATURE IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mt-14 overflow-hidden rounded-[2rem]"
        >
          <img
            src={studentLifeImage}
            alt="Student life at Corridors Of Hope High School"
            className="h-[420px] w-full object-cover transition duration-700 hover:scale-105 lg:h-[520px]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#102A5C]/90 via-[#102A5C]/20 to-transparent" />

          <div className="absolute bottom-0 left-0 max-w-2xl p-7 sm:p-10">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C9A13B]">
              More Than A Classroom
            </span>

            <h3 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
              Discover. Participate. Lead.
            </h3>

            <p className="mt-4 max-w-xl leading-7 text-white/75">
              Our student experience gives learners opportunities to discover
              their talents, build friendships, develop confidence and grow
              into responsible young people.
            </p>
          </div>
        </motion.div>

        {/* ACTIVITY GRID */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {activities.map((activity, index) => {
            const Icon = activity.icon;

            return (
              <motion.article
                key={activity.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className="group rounded-[2rem] border border-gray-100 bg-[#F8F7F4] p-7 transition duration-500 hover:-translate-y-2 hover:bg-white hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#102A5C] text-white transition duration-300 group-hover:bg-[#C9A13B]">
                  <Icon size={24} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#102A5C]">
                  {activity.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {activity.text}
                </p>

                <div className="mt-6 h-1 w-8 rounded-full bg-[#C9A13B] transition-all duration-300 group-hover:w-16" />
              </motion.article>
            );
          })}

        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            to="/student-life"
            className="inline-flex items-center gap-3 rounded-full bg-[#102A5C] px-8 py-4 font-semibold text-white transition hover:bg-[#C9A13B]"
          >
            Explore Student Life
            <FiArrowRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
}