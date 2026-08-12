import { Link } from "react-router-dom";
import logo from "../../assets/images/cohhs-logo.png";

export default function Footer() {
  return (
    <footer className="border-t-[14px] border-[#F8F7F4] bg-[#C7372F] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-[1.3fr_0.7fr_1fr] lg:px-8">
        <div>
          <img src={logo} alt="Corridors Of Hope High School" className="mb-5 w-16 rounded-lg bg-white p-1" />
          <h2 className="text-xl font-bold tracking-tight">Corridors Of Hope</h2>
          <p className="mt-4 max-w-sm leading-7 text-white/85">Opening Corridors Of Life through academic excellence, discipline, character development and Christian values.</p>
          <p className="mt-5 border-l-2 border-[#C9A13B] pl-3 text-sm font-semibold text-[#FFF8E8]">Harare, Zimbabwe</p>
        </div>

        <div>
          <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-[#FFF8E8]">Explore</h3>
          <nav aria-label="Footer navigation" className="flex flex-col gap-3 text-sm text-white/85 [&_a]:transition [&_a:hover]:text-[#FFF8E8]">
            <Link to="/about">About</Link>
            <Link to="/academics">Academics</Link>
            <Link to="/student-life">Student Life</Link>
            <Link to="/gallery">Gallery</Link>
          </nav>
        </div>

        <div>
          <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-[#FFF8E8]">School Office</h3>
          <p className="text-sm text-white/85">Harare, Zimbabwe</p>
          <p className="mt-3 text-sm leading-6 text-white/85">Contact details and office hours are available directly from the school office.</p>
          <Link to="/contact" className="mt-5 inline-block text-sm font-semibold text-white transition hover:text-[#FFF8E8]">Contact The School</Link>
        </div>
      </div>
      <div className="border-t border-white/25 py-6 text-center text-sm text-white/75">© {new Date().getFullYear()} Corridors Of Hope High School. All rights reserved.</div>
    </footer>
  );
}
