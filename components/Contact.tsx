import React from "react";
import { Input } from ".";
import { InputFields } from "@/utils/contact";

const Contact = () => {
  return (
    <div className="bg-black text-white max-sm:pt-10">
      <div className="container mx-auto h-screen flex items-center">
        <div className="flex flex-1 justify-between sm:flex-row flex-col md:gap-24 max-sm:px-5 max-sm:gap-5">
          <div className="flex gap-3 flex-col flex-1 slide-right">
            {InputFields.map((item, i) => (
              <Input key={i} {...item} />
            ))}
          </div>

          <div className="flex-1 flex gap-3 flex-col slide-right max-md:items-end max-sm:items-stretch">
            <Input placeholder="Subject" name="subject" label="Subject" type="text" />
            <div className="flex flex-col ">
              <label htmlFor="" className="text-sm mb-1 max-md:text-xs">
                Message
              </label>
              <textarea
                placeholder="Message"
                className="px-7 h-28 py-3 text-sm border-[1px] border-gray-700/50 outline-none rounded bg-transparent 
                focus:border-blue-700
                max-md:text-xs max-md:w-[300px] max-sm:w-full"
              />
            </div>
            <button className="mt-5 py-2 text-sm max-sm:text-xs rounded bg-blue-700">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
