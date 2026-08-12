import { motion } from "framer-motion";

export default function Testimonials() {
  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <motion.figure initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto max-w-4xl px-6 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#C9A13B]">Our commitment</p>
        <span aria-hidden="true" className="mt-5 block font-serif text-7xl leading-none text-[#C9A13B]">“</span>
        <blockquote className="mx-auto -mt-3 max-w-3xl text-3xl font-bold leading-tight tracking-tight text-[#102A5C] sm:text-4xl">A place to learn, contribute and lead.</blockquote>
        <figcaption className="mx-auto mt-6 max-w-2xl border-t border-[#C9A13B]/35 pt-5 leading-8 text-slate-600">We believe a strong school community gives young people room to develop their knowledge, confidence and sense of responsibility.</figcaption>
      </motion.figure>
    </section>
  );
}
