import { motion } from "framer-motion";
import { useState } from "react";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
  FiSend,
} from "react-icons/fi";
import campusImage from "../assets/images/campus.jpg";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#102A5C] py-32 lg:py-40">
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

            <h1 className="mt-6 text-5xl font-extrabold leading-tight text-white sm:text-6xl lg:text-7xl">
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
      <section className="py-20 lg:py-28">

        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">

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
                    Please request the current number from the school office.
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
                    Please request the current email address from the school office.
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
                    Office hours to be confirmed
                  </p>

                  <p className="text-sm text-gray-500">
                    Contact the school for current hours.
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

      {/* MAP / LOCATION PLACEHOLDER */}
      <section className="px-6 pb-20 lg:px-8 lg:pb-28">

        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#102A5C]">

          <div className="flex min-h-[280px] items-center justify-center p-10 text-center">

            <div>

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#C9A13B] text-white">
                <FiMapPin size={28} />
              </div>

              <h2 className="mt-6 text-2xl font-bold text-white">
                Corridors Of Hope High School
              </h2>

              <p className="mt-2 text-white/60">
                Harare, Zimbabwe
              </p>

              <p className="mt-4 text-sm text-white/40">
                School location map can be integrated here.
              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}
