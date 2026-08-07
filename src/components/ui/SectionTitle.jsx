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
        <span className="text-[#C9A13B] uppercase tracking-[4px] font-semibold">
          {eyebrow}
        </span>
      )}

      <h2 className="mt-3 text-4xl lg:text-5xl font-bold text-[#102A5C]">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-5 text-gray-600 max-w-3xl leading-8">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}