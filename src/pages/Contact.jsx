import { motion } from "framer-motion";
import { useState } from "react";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
  FiSend,
  FiArrowUpRight,
} from "react-icons/fi";
import campusImage from "../assets/images/campus.jpg";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const campuses = [
    {
      name: "Campus A — DZ Extension",
      address: "13343 DZ Extension (Dzivarasekwa Extension)",
      locality: "Harare, Zimbabwe",
      directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=13343%20DZ%20Extension%2C%20Dzivarasekwa%20Extension%2C%20Harare%2C%20Zimbabwe",
    },
    {
      name: "Campus B — Plot 21 Burg",
      address: "Plot 21 Burg",
      locality: "Harare, Zimbabwe",
      directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Plot%2021%20Burg%2C%20Harare%2C%20Zimbabwe",
    },
  ];
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#102A5C] py-20 lg:py-28">
        <img src={campusImage} alt="Corridors Of Hope High School campus" className="absolute inset-0 h-full w-full object-cover object-center opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071a3d]/88 via-[#102A5C]/72 to-[#102A5C]/35" />
        <div className="absolute inset-x-0 bottom-0 h-1 bg-[#C7372F]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >

            <div className="flex items-center gap-4">

              <span className="h-px w-12 bg-[#C9A13B]" />

              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#C9A13B]">
                Contact Us
              </span>

            </div>

            <h1 className="mt-5 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              We'd Love To
              <span className="block text-[#C9A13B]">
                Hear From You.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">
              Whether you are a parent, learner, prospective student or member
              of our community, our team is here to help.
            </p>

          </motion.div>

        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="py-14 lg:py-20">

        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">

          {/* INFORMATION */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#C9A13B]">
              Contact Information
            </span>

            <h2 className="mt-5 text-4xl font-extrabold text-[#102A5C]">
              Let's Start A
              <span className="block text-[#C9A13B]">
                Conversation.
              </span>
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              Contact the school for admissions enquiries, general information,
              appointments and other questions about Corridors Of Hope High
              School.
            </p>

            <div className="mt-10 space-y-6">

              {/* LOCATION */}
              <div className="flex gap-5">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#102A5C] text-white">
                  <FiMapPin size={21} />
                </div>

                <div>
                  <h3 className="font-bold text-[#102A5C]">
                    Visit Us
                  </h3>

                  <p className="mt-1 text-gray-600">
                    Harare, Zimbabwe
                  </p>
                </div>

              </div>

              {/* PHONE */}
              <div className="flex gap-5">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#102A5C] text-white">
                  <FiPhone size={21} />
                </div>

                <div>
                  <h3 className="font-bold text-[#102A5C]">
                    Call Us
                  </h3>

                  <p className="mt-1 text-gray-600">
                    <a className="font-medium text-[#102A5C] underline decoration-[#C9A13B]/70 underline-offset-4 transition hover:text-[#C9A13B]" href="tel:+263242555014">
                      +263 242 555 014
                    </a>
                  </p>
                </div>

              </div>

              {/* EMAIL */}
              <div className="flex gap-5">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#102A5C] text-white">
                  <FiMail size={21} />
                </div>

                <div>
                  <h3 className="font-bold text-[#102A5C]">
                    Email Us
                  </h3>

                  <p className="mt-1 text-gray-600">
                    <a className="font-medium text-[#102A5C] underline decoration-[#C9A13B]/70 underline-offset-4 transition hover:text-[#C9A13B]" href="mailto:info@corridorsofhope.ac.zw">
                      info@corridorsofhope.ac.zw
                    </a>
                  </p>
                </div>

              </div>

              {/* HOURS */}
              <div className="flex gap-5">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#102A5C] text-white">
                  <FiClock size={21} />
                </div>

                <div>
                  <h3 className="font-bold text-[#102A5C]">
                    Office Hours
                  </h3>

                  <p className="mt-1 text-gray-600">
                    Monday–Friday, 7:30 AM–4:30 PM
                  </p>

                  <p className="text-sm text-gray-500">
                    Saturday visits are available by appointment.
                  </p>
                </div>

              </div>

            </div>

          </motion.div>

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-[2rem] bg-[#F8F7F4] p-8 sm:p-10 lg:p-12"
          >

            <div className="mb-8">

              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#C9A13B]">
                Send A Message
              </span>

              <h2 className="mt-3 text-3xl font-extrabold text-[#102A5C]">
                How Can We Help?
              </h2>

            </div>

            <form className="space-y-6" onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}>

              {/* NAME + EMAIL */}
              <div className="grid gap-6 sm:grid-cols-2">

                <div>
                  <label htmlFor="contact-name" className="mb-2 block text-sm font-semibold text-[#102A5C]">
                    Full Name
                  </label>

                  <input
                    id="contact-name"
                    name="name"
                    required
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 outline-none transition focus:border-[#C9A13B] focus:ring-2 focus:ring-[#C9A13B]/20"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="mb-2 block text-sm font-semibold text-[#102A5C]">
                    Email Address
                  </label>

                  <input
                    id="contact-email"
                    name="email"
                    required
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 outline-none transition focus:border-[#C9A13B] focus:ring-2 focus:ring-[#C9A13B]/20"
                  />
                </div>

              </div>

              {/* PHONE */}
              <div>

                <label htmlFor="contact-phone" className="mb-2 block text-sm font-semibold text-[#102A5C]">
                  Phone Number
                </label>

                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  placeholder="+263..."
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 outline-none transition focus:border-[#C9A13B] focus:ring-2 focus:ring-[#C9A13B]/20"
                />

              </div>

              {/* SUBJECT */}
              <div>

                <label htmlFor="contact-subject" className="mb-2 block text-sm font-semibold text-[#102A5C]">
                  Subject
                </label>

                <select
                  id="contact-subject"
                  name="subject"
                  required
                  defaultValue=""
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-gray-600 outline-none transition focus:border-[#C9A13B] focus:ring-2 focus:ring-[#C9A13B]/20"
                >

                  <option value="" disabled>
                    Select a subject
                  </option>

                  <option>
                    Admissions
                  </option>

                  <option>
                    General Enquiry
                  </option>

                  <option>
                    Academic Enquiry
                  </option>

                  <option>
                    Student Life
                  </option>

                  <option>
                    Other
                  </option>

                </select>

              </div>

              {/* MESSAGE */}
              <div>

                <label htmlFor="contact-message" className="mb-2 block text-sm font-semibold text-[#102A5C]">
                  Message
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows="6"
                  placeholder="How can we help you?"
                  className="w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3.5 outline-none transition focus:border-[#C9A13B] focus:ring-2 focus:ring-[#C9A13B]/20"
                />

              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#102A5C] px-6 py-4 font-semibold text-white transition hover:bg-[#C9A13B]"
              >
                Send Message
                <FiSend size={18} />
              </button>
              {submitted && <p role="status" className="rounded-lg border border-[#C9A13B]/30 bg-white px-4 py-3 text-sm text-[#102A5C]">Thank you. This form is ready for connection to the school’s contact service.</p>}

            </form>

          </motion.div>

        </div>

      </section>

      {/* CAMPUS LOCATIONS */}
      <section className="px-6 pb-14 lg:px-8 lg:pb-20">

        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#102A5C]">

          <div className="grid lg:grid-cols-[1fr_1.1fr]">
            <div className="p-8 sm:p-10 lg:p-12">
              <div className="max-w-xl">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#C9A13B] text-white">
                  <FiMapPin size={28} />
                </div>
                <span className="mt-6 block text-xs font-bold uppercase tracking-[0.3em] text-[#C9A13B]">Our Campuses</span>
                <h2 className="mt-3 text-3xl font-extrabold text-white">Find Your Way To Us.</h2>
                <p className="mt-3 leading-7 text-white/70">Choose the campus most convenient for your visit, then use the directions link to open it in your preferred maps app.</p>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {campuses.map((campus) => (
                  <article key={campus.name} className="rounded-2xl border border-white/15 bg-white/[0.07] p-5">
                    <h3 className="font-bold text-white">{campus.name}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/75">{campus.address}<br />{campus.locality}</p>
                    <a
                      href={campus.directionsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#C9A13B] transition hover:text-white"
                    >
                      Get Directions <FiArrowUpRight aria-hidden="true" size={16} />
                    </a>
                  </article>
                ))}
              </div>
            </div>
            <iframe
              title="Map search for Campus A, DZ Extension"
              src="https://www.google.com/maps?q=13343%20DZ%20Extension%2C%20Dzivarasekwa%20Extension%2C%20Harare%2C%20Zimbabwe&output=embed"
              className="h-[320px] w-full border-0 grayscale-[20%] lg:h-full lg:min-h-[480px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>

      </section>

    </main>
  );
}
