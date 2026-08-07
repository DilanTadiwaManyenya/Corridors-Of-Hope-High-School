import { motion } from "framer-motion";
import { studentLife } from "../data/studentLife";

export default function StudentLife() {
  return (
    <section className="py-28 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity:0, y:30 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:.7 }}
          className="text-center max-w-3xl mx-auto"
        >

          <span className="uppercase tracking-[5px] text-[#C9A13B] font-semibold">
            Student Life
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#102A5C]">
            Learning Beyond The Classroom
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            Education is about more than academics. We encourage leadership,
            creativity, teamwork, innovation and personal growth through a
            vibrant student experience.
          </p>

        </motion.div>


        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {studentLife.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.title}
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
                    p-8
                    shadow-lg
                    hover:shadow-2xl
                    hover:-translate-y-2
                    transition-all
                    duration-300
                    border
                    border-transparent
                    hover:border-[#C9A13B]
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
                    "
                  >
                    <Icon size={34} />
                  </div>

                  <h3 className="mt-8 text-2xl font-bold text-[#102A5C]">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-gray-600 leading-8">
                    {item.description}
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