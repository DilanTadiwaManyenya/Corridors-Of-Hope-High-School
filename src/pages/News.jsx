import { motion } from "framer-motion";
import { FiArrowRight, FiCalendar, FiClock } from "react-icons/fi";
import eventImage from "../assets/images/school-event.JPG";

const news = [
  {
    category: "School News",
    date: "August 2026",
    readTime: "4 min read",
    title: "Preparing Our Learners For A Changing World",
    excerpt:
      "Corridors Of Hope continues to focus on academic excellence, character development, innovation and leadership as we prepare learners for the future.",
    featured: true,
  },
  {
    category: "Academics",
    date: "July 2026",
    readTime: "3 min read",
    title: "Celebrating Academic Excellence",
    excerpt:
      "Our learners continue to demonstrate determination, discipline and commitment to achieving their academic goals.",
  },
  {
    category: "Student Life",
    date: "July 2026",
    readTime: "3 min read",
    title: "Growing Through Sport & Leadership",
    excerpt:
      "Sport, leadership and extracurricular activities continue to provide students with opportunities to develop confidence and teamwork.",
  },
  {
    category: "Community",
    date: "June 2026",
    readTime: "4 min read",
    title: "Building A Stronger School Community",
    excerpt:
      "Teachers, learners, parents and the wider community all play an important role in creating an environment where students can thrive.",
  },
  {
    category: "Innovation",
    date: "June 2026",
    readTime: "3 min read",
    title: "Encouraging Innovation & Digital Skills",
    excerpt:
      "Technology and digital learning are becoming an increasingly important part of preparing learners for opportunities beyond school.",
  },
  {
    category: "School Events",
    date: "May 2026",
    readTime: "2 min read",
    title: "Moments That Bring Our Community Together",
    excerpt:
      "School events create opportunities for learners to celebrate achievement, build friendships and strengthen our community.",
  },
];

export default function News() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#102A5C] py-20 lg:py-28">
        <img src={eventImage} alt="School event at Corridors Of Hope High School" className="absolute inset-0 h-full w-full object-cover object-center opacity-55" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071a3d]/88 via-[#102A5C]/72 to-[#102A5C]/35" />
        <div className="absolute inset-x-0 bottom-0 h-1 bg-[#C7372F]" />

        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#C9A13B]/10 blur-3xl" />

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
                News & Updates
              </span>

            </div>

            <h1 className="mt-5 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              Stories From
              <span className="block text-[#C9A13B]">
                Our Community.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">
              Stay informed about school achievements, academic developments,
              student activities, events and important announcements.
            </p>

          </motion.div>

        </div>
      </section>

      {/* NEWS */}
      <section className="py-14 lg:py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          {/* FEATURED */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="overflow-hidden rounded-[2rem] bg-[#102A5C]"
          >

            <div className="grid lg:grid-cols-2">

              <div className="flex min-h-[300px] flex-col justify-center p-8 sm:p-10 lg:p-12">

                <div className="flex items-center gap-3">

                  <span className="rounded-full bg-[#C9A13B] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white">
                    Featured
                  </span>

                  <span className="text-sm text-white/50">
                    {news[0].date}
                  </span>

                </div>

                <h2 className="mt-7 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                  {news[0].title}
                </h2>

                <p className="mt-5 max-w-xl leading-8 text-white/65">
                  {news[0].excerpt}
                </p>

                <button className="mt-8 flex w-fit items-center gap-3 font-semibold text-[#C9A13B] transition hover:text-white">
                  Read Story
                  <FiArrowRight size={18} />
                </button>

              </div>

              <div className="hidden bg-gradient-to-br from-[#C9A13B]/30 via-[#102A5C] to-[#07152F] lg:block">
                <div className="flex h-full items-center justify-center p-16">

                  <div className="text-center">

                    <div className="text-8xl font-black text-white/5">
                      NEWS
                    </div>

                    <p className="mt-4 text-sm uppercase tracking-[0.3em] text-[#C9A13B]">
                      Corridors Of Hope
                    </p>

                  </div>

                </div>
              </div>

            </div>

          </motion.article>

          {/* SECTION TITLE */}
          <div className="mt-20">

            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#C9A13B]">
              Latest Stories
            </span>

            <h2 className="mt-4 text-4xl font-extrabold text-[#102A5C]">
              Latest From The School
            </h2>

          </div>

          {/* NEWS GRID */}
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {news.slice(1).map((item, index) => (

              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className="group flex flex-col rounded-[2rem] border border-gray-100 bg-[#F8F7F4] p-8 transition duration-500 hover:-translate-y-2 hover:bg-white hover:shadow-2xl"
              >

                {/* CATEGORY */}
                <div className="flex items-center justify-between">

                  <span className="rounded-full bg-[#102A5C] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white">
                    {item.category}
                  </span>

                  <FiArrowRight
                    size={19}
                    className="text-[#C9A13B] transition group-hover:translate-x-1"
                  />

                </div>

                {/* TITLE */}
                <h3 className="mt-8 text-2xl font-bold leading-tight text-[#102A5C]">
                  {item.title}
                </h3>

                {/* EXCERPT */}
                <p className="mt-5 flex-grow leading-7 text-gray-600">
                  {item.excerpt}
                </p>

                {/* META */}
                <div className="mt-8 flex items-center gap-5 border-t border-gray-200 pt-5 text-sm text-gray-500">

                  <span className="flex items-center gap-2">
                    <FiCalendar size={15} />
                    {item.date}
                  </span>

                  <span className="flex items-center gap-2">
                    <FiClock size={15} />
                    {item.readTime}
                  </span>

                </div>

              </motion.article>

            ))}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F8F7F4] py-14 lg:py-20">

        <div className="mx-auto max-w-4xl px-6 text-center">

          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#C9A13B]">
            Stay Connected
          </span>

          <h2 className="mt-5 text-4xl font-extrabold text-[#102A5C] sm:text-5xl">
            Follow The Journey.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-600">
            Keep up with the latest developments, achievements and
            opportunities at Corridors Of Hope High School.
          </p>

        </div>

      </section>

    </main>
  );
}
