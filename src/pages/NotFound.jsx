import React from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-center mt-20">404 - Not Found</h1>
      <a
        href="/"
        className="mt-10 inline-block bg-[#f47c31] group text-white px-6 py-3 rounded-lg hover:bg-[#f47c31]/80 transition-colors duration-300"
      >
        <button className="flex items-center gap-2 justify-center">
          <MdKeyboardArrowLeft  className="w-6 h-6 group-hover:-translate-x-2 transition-transform duration-300"/>
          Go to Home
        </button>
      </a>
    </div>
  );
}
