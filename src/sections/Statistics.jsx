import { motion } from "framer-motion";
import { stats } from "../data/stats";

export default function Statistics() {

  return (
    <section className="py-24 bg-[#F8F7F3]">

      <div className="
        max-w-7xl
        mx-auto
        px-6
      ">


        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <p className="
            uppercase
            tracking-[5px]
            text-[#C9A13B]
            font-semibold
            text-sm
          ">
            Our Impact
          </p>


          <h2 className="
            mt-4
            text-4xl
            md:text-5xl
            font-bold
            text-[#102A5C]
          ">
            Numbers That Tell Our Story
          </h2>


          <p className="
            mt-5
            text-gray-600
            text-lg
          ">
            Every achievement reflects our commitment to nurturing
            excellence, discipline, character, and future leaders.
          </p>

        </div>



        {/* Cards */}

        <div className="
          grid
          grid-cols-2
          md:grid-cols-4
          gap-6
          mt-16
        ">


          {stats.map((item,index)=>(

            <motion.div

              key={item.label}

              initial={{
                opacity:0,
                y:30
              }}

              whileInView={{
                opacity:1,
                y:0
              }}

              viewport={{
                once:true
              }}

              transition={{
                delay:index * .1
              }}

              className="
                bg-white
                rounded-3xl
                p-8
                text-center
                shadow-lg
                hover:-translate-y-3
                transition
                duration-300
              "

            >

              <h3 className="
                text-4xl
                md:text-5xl
                font-extrabold
                text-[#102A5C]
              ">
                {item.number}
                <span className="text-[#C9A13B]">
                  {item.suffix}
                </span>
              </h3>


              <p className="
                mt-4
                text-gray-600
                font-medium
              ">
                {item.label}
              </p>


            </motion.div>


          ))}


        </div>


      </div>


    </section>
  );
}