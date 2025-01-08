import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className=" max-w-6xl flex flex-col gap-16 mx-auto bg-slate-200 px-3 py-2 rounded min-h-screen">
      <div className=" flex items-start justify-between gap-4 p-3 ">
        <Button className=" shadow-[20px_0_40px_20px_rgb(140,69,255,.7)]">
          First
        </Button>
        <Button className=" shadow-[0px_20px_40px_20px_rgb(140,69,255,.7)]">
          First
        </Button>
        <Button className=" shadow-[20px_20px_30px_20px_rgb(140,69,255,.7)]">
          First
        </Button>
        <Button className=" shadow-[20px_20px_30px_40px_rgb(140,69,255,.7)]">
          First
        </Button>
        <Button className=" bg-slate-400 rounded-lg shadow-[0_10px_20px_rgba(0,0,0,0.19),0_6px_6px_rgba(0,0,0,0.23)]">
          First
        </Button>
      </div>
      <div className=" flex items-start justify-between gap-4 p-3 ">
        <Button className=" hover:scale-[1.01] shadow-[2px_0px_5px_-5px_rgb(140,69,255,.7),0px_0px_1px_0px_rgb(140,40,255,.7)] hover:shadow-[2px_12px_5px_-5px_rgb(140,69,255,.7),0px_2px_5px_0px_rgb(140,40,255,.7)] transition hover:z-20">
          Second
        </Button>
      </div>
      <div className=" bg-black h-40 flex gap-4 items-center">
        <Link
          href={"#"}
          className=" text-white  relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff]"
        >
          <div className=" absolute inset-0">
            <div className=" rounded-lg border border-white/15 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
            <div className=" rounded-lg border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]"></div>
            <div className=" absolute inset-0 shadow-[0_0_10px_rgb(140,69,255,.7)_inset] rounded-lg"></div>
          </div>
          <span>Third</span>
        </Link>
      </div>
      <div className=" flex gap-4 items-start justify-between">
        <div className=" h-36 w-64 rounded-lg border border-white bg-sky-400 [mask-image:linear-gradient(to_right,black,transparent)]"></div>
        <div className=" h-36 w-64 rounded-lg border border-white bg-purple-400 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
        <div className=" h-36 w-64 rounded-lg border border-white bg-orange-400 [mask-image:linear-gradient(to_top,black,transparent)]"></div>
        <div className=" h-36 w-64 rounded-lg border border-white bg-lime-400 [mask-image:linear-gradient(to_left,black,transparent)]"></div>
      </div>
      <div className=" flex gap-4 items-start justify-between">
        <div className=" h-36 w-64 rounded-lg border border-white bg-sky-400 [mask-image:radial-gradient(circle,black,transparent)]"></div>
        <div className=" h-40 w-40 rounded-lg border border-white bg-violet-400 [mask-image:radial-gradient(circle,black,transparent)]"></div>
        <div
          style={{
            maskImage: 'url("/demo.jpg?height=128&width=256")',
            maskSize: "contain",
            maskRepeat: "no-repeat",
            maskPosition: "center",
          }}
          className=" h-36 w-64 rounded-lg border border-white bg-purple-400"
        ></div>
        <div className=" h-36 w-64 rounded-lg border border-white bg-orange-400 [mask-image:linear-gradient(45deg,black_25%,transparent_25%),linear-gradient(-45deg,black_25%,transparent_25%),linear-gradient(45deg,transparent_75%,black_75%),linear-gradient(-45deg,transparent_75%,black_75%)]">
          vvv
        </div>
        <div className=" h-36 w-64 rounded-lg border border-white bg-lime-400 [mask-image:linear-gradient(to_left,black,transparent)]"></div>
        <div className="space-y-2">
          <h2 className="text-lg font-semibold">Animated Gradient Mask</h2>
        </div>
      </div>
      <div className=" flex gap-4 items-start justify-between">
        <div className="w-64 h-32 bg-black ">
          <div
            className="w-full h-full bg-white
        [mask-image:repeating-linear-gradient(45deg,#000_25%,transparent_25%,transparent_50%,#000_50%,#000_75%,transparent_75%,transparent_100%)] [mask-size:20px_20px] animate-[stripe-slide_5s_linear_infinite]"
          ></div>
        </div>
        <div className="w-64 h-32 bg-gradient-to-r from-green-500 to-yellow-500">
          <div className="w-full h-full bg-white [mask-image:repeating-linear-gradient(90deg,#000_50%,transparent_50%,transparent_100%)] [mask-size:20px_20px] animate-[stripe-slide-vertical_3s_linear_infinite]"></div>
        </div>
        <div className="w-64 h-32 bg-gradient-to-r from-red-500 to-blue-500">
          <div className="w-full h-full bg-white [mask-image:repeating-linear-gradient(90deg,#000_50%,transparent_50%)],[mask-image:repeating-linear-gradient(0deg,#000_50%,transparent_50%)] [mask-size:20px_20px] animate-[checker-slide_3s_linear_infinite]"></div>
        </div>
        <div className="w-64 h-32 bg-gradient-to-r from-indigo-500 to-pink-500">
          <div className="w-full h-full bg-white [mask-image:radial-gradient(circle,#000_10%,transparent_10%)] [mask-size:30px_30px] "></div>
        </div>
        <div className="w-64 h-32 bg-gradient-to-r from-teal-500 to-orange-500">
          <div className="w-full h-full bg-white [mask-image:repeating-linear-gradient(45deg,#000_10%,transparent_10%,transparent_20%,#000_20%,#000_30%,transparent_30%,transparent_40%)] [mask-size:40px_40px] animate-[wave-slide_6s_linear_infinite]"></div>
        </div>
      </div>
      <div className="space-y-12 p-6 bg-gray-100">
        {/* Crosshatch with Moving Dots */}
        <div className="space-y-2">
          <h3 className="font-bold text-lg">1. Crosshatch with Moving Dots</h3>
          <div className="w-72 h-40 bg-gradient-to-br from-purple-600 to-pink-600">
            <div
              className="w-full h-full bg-white 
            [mask-image:repeating-linear-gradient(45deg,#000_2px,transparent_2px,transparent_10px),repeating-linear-gradient(-45deg,#000_2px,transparent_2px,transparent_10px),radial-gradient(circle,#000_3px,transparent_3px)]
            [mask-size:20px_20px,20px_20px,20px_20px]
            [mask-position:0_0,0_0,0_0]
            animate-[complex-pattern_3s_linear_infinite]"
            />
          </div>
          <p className="text-sm text-gray-600">
            Combines crosshatching (using two opposing 45° gradients) with a dot
            pattern overlay.
          </p>
        </div>

        {/* Honeycomb Pattern */}
        <div className="space-y-2">
          <h3 className="font-bold text-lg">2. Animated Honeycomb</h3>
          <div className="w-72 h-40 bg-gradient-to-r from-yellow-400 to-orange-500">
            <div
              className="w-full h-full bg-white 
            [mask-image:repeating-linear-gradient(30deg,#000_2px,transparent_2px,transparent_10px),repeating-linear-gradient(-30deg,#000_2px,transparent_2px,transparent_10px),repeating-linear-gradient(90deg,#000_2px,transparent_2px,transparent_10px)]
            [mask-size:30px_30px]
            animate-[honeycomb-slide_4s_linear_infinite]"
            />
          </div>
          <p className="text-sm text-gray-600">
            Creates a honeycomb effect using three linear gradients at different
            angles.
          </p>
        </div>

        {/* Circuit Board Pattern */}
        <div className="space-y-2">
          <h3 className="font-bold text-lg">3. Animated Circuit Board</h3>
          <div className="w-72 h-40 bg-gradient-to-br from-cyan-500 to-blue-600">
            <div
              className="w-full h-full bg-white 
            [mask-image:linear-gradient(90deg,#000_2px,transparent_2px),linear-gradient(0deg,#000_2px,transparent_2px),radial-gradient(circle,#000_4px,transparent_4px),radial-gradient(circle,#000_2px,transparent_2px)]
            [mask-size:40px_40px,40px_40px,40px_40px,20px_20px]
            [mask-position:0_0,0_0,20px_20px,10px_10px]
            animate-[circuit-pulse_5s_ease-in-out_infinite]"
            />
          </div>
          <p className="text-sm text-gray-600">
            Simulates a circuit board with grid lines and connection points of
            different sizes.
          </p>
        </div>

        {/* Kaleidoscope Pattern */}
        <div className="space-y-2">
          <h3 className="font-bold text-lg">4. Kaleidoscope Effect</h3>
          <div className="w-72 h-40 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
            <div
              className="w-full h-full bg-white 
            [mask-image:repeating-conic-gradient(from_0deg,#000_0deg,transparent_30deg,#000_60deg),repeating-radial-gradient(circle,#000_2px,transparent_8px,#000_14px)]
            [mask-size:100%_100%,30px_30px]
            [mask-position:center,0_0]
            animate-[kaleidoscope_6s_linear_infinite]"
            />
          </div>
          <p className="text-sm text-gray-600">
            Creates a kaleidoscope effect using conic and radial gradients.
          </p>
        </div>

        {/* Maze Pattern */}
        <div className="space-y-2">
          <h3 className="font-bold text-lg">5. Animated Maze</h3>
          <div className="w-72 h-40 bg-gradient-to-br from-green-400 to-emerald-600">
            <div
              className="w-full h-full bg-white 
            [mask-image:linear-gradient(0deg,#000_5px,transparent_5px),linear-gradient(90deg,#000_5px,transparent_5px),radial-gradient(circle_at_center,transparent_5px,#000_5px,#000_10px,transparent_10px)]
            [mask-size:20px_20px,20px_20px,40px_40px]
            [mask-position:0_0,0_0,0_0]
            animate-[maze-pattern_4s_ease-in-out_infinite]"
            />
          </div>
          <p className="text-sm text-gray-600">
            Creates a maze-like pattern with intersecting lines and circles.
          </p>
        </div>
      </div>
      <div className=" flex gap-5 items-start justify-between ">
        <div className=" w-64 h-36 rounded-lg bg-blue-500 [mask-image:linear-gradient(to_left,black,transparent)]"></div>
        <div className=" w-64 h-36 rounded-lg bg-blue-500 [mask-image:radial-gradient(circle,black,transparent)]"></div>
        <div className=" w-64 h-36 rounded-lg bg-blue-500 [mask-image:linear-gradient(45deg,#000_25%,transparent_25%,transparent_50%,#000_50%,#000_75%,transparent_75%,transparent_100%)] [mask-size:25px_25px] animate-[stripe-slide_5s_linear_infinite] "></div>
        <div className=" w-64 h-36 rounded-lg bg-blue-500 [mask-image:repeating-linear-gradient(45deg,#000_25%,transparent_25%,transparent_50%,#000_50%,#000_75%,transparent_75%,transparent_100%)] [mask-size:25px_25px] animate-[stripe-slide_5s_linear_infinite] "></div>
      </div>
      <div className=" flex gap-5 items-start justify-between ">
        <div className=" w-64 h-36 rounded-lg bg-cyan-400 [mask-image:linear-gradient(90deg,#000_50%,transparent_50%,transparent_75%,#000_75%,#000_100%)] [mask-size:4px_4px] "></div>
        <div className=" w-64 h-36 rounded-lg bg-cyan-400 "></div>
        <div className=" w-64 h-36 rounded-lg bg-cyan-400 "></div>
        <div className=" w-64 h-36 rounded-lg bg-cyan-400 "></div>
      </div>
      <div className="space-y-12 p-6 bg-gray-50">
        {/* Circuit Board Breakdown */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Circuit Board Pattern Breakdown</h2>

          {/* Layer 1: Vertical Lines */}
          <div className="space-y-2">
            <h3 className="font-medium">Layer 1: Vertical Lines</h3>
            <div className="w-72 h-40 bg-gradient-to-br from-cyan-500 to-blue-600">
              <div
                className="w-full h-full bg-white 
              [mask-image:linear-gradient(90deg,#000_2px,transparent_2px)]
              [mask-size:40px_40px]"
              />
            </div>
          </div>

          {/* Layer 2: Horizontal Lines */}
          <div className="space-y-2">
            <h3 className="font-medium">
              Layer 2: Horizontal + Vertical Lines
            </h3>
            <div className="w-72 h-40 bg-gradient-to-br from-cyan-500 to-blue-600">
              <div
                className="w-full h-full bg-white 
              [mask-image:linear-gradient(90deg,#000_2px,transparent_2px),linear-gradient(0deg,#000_2px,transparent_2px)]
              [mask-size:40px_40px,40px_40px]"
              />
            </div>
          </div>

          {/* Layer 3: Large Dots */}
          <div className="space-y-2">
            <h3 className="font-medium">
              Layer 3: Adding Large Connection Points
            </h3>
            <div className="w-72 h-40 bg-gradient-to-br from-cyan-500 to-blue-600">
              <div
                className="w-full h-full bg-white 
              [mask-image:linear-gradient(90deg,#000_2px,transparent_2px),linear-gradient(0deg,#000_2px,transparent_2px),radial-gradient(circle,#000_4px,transparent_4px)]
              [mask-size:40px_40px,40px_40px,40px_40px]
              [mask-position:0_0,0_0,20px_20px]"
              />
            </div>
          </div>

          {/* Final Layer: Small Dots */}
          <div className="space-y-2">
            <h3 className="font-medium">
              Final Layer: Adding Small Connection Points
            </h3>
            <div className="w-72 h-40 bg-gradient-to-br from-cyan-500 to-blue-600">
              <div
                className="w-full h-full bg-white 
              [mask-image:linear-gradient(90deg,#000_2px,transparent_2px),linear-gradient(0deg,#000_2px,transparent_2px),radial-gradient(circle,#000_4px,transparent_4px),radial-gradient(circle,#000_2px,transparent_2px)]
              [mask-size:40px_40px,40px_40px,40px_40px,20px_20px]
              [mask-position:0_0,0_0,20px_20px,10px_10px]"
              />
            </div>
          </div>
        </div>

        {/* Advanced Mask Combinations */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Advanced Mask Combinations</h2>

          {/* Layered Geometric Pattern */}
          <div className="space-y-2">
            <h3 className="font-medium">1. Layered Geometric Pattern</h3>
            <div className="w-72 h-40 bg-gradient-to-br from-purple-500 to-pink-500">
              <div
                className="w-full h-full bg-white 
              [mask-image:repeating-linear-gradient(45deg,#000_2px,transparent_2px,transparent_10px),repeating-linear-gradient(-45deg,#000_2px,transparent_2px,transparent_10px),repeating-radial-gradient(circle_at_center,#000_0px,#000_3px,transparent_3px,transparent_12px)]
              [mask-size:20px_20px,20px_20px,24px_24px]
              [mask-position:0_0,0_0,12px_12px]
              animate-[geometric-pattern_4s_linear_infinite]"
              />
            </div>
          </div>

          {/* Concentric Pattern */}
          <div className="space-y-2">
            <h3 className="font-medium">
              2. Concentric Pattern with Multiple Radials
            </h3>
            <div className="w-72 h-40 bg-gradient-to-br from-amber-400 to-red-500">
              <div
                className="w-full h-full bg-white 
              [mask-image:radial-gradient(circle_at_center,transparent_10px,#000_10px,#000_12px,transparent_12px),radial-gradient(circle_at_center,transparent_20px,#000_20px,#000_22px,transparent_22px),radial-gradient(circle_at_center,transparent_30px,#000_30px,#000_32px,transparent_32px)]
              [mask-size:80px_80px,80px_80px,80px_80px]
              [mask-position:center,center,center]
              animate-[concentric-pulse_3s_ease-in-out_infinite]"
              />
            </div>
          </div>

          {/* Complex Wave Pattern */}
          <div className="space-y-2">
            <h3 className="font-medium">3. Complex Wave Pattern</h3>
            <div className="w-72 h-40 bg-gradient-to-br from-teal-400 to-emerald-600">
              <div
                className="w-full h-full bg-white 
              [mask-image:repeating-linear-gradient(45deg,#000_2px,transparent_2px,transparent_8px),repeating-linear-gradient(-45deg,#000_2px,transparent_2px,transparent_8px),repeating-radial-gradient(circle_at_top,#000_0px,#000_2px,transparent_2px,transparent_10px)]
              [mask-size:16px_16px,16px_16px,20px_20px]
              [mask-position:0_0,0_0,10px_0]
              animate-[wave-pattern_3s_linear_infinite]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" flex gap-5 items-start justify-between">
        <div className=" [mask-image:radial-gradient(circle,black,transparent)]">
          <div className=" w-64 h-36 rounded-lg bg-slate-100/70 [mask-image:linear-gradient(90deg,#000_3px,transparent_3px),linear-gradient(0deg,#000_3px,transparent_3px),radial-gradient(circle,#000_3px,transparent_3px)] [mask-size:40px_40px,40px_40px,40px_40px]  [mask-position:0_0,0_0,20px_20px]"></div>
        </div>
        <div className=" w-64 h-36 rounded-lg bg-red-400"></div>
        <div className=" w-64 h-36 rounded-lg bg-red-400"></div>
        <div className=" w-64 h-36 rounded-lg bg-red-400"></div>
      </div>
    </div>
  );
};

export default Hero;
