import { motion } from "framer-motion";
import { academics } from "../data/academics";
import { Link } from "react-router-dom";

export default function Academics() {
  return (
    <section className="py-28 bg-slate-50">

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
            Academic Excellence
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#102A5C]">
            Preparing Students For The Future
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            Our curriculum equips learners with knowledge, creativity,
            leadership and critical thinking for higher education and life.
          </p>

        </motion.div>



        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">

          {academics.map((item,index)=>{

            const Icon = item.icon;

            return(

              <motion.div

                key={item.title}

                initial={{ opacity:0, y:40 }}

                whileInView={{ opacity:1, y:0 }}

                viewport={{ once:true }}

                transition={{ delay:index*.15 }}

              >

                <div
                  className="
                    bg-white
                    rounded-3xl
                    p-8
                    shadow-lg
                    hover:shadow-2xl
                    hover:-translate-y-2
                    transition-all
                    duration-300
                    flex
                    gap-6
                    items-start
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
                      shrink-0
                    "
                  >

                    <Icon size={34}/>

                  </div>

                  <div>

                    <h3 className="text-2xl font-bold text-[#102A5C]">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-gray-600 leading-8">
                      {item.description}
                    </p>

                  </div>

                </div>

              </motion.div>

            );

          })}

        </div>


        {/* Button */}
        <div className="text-center mt-14">

          <Link
            to="/academics"
            className="
              inline-flex
              items-center
              bg-[#102A5C]
              hover:bg-[#C9A13B]
              text-white
              px-10
              py-4
              rounded-full
              font-semibold
              transition
              duration-300
              shadow-lg
            "
          >
            Explore Academics
          </Link>

        </div>

      </div>

    </section>
  );
}