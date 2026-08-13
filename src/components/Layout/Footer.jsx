import { Link } from "react-router-dom";
import logo from "../../assets/images/cohhs-logo.png";

export default function Footer() {
  return (
    <footer className="border-t-[6px] border-[#C9A13B] bg-[#0B2049] text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 md:grid-cols-[1.3fr_0.7fr_1fr] lg:px-8 lg:py-12">
        <div>
          <img src={logo} alt="Corridors Of Hope High School" className="mb-5 w-16 rounded-lg bg-white p-1" />
          <h2 className="text-xl font-bold tracking-tight">Corridors Of Hope</h2>
          <p className="mt-4 max-w-sm leading-7 text-white/85">Opening Corridors Of Life through academic excellence, discipline, character development and Christian values.</p>
          <p className="mt-5 border-l-2 border-[#C9A13B] pl-3 text-sm font-semibold text-[#FFF8E8]">Harare, Zimbabwe</p>
        </div>

        <div>
          <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-[#FFF8E8]">Explore</h3>
          <nav aria-label="Footer navigation" className="flex flex-col gap-3 text-sm text-white/85 [&_a]:transition [&_a:hover]:text-[#C9A13B] [&_a:focus-visible]:rounded-sm">
            <Link to="/about">About</Link>
            <Link to="/academics">Academics</Link>
            <Link to="/student-life">Student Life</Link>
            <Link to="/gallery">Gallery</Link>
          </nav>
        </div>

        <div>
          <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-[#FFF8E8]">School Office</h3>
          {/* Placeholder hours match the sample details on the contact page pending school confirmation. */}
          <p className="text-sm text-white/85">Harare, Zimbabwe</p>
          <p className="mt-3 text-sm leading-6 text-white/85">Mon–Fri, 7:30 AM–4:30 PM</p>
          <Link to="/contact" className="mt-5 inline-block text-sm font-semibold text-white underline decoration-[#C9A13B]/70 underline-offset-4 transition hover:text-[#C9A13B]">Contact The School</Link>
        </div>
      </div>
      <div className="border-t border-white/25 py-6 text-center text-sm text-white/75">© {new Date().getFullYear()} Corridors Of Hope High School. All rights reserved.</div>
    </footer>
  );
}
