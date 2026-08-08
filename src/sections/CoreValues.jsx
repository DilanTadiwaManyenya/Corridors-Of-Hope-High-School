import { motion } from "framer-motion";
import { values } from "../data/values";

export default function CoreValues() {

  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">


        {/* Header */}

        <div className="text-center max-w-3xl mx-auto">

          <p
            className="
              uppercase
              tracking-[5px]
              text-[#C9A13B]
              font-semibold
              text-sm
            "
          >
            Our Foundation
          </p>


          <h2
            className="
              mt-4
              text-4xl
              md:text-5xl
              font-bold
              text-[#102A5C]
            "
          >
            The Values That Shape
            <br/>
            Every Student
          </h2>


          <p
            className="
              mt-5
              text-gray-600
              text-lg
            "
          >
            Everything we do is guided by principles that prepare
            learners for success in school and in life.
          </p>

        </div>



        {/* Cards */}

        <div
          className="
            grid
            md:grid-cols-2
            lg:grid-cols-4
            gap-8
            mt-16
          "
        >

          {values.map((item,index)=>{


            const Icon = item.icon;


            return (

              <motion.div

                key={item.title}

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
                  delay:index * .12
                }}


                className="
                  group
                  relative
                  bg-[#F8F7F3]
                  rounded-3xl
                  p-8
                  overflow-hidden
                  hover:-translate-y-3
                  transition
                  duration-300
                "

              >


                {/* Gold line */}

                <div
                  className="
                    absolute
                    top-0
                    left-0
                    h-1
                    w-0
                    bg-[#C9A13B]
                    group-hover:w-full
                    transition-all
                    duration-500
                  "
                />



                <div
                  className="
                    w-16
                    h-16
                    rounded-2xl
                    bg-[#102A5C]
                    text-white
                    flex
                    items-center
                    justify-center
                    group-hover:bg-[#C9A13B]
                    transition
                  "
                >

                  <Icon size={30}/>

                </div>




                <h3
                  className="
                    mt-6
                    text-2xl
                    font-bold
                    text-[#102A5C]
                  "
                >
                  {item.title}
                </h3>



                <p
                  className="
                    mt-4
                    text-gray-600
                    leading-7
                  "
                >
                  {item.description}
                </p>


              </motion.div>

            );


          })}


        </div>


      </div>


    </section>
  );
}