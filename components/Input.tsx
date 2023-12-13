import React from "react";

type InputTypes = {
  label: string,
  name: string,
  type: string,
  placeholder: string
}

const Input = ({ label, name, type, placeholder}: InputTypes) => {
  return (
    <div className="flex flex-col">
      <label htmlFor="" className="text-sm mb-1 max-md:text-xs">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className="px-7 py-3 text-sm border-[1px] border-gray-700/50 outline-none rounded bg-transparent 
        focus:border-blue-700
        max-md:text-xs max-md:w-[300px] max-sm:w-full"
      />
    </div>
  );
};

export default Input;
