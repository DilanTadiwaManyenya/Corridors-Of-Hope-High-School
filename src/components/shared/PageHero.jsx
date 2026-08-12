import { motion } from "framer-motion";

export default function PageHero({ eyebrow, title, highlight, description, image, imageAlt, imagePosition = "center" }) {
  return (
    <section className="relative isolate overflow-hidden bg-[#102A5C] py-28 sm:py-32 lg:py-36">
      <img src={image} alt={imageAlt} style={{ objectPosition: imagePosition }} className="absolute inset-0 -z-20 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#071a3d]/88 via-[#102A5C]/72 to-[#102A5C]/38" />
      <div className="absolute inset-x-0 bottom-0 h-1 bg-[#C7372F]" />
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-[#C9A13B]" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#C9A13B]">{eyebrow}</span>
          </div>
          <h1 className="mt-6 text-5xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
            {title}<span className="block text-[#C9A13B]">{highlight}</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/80">{description}</p>
        </div>
      </motion.div>
    </section>
  );
}
