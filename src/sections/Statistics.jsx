import { motion } from "framer-motion";
import { stats } from "../data/stats";

export default function Statistics() {
  return (
    <section className="py-24 bg-[#102A5C] relative overflow-hidden">


      {/* Decorative Background */}
      <div
        className="
          absolute
          -top-20
          -right-20
          w-72
          h-72
          bg-[#C9A13B]/20
          rounded-full
          blur-3xl
        "
      />

      <div
        className="
          absolute
          -bottom-20
          -left-20
          w-72
          h-72
          bg-white/10
          rounded-full
          blur-3xl
        "
      />



      <div className="relative max-w-7xl mx-auto px-6">


        {/* Heading */}
        <motion.div
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
            duration:.7
          }}
          className="text-center mb-16"
        >

          <span
            className="
              uppercase
              tracking-[5px]
              text-[#C9A13B]
              font-semibold
              text-sm
            "
          >
            Our Impact
          </span>


          <h2
            className="
              mt-4
              text-4xl
              md:text-5xl
              font-bold
              text-white
            "
          >
            Numbers That Tell Our Story
          </h2>


          <p
            className="
              mt-5
              text-gray-200
              max-w-3xl
              mx-auto
              leading-8
            "
          >
            Every achievement reflects our commitment to nurturing
            excellence, discipline, and future leaders.
          </p>


        </motion.div>




        {/* Stats Grid */}
        <div
          className="
            grid
            grid-cols-2
            lg:grid-cols-4
            gap-6
          "
        >

          {stats.map((item,index)=>(


            <motion.div

              key={item.label}

              initial={{
                opacity:0,
                y:40
              }}

              whileInView={{
                opacity:1,
                y:0
              }}

              viewport={{
                once:true
              }}

              transition={{
                delay:index*.15
              }}


              className="
                bg-white/10
                backdrop-blur-lg
                border
                border-white/20
                rounded-3xl
                p-8
                text-center
                hover:-translate-y-2
                transition
                duration-300
              "

            >


              <h3
                className="
                  text-5xl
                  font-extrabold
                  text-[#C9A13B]
                "
              >

                {item.number}
                {item.suffix}

              </h3>


              <p
                className="
                  mt-4
                  text-white
                  font-medium
                "
              >
                {item.label}
              </p>


            </motion.div>


          ))}


        </div>


      </div>


    </section>
  );
}