export default function Card({ children, className = "" }) {
  return (
    <div
      className={`rounded-3xl bg-white shadow-lg p-8 transition hover:-translate-y-2 hover:shadow-2xl ${className}`}
    >
      {children}
    </div>
  );
}