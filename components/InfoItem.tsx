import React from "react";

interface InfoItemProps {
    name: string,
    location: string,
    year: string,
    organization: string
}

const InfoItem = ({ name, location, year, organization }: InfoItemProps) => {
  return (
    <div className="flex gap-3">
      <div className="">
        <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-blue-700 mt-2"></div>
      </div>
      <div className="">
        <h3 className="text-xs font-medium md:text-base sm:text-sm">{name}</h3>
        <p className="text-slate-400 font-medium text-xs md:text-sm">
          {organization}, <span className="text-xs md:text-sm">{location}</span>
        </p>
      </div>
      <div className="flex items-end">
        <p className="text-xs">{year}</p>
      </div>
    </div>
  );
};

export default InfoItem;
