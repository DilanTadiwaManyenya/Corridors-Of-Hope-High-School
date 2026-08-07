import { motion } from "framer-motion";

import SectionTitle from "../components/ui/SectionTitle";
import Card from "../components/ui/Card";

const testimonials = [
  {
    name: "Parent of a Student",
    role: "Parent",
    message:
      "Corridors Of Hope has provided my child with excellent education, discipline and a supportive learning environment.",
  },

  {
    name: "Former Student",
    role: "Alumni",
    message:
      "The school shaped my character, confidence and prepared me for future opportunities.",
  },

  {
    name: "Current Student",
    role: "Learner",
    message:
      "The teachers encourage us to work hard, discover our talents and become better every day.",
  },
];


export default function Testimonials() {
  return (

    <section className="py-28 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">


        <SectionTitle
          center
          eyebrow="Testimonials"
          title="What Our Community Says"
          subtitle="Hear from parents, students and alumni about their experience at Corridors Of Hope."
        />


        <div className="grid md:grid-cols-3 gap-8 mt-16">


          {testimonials.map((item,index)=>(

            <motion.div

              key={item.name}

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

            >

              <Card className="h-full">


                <p className="text-gray-600 leading-8 italic">
                  "{item.message}"
                </p>


                <div className="mt-8">

                  <h3 className="font-bold text-[#102A5C]">
                    {item.name}
                  </h3>

                  <p className="text-sm text-[#C9A13B]">
                    {item.role}
                  </p>

                </div>


              </Card>


            </motion.div>

          ))}


        </div>


      </div>


    </section>

  );
}