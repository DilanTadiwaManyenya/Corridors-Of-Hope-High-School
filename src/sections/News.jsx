import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight, FiCalendar } from "react-icons/fi";

const news = [
  {
    category: "School News",
    date: "August 2026",
    title: "Preparing Our Learners For A Changing World",
    excerpt:
      "Discover how Corridors Of Hope continues to develop academic excellence, character and innovation across the school community.",
    featured: true,
  },
  {
    category: "Academics",
    date: "July 2026",
    title: "Celebrating Academic Excellence",
    excerpt:
      "Our learners continue to demonstrate commitment, discipline and determination in their academic journey.",
  },
  {
    category: "Student Life",
    date: "July 2026",
    title: "Growing Through Sport, Leadership & Community",
    excerpt:
      "Beyond the classroom, students continue to develop teamwork, confidence and leadership through a vibrant school experience.",
  },
];

export default function News() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* HEADER */}
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-[#C9A13B]" />

              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#C9A13B]">
                News & Updates
              </span>
            </div>

            <h2 className="mt-5 text-4xl font-extrabold text-[#102A5C] sm:text-5xl">
              What's Happening
              <span className="block text-[#C9A13B]">
                At Our School.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl leading-8 text-gray-600">
              Keep up with the latest news, achievements, activities and
              important updates from the Corridors Of Hope community.
            </p>
          </motion.div>

          <Link
            to="/news"
            className="inline-flex w-fit items-center gap-3 rounded-full border border-[#102A5C] px-6 py-3 font-semibold text-[#102A5C] transition hover:bg-[#102A5C] hover:text-white"
          >
            View All News
            <FiArrowRight size={18} />
          </Link>

        </div>

        {/* NEWS GRID */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3">

          {news.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className={`group rounded-[2rem] border border-gray-100 p-8 transition duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                item.featured
                  ? "bg-[#102A5C] text-white"
                  : "bg-[#F8F7F4]"
              }`}
            >

              {/* META */}
              <div className="flex items-center justify-between">

                <span
                  className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider ${
                    item.featured
                      ? "bg-[#C9A13B] text-white"
                      : "bg-[#102A5C] text-white"
                  }`}
                >
                  {item.category}
                </span>

                <span
                  className={`text-sm ${
                    item.featured
                      ? "text-white/60"
                      : "text-gray-500"
                  }`}
                >
                  {item.date}
                </span>

              </div>

              {/* TITLE */}
              <h3
                className={`mt-8 text-2xl font-bold leading-tight ${
                  item.featured
                    ? "text-white"
                    : "text-[#102A5C]"
                }`}
              >
                {item.title}
              </h3>

              {/* EXCERPT */}
              <p
                className={`mt-5 leading-7 ${
                  item.featured
                    ? "text-white/70"
                    : "text-gray-600"
                }`}
              >
                {item.excerpt}
              </p>

              {/* FOOTER */}
              <div className="mt-8 flex items-center justify-between">

                <div
                  className={`flex items-center gap-2 text-sm ${
                    item.featured
                      ? "text-white/60"
                      : "text-gray-500"
                  }`}
                >
                  <FiCalendar size={16} />
                  {item.date}
                </div>

                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full transition ${
                    item.featured
                      ? "bg-white text-[#102A5C] group-hover:bg-[#C9A13B] group-hover:text-white"
                      : "bg-[#102A5C] text-white group-hover:bg-[#C9A13B]"
                  }`}
                >
                  <FiArrowRight size={17} />
                </div>

              </div>

            </motion.article>
          ))}

        </div>

      </div>
    </section>
  );
}
