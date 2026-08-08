import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiMaximize2 } from "react-icons/fi";

import gallery1 from "../assets/images/gallery-1.jpg";
import gallery2 from "../assets/images/gallery-2.jpg";
import gallery3 from "../assets/images/gallery-3.jpg";
import gallery4 from "../assets/images/gallery-4.jpg";
import gallery5 from "../assets/images/gallery-5.jpg";
import gallery6 from "../assets/images/gallery-6.jpg";
import gallery7 from "../assets/images/gallery-7.jpg";
import gallery8 from "../assets/images/gallery-8.jpg";

const images = [
  {
    image: gallery1,
    title: "School Life",
    category: "School Life",
  },
  {
    image: gallery2,
    title: "Learning Together",
    category: "Academics",
  },
  {
    image: gallery3,
    title: "School Events",
    category: "Events",
  },
  {
    image: gallery4,
    title: "Sports Excellence",
    category: "Sports",
  },
  {
    image: gallery5,
    title: "Our Students",
    category: "School Life",
  },
  {
    image: gallery6,
    title: "Academic Excellence",
    category: "Academics",
  },
  {
    image: gallery7,
    title: "Community",
    category: "Community",
  },
  {
    image: gallery8,
    title: "Celebrating Together",
    category: "Events",
  },
];

const categories = [
  "All",
  "School Life",
  "Academics",
  "Sports",
  "Events",
  "Community",
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages =
    activeCategory === "All"
      ? images
      : images.filter(
          (item) => item.category === activeCategory
        );

  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#102A5C] py-32 lg:py-40">

        <div className="absolute inset-0 bg-gradient-to-br from-[#102A5C] via-[#102A5C] to-[#07152F]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            className="max-w-4xl"
          >

            <div className="flex items-center gap-4">

              <span className="h-px w-12 bg-[#C9A13B]" />

              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#C9A13B]">
                Gallery
              </span>

            </div>

            <h1 className="mt-6 text-5xl font-extrabold leading-tight text-white sm:text-6xl lg:text-7xl">
              Moments That
              <span className="block text-[#C9A13B]">
                Tell Our Story.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">
              Explore moments from academic life, sport, events, student
              activities and the wider Corridors Of Hope community.
            </p>

          </motion.div>

        </div>

      </section>

      {/* GALLERY */}
      <section className="py-20 lg:py-28">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          {/* FILTERS */}
          <div className="mb-12 flex flex-wrap gap-3">

            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-6 py-3 text-sm font-semibold transition ${
                  activeCategory === category
                    ? "bg-[#102A5C] text-white"
                    : "bg-[#F3F1EC] text-gray-600 hover:bg-[#C9A13B] hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}

          </div>

          {/* GRID */}
          <motion.div
            layout
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >

            <AnimatePresence mode="popLayout">

              {filteredImages.map((item) => (

                <motion.article
                  layout
                  key={item.image}
                  initial={{
                    opacity: 0,
                    scale: 0.95,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.95,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                  className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-[1.5rem]"
                  onClick={() => setSelectedImage(item)}
                >

                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                  <div className="absolute inset-x-0 bottom-0 translate-y-5 p-6 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">

                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9A13B]">
                      {item.category}
                    </span>

                    <h3 className="mt-2 text-xl font-bold text-white">
                      {item.title}
                    </h3>

                  </div>

                  <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-[#102A5C] opacity-0 transition group-hover:opacity-100">
                    <FiMaximize2 size={18} />
                  </div>

                </motion.article>

              ))}

            </AnimatePresence>

          </motion.div>

        </div>

      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>

        {selectedImage && (

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-6"
            onClick={() => setSelectedImage(null)}
          >

            <button
              onClick={() => setSelectedImage(null)}
              className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#102A5C] transition hover:bg-[#C9A13B] hover:text-white"
            >
              <FiX size={22} />
            </button>

            <motion.div
              initial={{
                scale: 0.9,
              }}
              animate={{
                scale: 1,
              }}
              exit={{
                scale: 0.9,
              }}
              className="max-h-[90vh] max-w-6xl overflow-hidden rounded-2xl"
              onClick={(event) => event.stopPropagation()}
            >

              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-h-[85vh] max-w-full object-contain"
              />

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </main>
  );
}