import React from "react";

const ServiceArea: React.FC = () => {
  const locations = [
    "White Plains",
    "New Rochelle",
    "Yonkers",
    "Mount Vernon",
    "Scarsdale",
    "Rye",
    "Port Chester",
    "Tarrytown",
    "Sleepy Hollow",
    "Dobbs Ferry",
    "Irvington",
    "Elmsford",
    "Harrison",
    "Larchmont",
    "Mamaroneck",
    "Pelham",
    "Stamford",
    "Greenwich",
    "Norwalk",
    "Danbury",
    "Newtown",
    "New Canaan",
    "Bridgeport",
    "Fairfield",
    "Westport",
    "Trumbull",
    "Shelton",
    "Easton",
    "Weston",
    "Ridgefield",
    "Somers",
    "Katonah",
    "North Salem",
    "Mahopac",
    "Cortlandt Manor",
    "Peekskill",
    "New Paltz",
    "Kingston",
    "Poughkeepsie",
    "Hyde Park",
  ];

  return (
    <div className="p-4 flex flex-col justify-between h-full">
      <div className="flex flex-col items-center mb-4">
        <h2 className="text-xl font-bold text-center">Our Service Area</h2>
        <h4 className="text-lg text-center mt-6">NG Effective Solutions</h4>
      </div>

      <div className="text-center mb-4">
        <h4 className="text-lg font-semibold">Our NY Service Area Includes:</h4>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {locations.map((location, index) => (
          <div
            key={index}
            className="p-2 rounded-md shadow-sm text-md"
            style={{ maxWidth: "150px" }} // Adjust as needed
          >
            {location}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceArea;
