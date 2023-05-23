import React from "react";
import { CiSearch } from "react-icons/ci";

export default function SearchCustom() {
  return (
    <div className="mt-3 mb-6 relative">
      <input
        placeholder="Buscar por número de patente"
        className="text-gray-600 bg-secondary focus:outline-none focus:border focus:border-blue-500 font-normal lg:w-[35%] w-full h-10 flex items-center pl-[36px] text-sm border-gray-300 rounded border"
      />
      <CiSearch
        className="absolute text-gray-600 top-[11px] left-3"
        size={18}
      />
    </div>
  );
}
