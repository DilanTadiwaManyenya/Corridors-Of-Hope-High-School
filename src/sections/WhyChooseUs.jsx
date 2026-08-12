import { motion } from "framer-motion";

import teachersImage from "../assets/images/teachers.jpg";
import scienceImage from "../assets/images/science-lab.jpg";
import computerImage from "../assets/images/computer-lab.jpg";
import sportsImage from "../assets/images/sports.jpg";
import campusImage from "../assets/images/campus.jpg";
import studentsImage from "../assets/images/students-learning.jpg";

const features = [
  {
    title: "Dedicated Teachers",
    description:
      "Experienced educators who provide guidance, mentorship, and support to help every learner succeed.",
    image: teachersImage,
    large: true,
  },
  {
    title: "Practical Science Learning",
    description:
      "Well-equipped laboratories that encourage curiosity, experimentation, and critical thinking.",
    image: scienceImage,
  },
  {
    title: "Digital Excellence",
    description:
      "ICT education that equips students with essential technology skills for the future.",
    image: computerImage,
  },
  {
    title: "Sports & Activities",
    description:
      "A balanced student experience through sports, clubs, teamwork, and leadership opportunities.",
    image: sportsImage,
  },
  {
    title: "Safe Learning Environment",
    description:
      "A disciplined and supportive environment where students feel secure and motivated to excel.",
    image: campusImage,
  },
  {
    title: "Whole Student Development",
    description:
      "Developing academic ability, character, confidence, and responsible future leaders.",
    image: studentsImage,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-[#102A5C] py-24 lg:py-32">

      {/* Background decoration */}
      <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#C9A13B]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-[#C9A13B]" />

            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#C9A13B]">
              Why Choose Us
            </span>
          </div>

          <h2 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            A School That
            <span className="block text-[#C9A13B]">
              Inspires Excellence.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
            We provide an environment where students develop academically,
            socially, spiritually, and become confident future leaders.
          </p>
        </motion.div>

        {/* Feature grid */}
        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature, index) => {
            return (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className={`
                  group
                  relative
                  overflow-hidden
                  rounded-[2rem]
                  bg-white
                  ${feature.large ? "md:col-span-2 lg:col-span-2 lg:row-span-2" : ""}
                `}
              >

                {/* Image */}
                <div
                  className={`
                    relative
                    overflow-hidden
                    ${feature.large ? "h-[460px] lg:h-full lg:min-h-[560px]" : "h-56"}
                  `}
                >

                  <img
                    src={feature.image}
                    alt={feature.title}
                    className={`
                      h-full
                      w-full
                      object-cover
                      ${feature.large ? "object-[center_35%]" : "object-center"}
                      transition-transform
                      duration-700
                      group-hover:scale-105
                    `}
                  />

                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                  {feature.large && (
                    <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9">
                      <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#C9A13B]">
                        Our People
                      </p>

                      <h3 className="mt-2 text-3xl font-bold text-white">
                        {feature.title}
                      </h3>
                      <p className="mt-3 max-w-lg leading-7 text-white/75">{feature.description}</p>
                    </div>
                  )}

                </div>

                {/* Content */}
                {!feature.large && (
                  <div className="border-t-2 border-[#C9A13B] p-6">

                    <h3 className="text-xl font-bold text-[#102A5C]">
                      {feature.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-gray-500">
                      {feature.description}
                    </p>

                    <div className="
                      mt-5
                      h-1
                      w-8
                      rounded-full
                      bg-[#C9A13B]
                      transition-all
                      duration-300
                      group-hover:w-16
                    " />

                  </div>
                )}

              </motion.article>
            );
          })}

        </div>

      </div>
    </section>
  );
}
