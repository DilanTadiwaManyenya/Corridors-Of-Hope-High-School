import { motion } from "framer-motion";
import { Link } from "react-router-dom";


import heroImage from "../assets/images/hero.png";


export default function Hero() {

  return (

    <section className="relative min-h-screen flex items-center overflow-hidden">


      {/* Background Image */}

      <motion.div

        initial={{ scale: 1 }}

        animate={{ scale: 1.1 }}

        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: "reverse",
        }}

        className="
          absolute
          inset-0
          bg-cover
          bg-center
        "

        style={{
          backgroundImage:`url(${heroImage})`
        }}

      />



      {/* Premium Overlay */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-[#102A5C]/95
          via-[#102A5C]/80
          to-black/60
        "
      />



      {/* Gold Glow */}

      <div
        className="
          absolute
          top-40
          right-20
          w-72
          h-72
          bg-[#C9A13B]/20
          blur-3xl
          rounded-full
        "
      />



      {/* Content */}

      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-6
          pt-24
          w-full
        "
      >


        <div className="max-w-4xl">


        


          {/* Motto */}

          <motion.p

            initial={{
              opacity:0,
              y:20
            }}

            animate={{
              opacity:1,
              y:0
            }}

            transition={{
              delay:.2
            }}

            className="
              uppercase
              tracking-[7px]
              text-[#C9A13B]
              font-semibold
              text-sm
            "

          >
            Opening Corridors Of Life

          </motion.p>



          {/* Heading */}

          <motion.h1

            initial={{
              opacity:0,
              y:30
            }}

            animate={{
              opacity:1,
              y:0
            }}

            transition={{
              delay:.35
            }}

            className="
              mt-6
              text-5xl
              md:text-7xl
              font-extrabold
              text-white
              leading-[1.05]
            "

          >

            Excellence In Education.

            <br/>

            Excellence In Character.

          </motion.h1>



          {/* Description */}

          <motion.p

            initial={{
              opacity:0
            }}

            animate={{
              opacity:1
            }}

            transition={{
              delay:.55
            }}

            className="
              mt-8
              text-lg
              text-gray-200
              max-w-2xl
              leading-8
            "

          >

            Corridors Of Hope High School nurtures future leaders through
            academic excellence, discipline, innovation, and Christian values
            in a safe and inspiring learning environment.

          </motion.p>




          {/* Buttons */}

          <motion.div

            initial={{
              opacity:0,
              y:20
            }}

            animate={{
              opacity:1,
              y:0
            }}

            transition={{
              delay:.7
            }}

            className="
              flex
              flex-wrap
              gap-5
              mt-10
            "

          >

            <Link

              to="/admissions"

              className="
                bg-[#C9A13B]
                hover:bg-[#B88D22]
                text-white
                px-9
                py-4
                rounded-full
                font-semibold
                shadow-xl
                transition
              "

            >

              Admissions Open

            </Link>



            <Link

              to="/about"

              className="
                border
                border-white/70
                text-white
                px-9
                py-4
                rounded-full
                font-semibold
                hover:bg-white
                hover:text-[#102A5C]
                transition
              "

            >

              Explore Our School

            </Link>


          </motion.div>



        </div>



      </div>




      {/* Scroll Indicator */}

      <motion.div

        animate={{
          y:[0,12,0]
        }}

        transition={{
          duration:1.5,
          repeat:Infinity
        }}

        className="
          absolute
          bottom-8
          left-1/2
          -translate-x-1/2
          text-white
          text-3xl
        "

      >

        ↓

      </motion.div>



    </section>

  );
}