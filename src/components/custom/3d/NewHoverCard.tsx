// "use client";

// import { cn } from "@/lib/utils";
// import React, {
//   useEffect,
//   useRef,
//   useState,
//   useContext,
//   createContext,
// } from "react";

// const MouseEnterContext = createContext<
//   [boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined
// >(undefined);

// export const HoverCardContainer = ({
//   children,
//   className,
//   containerClassName,
// }: {
//   children?: React.ReactNode;
//   className?: string;
//   containerClassName?: string;
// }) => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [isMouseEntered, setIsMouseEntered] = useState(false);
//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     if (!containerRef.current) return;
//     const { left, top, width, height } =
//       containerRef.current.getBoundingClientRect();
//     const x = e.clientX;
//     const y = e.clientY;
//   };
// };

"use client";

import React, { useRef, useState } from "react";

const NewHoverCard = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isMouseEntered, setIsMouseEntered] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    setPosition({ x: e.clientX - left, y: e.clientY - top });
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    setIsMouseEntered(true);
    handleMouseMove(e);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    setIsMouseEntered(false);
  };

  return (
    <div
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="min-h-screen w-full relative bg-slate-200 overflow-hidden"
    >
      {isMouseEntered && (
        <div
          className="absolute w-5 h-5 bg-blue-400 shadow-[10px_0px_5px_rgb(155,155,788)] rounded-full pointer-events-none transition-all duration-75 ease-out"
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            transform: "translate(-50%, -50%)",
          }}
        />
      )}
    </div>
  );
};
export default NewHoverCard;
