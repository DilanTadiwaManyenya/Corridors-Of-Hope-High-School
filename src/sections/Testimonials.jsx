import { motion } from "framer-motion";

export default function Testimonials() {
  return (
    <section className="bg-slate-50 py-20 lg:py-24">
      <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto max-w-4xl px-6 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#C9A13B]">Our commitment</p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#102A5C] sm:text-4xl">A place to learn, contribute and lead.</h2>
        <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-600">We believe a strong school community gives young people room to develop their knowledge, confidence and sense of responsibility.</p>
      </motion.div>
    </section>
  );
}
