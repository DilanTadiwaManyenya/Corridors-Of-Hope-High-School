import { motion } from "framer-motion";
import { features } from "../data/features";

export default function WhyChooseUs() {
  return (
    <section className="py-28 bg-white">

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
            Why Choose Us
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#102A5C]">
            A School That Inspires Excellence
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            We provide an environment where students develop academically,
            socially, spiritually, and become confident future leaders.
          </p>

        </motion.div>


        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {features.map((feature, index) => {

            const Icon = feature.icon;

            return (

              <motion.div
                key={feature.title}
                initial={{ opacity:0, y:40 }}
                whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }}
                transition={{ delay:index*.1 }}
              >

                <div
                  className="
                    h-full
                    bg-slate-50
                    rounded-3xl
                    p-10
                    border
                    border-slate-100
                    hover:border-[#C9A13B]
                    hover:-translate-y-2
                    hover:shadow-2xl
                    transition-all
                    duration-300
                  "
                >

                  <div
                    className="
                      w-20
                      h-20
                      rounded-2xl
                      bg-[#102A5C]
                      text-[#C9A13B]
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <Icon size={36} />
                  </div>

                  <h3 className="mt-8 text-2xl font-bold text-[#102A5C]">
                    {feature.title}
                  </h3>

                  <p className="mt-5 text-gray-600 leading-8">
                    {feature.description}
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