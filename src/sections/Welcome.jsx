import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <section className="py-28 bg-white">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">


        {/* Principal Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >


          {/* Gold Accent */}
          <div
            className="
              absolute
              -top-6
              -left-6
              w-36
              h-36
              border-4
              border-[#C9A13B]
              rounded-[35px]
              hidden
              md:block
            "
          />


          {/* Image */}
          <img
            src="/images/principal.jpg"
            alt="Principal of Corridors Of Hope High School"
            className="
              relative
              z-10
              rounded-[40px]
              shadow-2xl
              w-full
              object-cover
              transition
              duration-500
              hover:scale-[1.02]
            "
          />



          {/* Principal Badge */}
          <div
            className="
              absolute
              z-20
              bottom-6
              left-6
              bg-white
              shadow-xl
              rounded-2xl
              px-6
              py-4
            "
          >

            <p className="
              text-sm
              text-gray-500
            ">
              Principal
            </p>

            <h3
              className="
                font-bold
                text-[#102A5C]
              "
            >
              Corridors Of Hope
            </h3>

          </div>


        </motion.div>





        {/* Content */}
        <motion.div

          initial={{ opacity:0, x:40 }}

          whileInView={{ opacity:1, x:0 }}

          viewport={{ once:true }}

          transition={{ duration:.7 }}

        >


          <span
            className="
              uppercase
              tracking-[6px]
              text-[#C9A13B]
              font-semibold
              text-sm
            "
          >
            Welcome
          </span>



          <h2
            className="
              mt-5
              text-4xl
              md:text-5xl
              font-bold
              text-[#102A5C]
              leading-tight
            "
          >
            A Message From
            <br />
            The Principal
          </h2>



          <div
            className="
              mt-5
              w-20
              h-1
              bg-[#C9A13B]
              rounded-full
            "
          />



          <p
            className="
              mt-8
              leading-8
              text-gray-600
              text-lg
            "
          >
            Welcome to Corridors Of Hope High School, where we inspire
            academic excellence, leadership, discipline, and innovation.
            Our commitment is to prepare every learner for a successful
            future through quality education and strong moral values.
          </p>



          <p
            className="
              mt-5
              leading-8
              text-gray-600
            "
          >
            Through dedicated teachers, a supportive environment, and
            character-driven education, we create opportunities for every
            student to discover their potential.
          </p>




          <Link
            to="/about"
            className="
              inline-flex
              items-center
              mt-8
              bg-[#102A5C]
              hover:bg-[#C9A13B]
              text-white
              px-9
              py-4
              rounded-full
              font-semibold
              transition
              duration-300
              shadow-lg
            "
          >
            Discover Our School
          </Link>


        </motion.div>


      </div>

    </section>
  );
}