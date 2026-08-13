import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight, FiMaximize2 } from "react-icons/fi";

import gallery1 from "../assets/images/gallery-1.jpg";
import gallery2 from "../assets/images/gallery-2.jpg";
import gallery3 from "../assets/images/gallery-3.jpg";
import gallery4 from "../assets/images/gallery-4.jpg";
import gallery5 from "../assets/images/gallery-5.jpg";

const galleryImages = [
  {
    image: gallery1,
    title: "Life At Corridors Of Hope",
    category: "School Life",
  },
  {
    image: gallery2,
    title: "Learning Together",
    category: "Academics",
  },
  {
    image: gallery3,
    title: "Celebrating Achievement",
    category: "Events",
  },
  {
    image: gallery4,
    title: "Growing Through Sport",
    category: "Sports",
  },
  {
    image: gallery5,
    title: "Our School Community",
    category: "Community",
  },
];

export default function Gallery() {
  return (
    <section className="bg-[#F8F7F4] py-14 lg:py-20">
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
                Gallery
              </span>
            </div>

            <h2 className="mt-5 text-4xl font-extrabold text-[#102A5C] sm:text-5xl">
              Life At
              <span className="text-[#C9A13B]">
                {" "}Corridors Of Hope.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl leading-8 text-gray-600">
              A glimpse into the people, moments and experiences that make our
              school community special.
            </p>
          </motion.div>

          <Link
            to="/gallery"
            className="inline-flex w-fit items-center gap-3 rounded-full border border-[#102A5C] px-6 py-3 font-semibold text-[#102A5C] transition hover:bg-[#102A5C] hover:text-white"
          >
            View Full Gallery
            <FiArrowRight size={18} />
          </Link>

        </div>

        {/* GALLERY GRID */}
        <div className="mt-14 grid auto-rows-[220px] grid-cols-2 gap-4 md:grid-cols-4">

          {galleryImages.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className={`group relative overflow-hidden rounded-[1.5rem] ${
                index === 0
                  ? "col-span-2 row-span-2"
                  : index === 3
                  ? "col-span-2"
                  : ""
              }`}
            >

              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

              {/* CONTENT */}
              <div className="absolute inset-x-0 bottom-0 translate-y-4 p-6 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">

                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9A13B]">
                  {item.category}
                </span>

                <h3 className="mt-2 text-lg font-bold text-white">
                  {item.title}
                </h3>

              </div>

              {/* ICON */}
              <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#102A5C] opacity-0 transition duration-300 group-hover:opacity-100">
                <FiMaximize2 size={17} />
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
