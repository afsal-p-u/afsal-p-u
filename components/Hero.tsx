import React from 'react'

const Home = () => {
  return (
    <div className="bg-black">
      <div className="text-white container mx-auto h-screen flex items-center flex-col md:flex-row pt-10 md:pt-0">
        {/* basic info */}
        <div className="flex flex-col gap-1 slide-right flex-1">
          <p className="text-xl font-medium sm:text-3xl">
            {"<>"} Hi i&lsquo;<span className="text-blue-700">m</span> {"</>"}
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold text-blue-700">
            {"<"} <span className="text-white">AFSAL P U</span> {">"}
          </h1>
          <p className="text-start max-md:text-center text-lg sm:text-xl font-medium">
            {"<>"}{" "}
            <span className="text-white max-sm:text-sm">
              Full Stack <span className="text-blue-700">Developer</span>
            </span>{" "}
            {"</>"}
          </p>

          <div className="mt-4 sm:mt-7 flex justify-start max-md:justify-center">
            <button className="px-7 py-2 text-white text-sm bg-blue-700 rounded-md font-medium">
              Resume
            </button>
          </div>
        </div>
 
 
        {/* image box */}
        <div className="flex-1"></div>
      </div>
    </div>
  )
}

export default Home
