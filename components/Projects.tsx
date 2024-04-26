import React from "react";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div className="bg-black text-white">
      <div className="container mx-auto h-screen max-sm:px-5">
        <div className="pt-10">
          <select
            name=""
            id=""
            className="bg-transparent  border-blue-700 border-[1px] outline-none px-7 py-1 rounded-sm text-sm font-medium"
          >
            <option
              value=""
              className="text-white bg-blue-500 text-sm font-medium"
            >
              MERN
            </option>
            <option
              value=""
              className="text-white bg-blue-500 text-sm font-medium"
            >
              NextJS
            </option>
            <option
              value=""
              className="text-white bg-blue-500 text-sm font-medium"
            >
              Asp.Net
            </option>
            <option
              value=""
              className="text-white bg-blue-500 text-sm font-medium"
            >
              UI/UX
            </option>
          </select>
        </div>
        <div className="flex pt-5 gap-5 flex-wrap">
          <ProjectItem />
        </div>
      </div>
    </div>
  );
};

export default Projects;
