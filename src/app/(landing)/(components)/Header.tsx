import { Button } from "@/components/ui/button";
import { LucideOctagon, Menu } from "lucide-react";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className=" py-4 border-b   border-white/15 md:border-none sticky top-0 z-10">
      <div className=" absolute inset-0 backdrop-blur -z-10 md:hidden" />
      <div className=" container flex flex-col gap-4">
        <div className=" bg-neutral-800 text-white flex justify-between items-center relative md:border border-white/15 md:p-2.5 max-w-3xl mx-auto rounded-xl">
          <div className=" absolute inset-0 backdrop-blur -z-10 md:hidden"></div>
          <div>
            <div className=" border h-10 w-10 rounded-lg inline-flex justify-center items-center border-white/15">
              <LucideOctagon className=" h-8 w-8" />
            </div>
          </div>
          <div className=" hidden md:block">
            <nav className=" flex gap-8 text-sm">
              <a
                href="#"
                className=" text-white/70 hover:text-white transition"
              >
                About
              </a>
              <a
                href="#"
                className=" text-white/70 hover:text-white transition"
              >
                Features
              </a>
              <a
                href="#"
                className=" text-white/70 hover:text-white transition"
              >
                Testimonials
              </a>
              <a
                href="#"
                className=" text-white/70 hover:text-white transition"
              >
                Pricing
              </a>
            </nav>
          </div>
          <div className=" flex gap-4 items-center">
            <Link
              href={"#"}
              className=" relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff]"
            >
              <div className=" absolute inset-0">
                <div className=" rounded-lg border-collapse border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
                <div className=" rounded-lg border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]"></div>
                <div className=" absolute inset-0 shadow-[0_0_10px_rgb(140,69,255,.7)_inset] rounded-lg"></div>
              </div>
              <span>Sign in</span>
            </Link>
            <Menu className=" md:hidden" />
            <button className=" px-3.5 py-1 font-medium  text-black shadow-[0_10px_20px_rgb(140,69,255,.7),0_6px_6px_rgb(140,6,255,.7)] rounded-xl bg-gradient-to-b from-red-200 to-red-400">
              XXX
            </button>
            <button className=" px-3.5 py-1 font-medium shadow-[0px_0px_12px_#8c45ff] text-black rounded-xl bg-gradient-to-t from-orange-200 to-orange-400">
              YYY
            </button>
            <button className=" px-3.5 py-1 font-medium shadow-[0_4px_14px_0_rgba(0,118,255,0.39)] text-black rounded-xl bg-gradient-to-tr from-pink-300 to-pink-700">
              XXX
            </button>
            <Button className=" rounded-lg bg-gradient-to-l from-neutral-700 to-neutral-900 text-white shadow-[5px_10px_30px_15px_rgb(140,69,255,.7)]">
              XXX
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
