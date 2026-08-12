import { Link } from "react-router-dom";
import logo from "../../assets/images/cohhs-logo.png";

export default function Footer() {
  return (
    <footer className="border-t-8 border-[#F8F7F4] bg-[#071A3D] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-[1.3fr_0.7fr_1fr] lg:px-8">
        <div>
          <img src={logo} alt="Corridors Of Hope High School" className="mb-5 w-16" />
          <h2 className="text-xl font-bold">Corridors Of Hope</h2>
          <p className="mt-4 max-w-sm leading-7 text-white/70">Opening Corridors Of Life through academic excellence, discipline, character development and Christian values.</p>
          <p className="mt-5 text-sm font-semibold text-[#C9A13B]">Harare, Zimbabwe</p>
        </div>

        <div>
          <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-[#C9A13B]">Explore</h3>
          <nav aria-label="Footer navigation" className="flex flex-col gap-3 text-sm text-white/70 [&_a]:transition [&_a:hover]:text-white">
            <Link to="/about">About</Link>
            <Link to="/academics">Academics</Link>
            <Link to="/student-life">Student life</Link>
            <Link to="/gallery">Gallery</Link>
          </nav>
        </div>

        <div>
          <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-[#C9A13B]">School office</h3>
          <p className="text-sm text-white/70">Harare, Zimbabwe</p>
          <p className="mt-3 text-sm leading-6 text-white/70">Contact details and office hours are available directly from the school office.</p>
          <Link to="/contact" className="mt-5 inline-block text-sm font-semibold text-white transition hover:text-[#C9A13B]">Contact the school</Link>
        </div>
      </div>
      <div className="border-t border-white/15 py-6 text-center text-sm text-white/55">© {new Date().getFullYear()} Corridors Of Hope High School. All rights reserved.</div>
    </footer>
  );
}
