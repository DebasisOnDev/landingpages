"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Bed, Bath } from "lucide-react";
import { cn } from "@/lib/utils";

interface Property {
  title: string;
  price: number;
  description: string;
  bedrooms: number;
  bathrooms: number;
  imageUrl: string;
}

const CarouselCard = ({
  title,
  price,
  description,
  bedrooms,
  bathrooms,
  imageUrl,
  position,
}: Property & { position: "left" | "center" | "right" | "hidden" }) => {
  const positionStyles = {
    left: "translate-x-[-75%] sm:translate-x-[-85%] rotate-[-8deg] opacity-30 scale-90 blur-[2px]",
    right:
      "translate-x-[75%] sm:translate-x-[85%] rotate-[8deg] opacity-30 scale-90 blur-[2px]",
    center: "translate-x-0 rotate-0 opacity-100 z-10 scale-100",
    hidden: "opacity-0 pointer-events-none scale-75",
  };

  const maskStyles = {
    left: "from-white via-white/80 to-transparent",
    right: "from-transparent via-white/80 to-white",
    center: "",
    hidden: "",
  };

  return (
    <div
      className={cn(
        "absolute top-0 left-0 right-0 transition-all duration-700 ease-out transform-gpu",
        positionStyles[position]
      )}
    >
      {(position === "left" || position === "right") && (
        <div
          className={cn(
            "absolute inset-0 z-20 bg-gradient-to-r",
            maskStyles[position]
          )}
        />
      )}

      <div className="mx-auto w-[90%] sm:w-[75%] max-w-3xl bg-white rounded-3xl overflow-hidden shadow transform-gpu will-change-transform">
        <div className="relative h-[200px] sm:h-[300px] lg:h-[350px] overflow-hidden">
          <img
            src={imageUrl || "/placeholder.svg?height=800&width=1200"}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-4 ">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-black">
                {title}
              </h2>
              <p className="text-sm sm:text-base text-slate-400  mt-2">
                {description}
              </p>
            </div>
            <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-black">
              ${price.toLocaleString()}
            </p>
          </div>

          <div className="flex gap-6 text-slate-400">
            <div className="flex items-center gap-2">
              <Bed className="w-5 h-5" />
              <span className="font-medium">{bedrooms} bedrooms</span>
            </div>
            <div className="flex items-center gap-2">
              <Bath className="w-5 h-5" />
              <span className="font-medium">{bathrooms} bathrooms</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function StyledCarousel({
  properties,
}: {
  properties: Property[];
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((current) => (current + 1) % properties.length);
  }, [properties.length]);

  const prevSlide = () => {
    setCurrentIndex((current) =>
      current === 0 ? properties.length - 1 : current - 1
    );
  };

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (isAutoPlaying) {
      intervalId = setInterval(nextSlide, 5000);
    }
    return () => clearInterval(intervalId);
  }, [isAutoPlaying, nextSlide]);

  const getPosition = (
    index: number
  ): "left" | "center" | "right" | "hidden" => {
    if (index === currentIndex) return "center";
    if (
      index === currentIndex - 1 ||
      (currentIndex === 0 && index === properties.length - 1)
    )
      return "left";
    if (
      index === currentIndex + 1 ||
      (currentIndex === properties.length - 1 && index === 0)
    )
      return "right";
    return "hidden";
  };

  return (
    <div
      className="relative w-full h-[425px] sm:h-[550px]  overflow-hidden px-4 py-8"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="relative w-full h-full">
        {properties.map((property, index) => (
          <CarouselCard
            key={index}
            {...property}
            position={getPosition(index)}
          />
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-8 top-1/2 -translate-y-1/2 bg-black/90 p-2 sm:p-3 rounded-full shadow-lg hover:bg-black text-white transition-colors z-30"
        aria-label="Previous"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-8 top-1/2 -translate-y-1/2 bg-black/90 p-2 sm:p-3 rounded-full shadow-lg hover:bg-black text-white transition-colors z-30"
        aria-label="Next"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {properties.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? "bg-slate-600 w-4" : "bg-slate-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
