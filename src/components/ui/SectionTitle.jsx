import { motion } from "framer-motion";

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  center = false,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={center ? "text-center" : ""}
    >
      {eyebrow && (
        <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#C7372F]">
          {eyebrow}
        </span>
      )}

      <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-[#102A5C] lg:text-5xl">
        {title}
      </h2>

      {subtitle && (
        <p className={`mt-5 max-w-3xl leading-8 text-gray-600 ${center ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
