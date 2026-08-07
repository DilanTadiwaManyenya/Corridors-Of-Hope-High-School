import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

// import logo from "../../assets/images/cohhs-logo.png"; 
export default function Footer() {
  return (
    <footer className="bg-[#0B1F45] text-white">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-4 gap-12">

        {/* School */}
        <div>

          <div className="flex items-center gap-4">

            {/* <img
              src={logo}
              alt="Corridors Of Hope High School"
              className="w-16 h-16 object-contain"
            /> */}

            <div>
              <h3 className="text-xl font-bold">
                Corridors Of Hope
              </h3>

              <p className="text-sm text-gray-300">
                Opening Corridors Of Life
              </p>
            </div>

          </div>

          <p className="mt-6 leading-8 text-gray-300">
            Empowering young people through academic excellence,
            Christian values, discipline, leadership and innovation.
          </p>

          <div className="flex gap-4 mt-8">

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#C9A13B] flex items-center justify-center transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#C9A13B] flex items-center justify-center transition"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#C9A13B] flex items-center justify-center transition"
            >
              <FaLinkedinIn />
            </a>

          </div>

        </div>

        {/* Quick Links */}
        <div>

          <h4 className="text-xl font-semibold mb-6">
            Quick Links
          </h4>

          <ul className="space-y-4">

            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/academics">Academics</Link></li>
            <li><Link to="/admissions">Admissions</Link></li>
            <li><Link to="/contact">Contact</Link></li>

          </ul>

        </div>

        {/* Contact */}
        <div>

          <h4 className="text-xl font-semibold mb-6">
            Contact
          </h4>

          <div className="space-y-5">

            <div className="flex gap-4">
              <FaMapMarkerAlt className="mt-1 text-[#C9A13B]" />
              <span>Harare, Zimbabwe</span>
            </div>

            <div className="flex gap-4">
              <FaPhoneAlt className="mt-1 text-[#C9A13B]" />
              <span>+263 XX XXX XXXX</span>
            </div>

            <div className="flex gap-4">
              <FaEnvelope className="mt-1 text-[#C9A13B]" />
              <span>info@corridorsofhope.co.zw</span>
            </div>

          </div>

        </div>

        {/* CTA */}
        <div>

          <h4 className="text-xl font-semibold">
            Join Our School
          </h4>

          <p className="mt-5 text-gray-300 leading-8">
            Give your child an education that builds knowledge,
            confidence and character.
          </p>

          <Link
            to="/admissions"
            className="
              inline-block
              mt-8
              bg-[#C9A13B]
              hover:bg-[#b88f28]
              px-8
              py-4
              rounded-full
              font-semibold
              transition
            "
          >
            Apply Now
          </Link>

        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Corridors Of Hope High School. All rights reserved.
          </p>

          <a
            href="#top"
            className="text-[#C9A13B] hover:text-white transition"
          >
            Back to Top ↑
          </a>

        </div>

      </div>

    </footer>
  );
}