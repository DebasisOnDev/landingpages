import { ReactNode } from "react";

interface BlurrySeparatorProps {
  topComponent: ReactNode;
  bottomComponent: ReactNode;
  topBg?: string;
  bottomBg?: string;
  blendHeight?: number;
}

export default function BlurrySeparator({
  topComponent,
  bottomComponent,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  topBg = "bg-sky-50",
  bottomBg = "bg-white",
  blendHeight = 100,
}: BlurrySeparatorProps) {
  return (
    <div className="relative w-full">
      <div className={`relative w-full `}>
        {topComponent}
        <div
          className="absolute bottom-0 left-0 right-0 w-full"
          style={
            {
              height: `${blendHeight}px`,
              background: `linear-gradient(to bottom, transparent, var(--blend-bottom-color))`,
              "--blend-bottom-color":
                bottomBg === "bg-white" ? "white" : "rgb(var(--background))",
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
            } as any
          }
        />
      </div>

      {/* Bottom Section */}
      <div className={`relative w-full `}>{bottomComponent}</div>
    </div>
  );
}
