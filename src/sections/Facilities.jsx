import { motion } from "framer-motion";
import { facilities } from "../data/facilities";

import Card from "../components/ui/Card";
import SectionTitle from "../components/ui/SectionTitle";

export default function Facilities() {
  return (
    <section className="py-28 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <SectionTitle
          center
          eyebrow="Facilities"
          title="Designed For Modern Learning"
          subtitle="Every facility supports an environment where students can learn, discover and thrive."
        />


        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {facilities.map((facility, index) => {

            const Icon = facility.icon;

            return (

              <motion.div
                key={facility.title}
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
                  duration:.6,
                  delay:index * .12
                }}

                whileHover={{
                  y:-10
                }}
              >

                <Card
                  className="
                    h-full
                    group
                    border
                    border-transparent
                    hover:border-[#C9A13B]
                    transition
                  "
                >

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
                    {facility.title}
                  </h3>


                  <p
                    className="
                      mt-4
                      text-gray-600
                      leading-7
                    "
                  >
                    {facility.description}
                  </p>


                  <div
                    className="
                      mt-6
                      h-1
                      w-10
                      rounded-full
                      bg-[#C9A13B]
                      group-hover:w-20
                      transition-all
                    "
                  />


                </Card>


              </motion.div>

            );

          })}

        </div>


      </div>

    </section>
  );
}