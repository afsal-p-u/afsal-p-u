import React from "react";

interface InfoItemProps {
    name: string,
    location: string,
    year: string,
    organization: string
}

const InfoItem = ({ name, location, year, organization }: InfoItemProps) => {
  return (
    <>
    <div className="flex gap-4">
      <div className="">
        <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-blue-700 mt-2"></div>
      </div>
      <div className="">
        <h3 className="text-xs font-medium md:text-base sm:text-sm">
          {name}
        </h3>
        <p className="text-slate-400 font-medium text-xs">
          {organization}, <span className="text-xs md:text-xs">{location}</span>
        </p>
        <div className="flex items-end">
          <p className="text-xs">{year}</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default InfoItem;
