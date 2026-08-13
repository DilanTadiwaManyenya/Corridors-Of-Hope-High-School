import { motion } from "framer-motion";

export default function Testimonials() {
  return (
    <section className="border-y border-[#C9A13B]/25 bg-[#F8F7F4] py-14 lg:py-20">
      <motion.figure initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto max-w-5xl rounded-[2rem] border border-[#C9A13B]/25 bg-white px-6 py-8 text-center shadow-[0_20px_55px_rgba(16,42,92,0.08)] sm:px-10 sm:py-10">
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#C9A13B]">Our commitment</p>
        <span aria-hidden="true" className="mt-5 block font-serif text-7xl leading-none text-[#C9A13B]">“</span>
        <blockquote className="mx-auto -mt-3 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-[#102A5C] sm:text-5xl">A place to learn, contribute and lead.</blockquote>
        <figcaption className="mx-auto mt-8 max-w-2xl border-t border-[#C9A13B]/35 pt-6 text-lg leading-8 text-slate-600">We believe a strong school community gives young people room to develop their knowledge, confidence and sense of responsibility.</figcaption>
      </motion.figure>
    </section>
  );
}
