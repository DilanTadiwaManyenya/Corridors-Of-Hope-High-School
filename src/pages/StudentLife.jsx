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
  FiBookOpen,
} from "react-icons/fi";

import studentLifeImage from "../assets/images/student-life.jpg";
import studentsImage from "../assets/images/students.jpg";
import artsandculture from "../assets/images/science-lab.jpg";
import more from "../assets/images/gallery-4.jpg";
import studentledearship from "../assets/images/student-leadership.jpg";
import communityservice from "../assets/images/community-service.jpg";
import studentlearning from "../assets/images/students-learning.jpg";

const activities = [
  {
    icon: FiActivity,
    title: "Sports Excellence",
    text: "Sport provides learners with opportunities to develop teamwork, discipline, resilience and confidence while discovering their talents.",
    image: more,
  },
  {
    icon: FiMusic,
    title: "Arts & Culture",
    text: "Music, drama, dance and creative activities give students space to express themselves and develop their creativity.",
    image: artsandculture,
  },
  {
    icon: FiUsers,
    title: "Student Leadership",
    text: "Leadership opportunities help learners develop responsibility, communication skills, confidence and sound decision-making.",
    image: studentledearship,
  },
  {
    icon: FiCpu,
    title: "STEM Innovation",
    text: "Technology and innovation activities encourage curiosity, problem-solving and digital skills for the modern world.",
    image: studentLifeImage,
  },
  {
    icon: FiAward,
    title: "Competitions",
    text: "Academic, sporting and creative competitions encourage learners to challenge themselves and celebrate achievement.",
    image: studentlearning,
  },
  {
    icon: FiHeart,
    title: "Community Service",
    text: "Service activities encourage compassion, teamwork and a sense of responsibility towards others and the wider community.",
    image: communityservice,
  },
];

export default function StudentLife() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#102A5C] py-32 lg:py-40">
        <div className="absolute inset-0">
          <img
            src={studentLifeImage}
            alt=""
            className="h-full w-full object-cover object-center opacity-55"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#071a3d]/88 via-[#102A5C]/72 to-[#102A5C]/35" />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-1 bg-[#C7372F]" />

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
                Student Life
              </span>
            </div>

            <h1 className="mt-6 text-5xl font-extrabold leading-tight text-white sm:text-6xl lg:text-7xl">
              Life Beyond
              <span className="block text-[#C9A13B]">
                The Classroom.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">
              Discover the experiences, activities and opportunities that help
              learners develop confidence, creativity, leadership and character.
            </p>
          </motion.div>

        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:items-center lg:px-8">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#C9A13B]">
              The Student Experience
            </span>

            <h2 className="mt-5 text-4xl font-extrabold leading-tight text-[#102A5C] sm:text-5xl">
              Discover Your
              <span className="block text-[#C9A13B]">
                Potential.
              </span>
            </h2>

            <p className="mt-7 leading-8 text-gray-600">
              School life is an important part of a learner's development.
              Beyond the classroom, students need opportunities to participate,
              collaborate, compete, create and lead.
            </p>

            <p className="mt-5 leading-8 text-gray-600">
              At Corridors Of Hope, student activities are designed to
              complement academic learning while developing confidence,
              discipline, teamwork and a strong sense of community.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#102A5C] text-white">
                <FiBookOpen size={22} />
              </div>

              <div>
                <p className="font-bold text-[#102A5C]">
                  Education Beyond Academics
                </p>

                <p className="text-sm text-gray-500">
                  Learn. Participate. Grow. Lead.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={studentsImage}
              alt="Students at Corridors Of Hope"
              className="h-[480px] w-full rounded-[2rem] object-cover shadow-2xl"
            />
          </motion.div>

        </div>
      </section>

      {/* ACTIVITIES */}
      <section className="bg-[#F8F7F4] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#C9A13B]">
              Explore
            </span>

            <h2 className="mt-5 text-4xl font-extrabold text-[#102A5C] sm:text-5xl">
              Something For
              <span className="text-[#C9A13B]">
                {" "}Every Learner.
              </span>
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              From sport and creative expression to leadership and innovation,
              students have opportunities to discover what they enjoy and
              develop skills that last beyond school.
            </p>
          </div>

          <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">

            {activities.map((activity, index) => {
              const Icon = activity.icon;

              return (
                <motion.article
                  key={activity.title}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  className="group overflow-hidden rounded-[2rem] bg-white shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
                >

                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={activity.image}
                      alt={activity.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#102A5C]/80 to-transparent" />

                    <div className="absolute bottom-5 left-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#C9A13B] text-white">
                      <Icon size={21} />
                    </div>
                  </div>

                  <div className="p-7">

                    <h3 className="text-xl font-bold text-[#102A5C]">
                      {activity.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-gray-600">
                      {activity.text}
                    </p>

                    <div className="mt-6 h-1 w-8 rounded-full bg-[#C9A13B] transition-all duration-300 group-hover:w-16" />

                  </div>

                </motion.article>
              );
            })}

          </div>

        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="border-t border-[#C9A13B]/35 bg-[#F8F7F4] py-24 lg:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">

          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#C7372F]">
            Student Experience
          </span>

          <h2 className="mt-5 text-4xl font-extrabold text-[#102A5C] sm:text-5xl">
            Helping learners become
            <span className="text-[#C7372F]">
              {" "}confident future leaders.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-600">
            At Corridors Of Hope, every experience is an opportunity to learn,
            grow and discover what is possible.
          </p>

          <div className="mt-9">
            <Link
              to="/admissions"
              className="inline-flex items-center gap-3 rounded-full bg-[#102A5C] px-8 py-4 font-semibold text-white transition hover:bg-[#C7372F]"
            >
              Explore Admissions
              <FiArrowRight size={18} />
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}
