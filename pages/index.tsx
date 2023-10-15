import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-black">
      <div className="text-white container mx-auto h-screen flex items-center">
        {/* basic info */}
        <div className="flex flex-col gap-1 slide-right">
          <p className="text-3xl font-medium">
            {"<>"} Hi i&apos<span className="text-blue-700">m</span> {"</>"}
          </p>
          <h1 className="text-7xl font-semibold text-blue-700">
            {"<"} <span className="text-white">AFSAL P U</span> {">"}
          </h1>
          <p className="text-center text-xl font-medium">
            {"<>"}{" "}
            <span className="text-white">
              Full Stack <span className="text-blue-700">Developer</span>
            </span>{" "}
            {"</>"}
          </p>

          <div className="mt-7 flex justify-center">
            <button className="px-7 py-2 text-white text-sm bg-blue-700 rounded-md font-medium">
              Resume
            </button>
          </div>
        </div>
 
 
        {/* image box */}
        <div className=""></div>
      </div>
    </div>
  );
}
