import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiMapPin,
  FiPhone,
  FiMail,
} from "react-icons/fi";

export default function Contact() {
  return (
    <section className="bg-white py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="overflow-hidden rounded-[2.5rem] bg-[#102A5C]"
        >

          <div className="grid lg:grid-cols-[1.15fr_0.85fr]">

            {/* LEFT */}
            <div className="relative overflow-hidden p-8 sm:p-12 lg:p-16">

              {/* Decorative glow */}
              <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#C9A13B]/10 blur-3xl" />

              <div className="relative">

                <div className="flex items-center gap-4">
                  <span className="h-px w-12 bg-[#C9A13B]" />

                  <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#C9A13B]">
                    Get In Touch
                  </span>
                </div>

                <h2 className="mt-6 max-w-2xl text-4xl font-extrabold leading-tight text-white sm:text-5xl">
                  Let's Begin Your
                  <span className="block text-[#C9A13B]">
                    Child's Journey.
                  </span>
                </h2>

                <p className="mt-6 max-w-xl text-lg leading-8 text-white/65">
                  Have questions about admissions, academics or life at
                  Corridors Of Hope? Our team is ready to assist you.
                </p>

                {/* CONTACT DETAILS */}
                <div className="mt-10 grid gap-5 sm:grid-cols-3">

                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#C9A13B]">
                      <FiMapPin size={19} />
                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-white/40">
                        Location
                      </p>

                      <p className="mt-1 text-sm text-white/80">
                        Harare, Zimbabwe
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#C9A13B]">
                      <FiPhone size={19} />
                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-white/40">
                        Phone
                      </p>

                      <p className="mt-1 text-sm text-white/80">
                        +263 XX XXX XXXX
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#C9A13B]">
                      <FiMail size={19} />
                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-white/40">
                        Email
                      </p>

                      <p className="mt-1 text-sm text-white/80">
                        info@corridorsofhope.co.zw
                      </p>
                    </div>
                  </div>

                </div>

              </div>
            </div>

            {/* RIGHT */}
            <div className="flex items-center bg-[#C9A13B] p-8 sm:p-12 lg:p-16">

              <div>

                <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/70">
                  Admissions 2026
                </span>

                <h3 className="mt-4 text-3xl font-extrabold leading-tight text-white">
                  Ready to take
                  <span className="block">
                    the next step?
                  </span>
                </h3>

                <p className="mt-5 leading-7 text-white/80">
                  Explore our admissions process or get in touch with the
                  school to learn more about joining our community.
                </p>

                <Link
                  to="/contact"
                  className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#102A5C] px-7 py-4 font-semibold text-white transition hover:bg-white hover:text-[#102A5C]"
                >
                  Contact The School
                  <FiArrowRight size={18} />
                </Link>

              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
