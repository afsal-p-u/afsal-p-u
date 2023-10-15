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
        <div className="w-3 h-3 rounded-full bg-blue-700 mt-2"></div>
      </div>
      <div className="">
        <h3 className="text-xl font-medium">{name}</h3>
        <p className="text-slate-400 font-medium text-base">
          {organization}, <span className="text-sm">{location}</span>
        </p>
      </div>
      <div className="flex items-end">
        <p className="text-xs">{year}</p>
      </div>
    </div>
  );
};

export default InfoItem;
