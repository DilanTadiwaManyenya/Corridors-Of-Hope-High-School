import { Link } from "react-router-dom";
import logo from "../../assets/images/cohhs-logo.png";


export default function Footer() {

  return (

    <footer className="bg-[#102A5C] text-white mt-20">

      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">


        {/* Brand */}

        <div>

          <img
            src={logo}
            alt="Corridors Of Hope"
            className="w-20 mb-5"
          />


          <h2 className="text-2xl font-bold">
            Corridors Of Hope
          </h2>


          <p className="mt-4 text-gray-300 leading-7">
            Opening Corridors Of Life through academic excellence,
            discipline, character development and Christian values.
          </p>

        </div>



        {/* Links */}

        <div>

          <h3 className="text-xl font-bold mb-5">
            Quick Links
          </h3>


          <div className="flex flex-col gap-3 text-gray-300">

            <Link to="/">
              Home
            </Link>

            <Link to="/about">
              About
            </Link>

            <Link to="/academics">
              Academics
            </Link>

            <Link to="/admissions">
              Admissions
            </Link>

          </div>

        </div>




        {/* Contact */}

        <div>

          <h3 className="text-xl font-bold mb-5">
            Contact
          </h3>


          <p className="text-gray-300">
            Harare, Zimbabwe
          </p>


          <p className="mt-3 text-gray-300">
            +263 XX XXX XXXX
          </p>


          <p className="mt-3 text-gray-300">
            info@corridorsofhope.co.zw
          </p>


        </div>


      </div>



      <div className="border-t border-white/20 py-6 text-center text-gray-300">

        © 2026 Corridors Of Hope High School. All rights reserved.

      </div>


    </footer>

  );
}