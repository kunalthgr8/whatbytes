import React from "react";
import Dream from "../../assets/dream.svg";

const Internship = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <img src={Dream} alt="Dream" className="w-1/2 h-auto mb-4" />
      <h1 className="text-3xl font-bold mb-4">
        Welcome to the Internship Page!
      </h1>
    </div>
  );
};

export default Internship;
