import React from "react";

const GridBox = () => {
  return (
    <div className=" mt-4 mx-auto min-h-screen p-4 max-w-6xl rounded-lg bg-slate-200">
      <div className=" grid grid-cols-3 auto-rows-[200px] gap-4 w-full h-auto">
        <div className=" bg-white rounded-lg shadow-sm p-4 col-span-2">1</div>
        <div className=" bg-white rounded-lg shadow-sm p-4">2</div>
        <div className=" bg-white rounded-lg shadow-sm p-4">3</div>
        <div className=" bg-white rounded-lg shadow-sm p-4 col-span-2 row-span-2">
          4
        </div>
        <div className=" bg-white rounded-lg shadow-sm p-4">5</div>
        <div className=" bg-white rounded-lg shadow-sm p-4 col-span-2">6</div>
        <div className=" bg-white rounded-lg shadow-sm p-4">7</div>
        <div className=" bg-white rounded-lg shadow-sm p-4">8</div>
        <div className=" bg-white rounded-lg shadow-sm p-4 col-span-2">9</div>
      </div>
    </div>
  );
};

export default GridBox;
