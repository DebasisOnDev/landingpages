import React from "react";

const LandingTwoFooter = () => {
  return (
    <div className=" w-full h-full  px-28 font-montserrat  ">
      {" "}
      <footer className="bg-[#111111] text-gray-300 py-16 px-2 border-l-[0.25px] border-r-[0.25px] border-gray-100 border-opacity-20">
        <div className="w-48 h-[1px] bg-red-600 mb-12" />
        <div className="grid grid-cols-4 gap-8">
          <div className="col-span-2">
            <h2 className="text-2xl font-light mb-6">
              Logistics &<br />
              Transportation
              <br />
              Company
            </h2>

            <div className="flex gap-4 text-sm mb-8">
              <span>Newyork</span>
              <span>French</span>
              <span>Italy</span>
            </div>

            <div className="space-y-2">
              <p className="text-lg">(313) 555-0113</p>
              <a
                href="mailto:logi@mail.com"
                className="text-lg underline hover:text-white transition-colors"
              >
                logi@mail.com
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg mb-6">Company</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Team & Career
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Industry Solutions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg mb-6">Services</h3>
            <div className="flex justify-between gap-8">
              {/* Services List */}
              <ul className="space-y-4 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Air Freight
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Truck Freight
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Rail Freight
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Warehouse Logistics
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Ocean Freight
                  </a>
                </li>
              </ul>
              <div className="w-[1px] bg-red-600 h-full" />
            </div>
            <div className="w-48 h-[1px] bg-red-600 mt-12" />
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex justify-between items-center">
            <p className="text-xs text-gray-500">
              Copyright © 2025 Logistics | All rights reserved
            </p>
            <a
              href="#"
              className="text-xs text-gray-500 hover:text-white transition-colors"
            >
              Privacy & Policy
            </a>
          </div>
          <h1 className="text-[180px] font-medium font-montserrat text-center tracking-wider opacity-10 mt-8">
            LOGISTICS
          </h1>
        </div>
      </footer>
    </div>
  );
};

export default LandingTwoFooter;
