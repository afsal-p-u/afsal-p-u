import React, { useState } from "react";
import { Input } from ".";
import { InputFields } from "@/utils/contact";

const Contact = () => {
  const [inputs, setInputs] = useState(null);
  const [message, setMessage] = useState('')

  const handleInputs = (e: any) => {
    setInputs((prev: any) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  setTimeout(() => {
    setMessage('')
  }, 20000)

  const sentMail = async (e: any) => {
    e.preventDefault();

    const res = await fetch("/api/mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
    });

    if (!res.ok) {
      setMessage("Failed");
    } else {
      const data = await res.json();
      setMessage("Success");
      e.target.reset()
    }
  };

  return (
    <div className="bg-black text-white">
      <div className="container mx-auto h-screen flex items-center">
        <form
          className="flex flex-1 justify-between sm:flex-row flex-col md:gap-24 max-sm:px-5 max-sm:gap-5"
          onSubmit={sentMail}
        >
          <div className="flex gap-3 flex-col flex-1 slide-right">
            {InputFields.map((item, i) => (
              <Input key={i} {...item} onchange={handleInputs} />
            ))}
          </div>

          <div className="flex-1 flex gap-3 flex-col slide-right max-md:items-end max-sm:items-stretch">
            <Input
              placeholder="Subject"
              name="subject"
              label="Subject"
              type="text"
              onchange={handleInputs}
            />
            <div className="flex flex-col ">
              <label htmlFor="" className="text-sm mb-1 max-md:text-xs">
                Message
              </label>
              <textarea
                placeholder="Message"
                className="px-7 h-28 py-3 text-sm border-[1px] border-gray-700/50 outline-none rounded bg-transparent 
                focus:border-blue-700
                max-md:text-xs max-md:w-[300px] max-sm:w-full"
                autoComplete="off"
                required
                name="message"
                onChange={handleInputs}
              />
            </div>
            <button className="mt-5 py-2 text-sm max-sm:text-xs rounded bg-blue-700">
              Submit
            </button>
          </div>
        </form>
      </div>
      {message && (
        <div className="absolute right-5 bottom-10 text-sm px-7 py-1 border-[1px] border-blue-700 rounded-sm text-blue-700">
          {message}
        </div>
      )}
    </div>
  );
};

export default Contact;
