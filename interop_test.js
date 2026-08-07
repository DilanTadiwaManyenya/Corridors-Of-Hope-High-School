import CountUp from "react-countup";
import { motion } from "framer-motion";

console.log("CountUp typeof:", typeof CountUp);
console.log("CountUp.name:", CountUp && CountUp.name);
console.log("CountUp has .default:", CountUp && typeof CountUp.default);
console.log("motion typeof:", typeof motion);
console.log("motion.div typeof:", motion && typeof motion.div);
console.log("motion keys:", motion ? Object.keys(motion).slice(0, 6) : null);
