import { motion } from "framer-motion";

const pillars = ["Academic focus", "Character formation", "Student leadership", "Community spirit"];

export default function Statistics() {

  return (
    <section className="border-y border-slate-200 bg-[#F8F7F3] py-12 lg:py-16">

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
            The Corridors Difference
          </p>


          <h2 className="
            mt-4
            text-4xl
            md:text-5xl
            font-bold
            text-[#102A5C]
          ">
            An education shaped by purpose
          </h2>


          <p className="
            mt-5
            text-gray-600
            text-lg
          ">
            Corridors Of Hope brings learning, discipline and opportunity together in an environment where learners can grow with confidence.
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


          {pillars.map((item,index)=>(

            <motion.div

              key={item}

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
                border-t-2 border-[#C9A13B]
                bg-transparent
                p-6 sm:p-8
                text-center
              "

            >

              <h3 className="
                text-lg
                font-bold
                text-[#102A5C]
              ">
                {String(index + 1).padStart(2, "0")}
              </h3>


              <p className="
                mt-3 text-sm font-medium text-slate-600
              ">
                {item}
              </p>


            </motion.div>


          ))}


        </div>


      </div>


    </section>
  );
}
