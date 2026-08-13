import { motion } from "framer-motion";

export default function PageHero({ eyebrow, title, highlight, description, image, imageAlt, imagePosition = "center" }) {
  return (
    <section className="relative isolate overflow-hidden bg-[#102A5C] py-20 sm:py-24 lg:py-28">
      <img src={image} alt={imageAlt} style={{ objectPosition: imagePosition }} className="absolute inset-0 -z-20 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#071a3d]/84 via-[#102A5C]/66 to-[#102A5C]/25" />
      <div className="absolute inset-x-0 bottom-0 h-1 bg-[#C7372F]" />
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-[#C9A13B]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9A13B]">{eyebrow}</span>
          </div>
          <h1 className="page-hero-title mt-5 text-4xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-6xl">
            {title}<span className="block text-[#C9A13B]">{highlight}</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">{description}</p>
        </div>
      </motion.div>
    </section>
  );
}
