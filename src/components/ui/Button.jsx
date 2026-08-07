import { Link } from "react-router-dom";

export default function Button({
  to,
  children,
  variant = "primary",
}) {
  const styles = {
    primary:
      "bg-[#102A5C] text-white hover:bg-[#0d2147]",

    secondary:
      "border border-[#102A5C] text-[#102A5C] hover:bg-[#102A5C] hover:text-white",

    gold:
      "bg-[#C9A13B] text-white hover:bg-[#b68f31]",
  };

  return (
    <Link
      to={to}
      className={`inline-flex items-center justify-center px-8 py-4 rounded-full transition duration-300 ${styles[variant]}`}
    >
      {children}
    </Link>
  );
}