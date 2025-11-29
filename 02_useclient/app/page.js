"use client";
import React, { useState } from "react";

const page = () => {
  const [num, setNum] = useState(0);

  let plus = () => {
    setNum(num + 1);
  };
  return (
    <div className="text-center">
      <h2>Value of Num:{num}</h2>
      <button className="bg-red-600 p-1 rounded-md" onClick={plus}>
        Increment
      </button>
    </div>
  );
};

export default page;
