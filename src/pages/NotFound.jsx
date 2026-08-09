import { Link } from "react-router-dom";

export default function NotFound() {
  return <main className="grid min-h-[70vh] place-items-center bg-[#F8F7F3] px-6 pt-20 text-center"><div><p className="text-sm font-bold uppercase tracking-[0.25em] text-[#C9A13B]">404</p><h1 className="mt-4 text-4xl font-bold text-[#102A5C]">This page is not available.</h1><p className="mx-auto mt-4 max-w-md text-slate-600">The page may have moved or the address may be incorrect.</p><Link to="/" className="mt-8 inline-flex rounded-full bg-[#102A5C] px-6 py-3 font-semibold text-white transition hover:bg-[#C9A13B]">Return home</Link></div></main>;
}
