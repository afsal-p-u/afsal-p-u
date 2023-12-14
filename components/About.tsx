import React, { useState } from "react";
import { InfoItem } from "@/components";
import { experienceData, educationData } from "@/utils/data";

const About = () => {
  const [selected, setSelected] = useState("experience");

  return (
    <div className="bg-black text-white max-sm:pt-10">
      <div className="container mx-auto h-screen flex gap-5 flex-col sm:flex-row">
        {/* about */}
        <div className="flex-1 rounded-e-lg flex justify-center flex-col slide-right max-sm:px-5">
          <div className="flex mb-5">
            <div 
              className="px-32 py-2 bg-blue-700 rounded-ss-full rounded-ee-full text-sm md:text-base sm:text-xl font-medium
              max-sm:px-16 max-md:px-20"
            >
              About Me
            </div>
          </div>
          <p className="sm:text-sm text-xs ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the
          </p>
        </div>

        {/* experience and eduacation */}
        <div className="flex-1 flex flex-col justify-center items-end max-sm:px-5">
          <div className="slide-left">
            <ul className="flex gap-5 mb-5 justify-end">
              <li
                className="cursor-pointer text-sm sm:text-base"
                onClick={() => setSelected("experience")}
              >
                Experience
                {selected === "experience" && (
                  <div className="w-full h-[3px] bg-blue-700 mt-1 slide-underline"></div>
                )}
              </li>
              <li
                className="cursor-pointer text-xs sm:text-sm md:text-base"
                onClick={() => setSelected("education")}
              >
                Education
                {selected === "education" && (
                  <div className="w-full h-[3px] bg-blue-700 mt-1 slide-underline"></div>
                )}
              </li>
            </ul>

            {/* item */}
            {selected === "education" ? (
              <div className="flex flex-col gap-2 slide-bottom">
                {educationData.map((item, i) => (
                  <InfoItem key={i} {...item} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col gap-2">
                {experienceData.map((item, i) => (
                  <div className="slide-bottom" key={i}>
                    <InfoItem {...item} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
