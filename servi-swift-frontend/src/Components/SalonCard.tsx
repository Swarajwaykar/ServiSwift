// src/components/SalonCard.tsx
import React from "react";

const SalonCard = ({ salon }: { salon: any }) => {
  return (
    <div className="p-4 border rounded shadow hover:shadow-lg transition">
      <h3 className="text-xl font-semibold text-indigo-700">{salon.name}</h3>
      <p className="text-gray-600">{salon.city}</p>
      <p className="text-sm text-gray-500">{salon.address}</p>
    </div>
  );
};

export default SalonCard;
