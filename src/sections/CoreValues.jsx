import { motion } from "framer-motion";
import { values } from "../data/values";

export default function CoreValues() {
  return (
    <section className="py-28 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="uppercase tracking-[5px] text-[#C9A13B] font-semibold">
            Our Foundation
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#102A5C]">
            The Values That Shape Every Student
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            Everything we do is guided by principles that prepare learners for
            success in school and in life.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {values.map((value, index) => {

            const Icon = value.icon;

            return (

              <motion.div
                key={value.title}
                initial={{ opacity:0, y:40 }}
                whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }}
                transition={{ delay:index*.12 }}
              >

                <div
                  className="
                    h-full
                    bg-white
                    rounded-3xl
                    p-8
                    shadow-lg
                    hover:shadow-2xl
                    hover:-translate-y-2
                    transition-all
                    duration-300
                    text-center
                  "
                >

                  <div
                    className="
                      w-20
                      h-20
                      rounded-full
                      bg-[#102A5C]
                      text-[#C9A13B]
                      flex
                      items-center
                      justify-center
                      mx-auto
                    "
                  >
                    <Icon size={34} />
                  </div>

                  <h3 className="mt-8 text-2xl font-bold text-[#102A5C]">
                    {value.title}
                  </h3>

                  <p className="mt-4 text-gray-600 leading-7">
                    {value.description}
                  </p>

                </div>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}