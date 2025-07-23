// src/pages/SalonPage.tsx
import React, { useEffect, useState } from "react";
import {
  createSalon,
  getAllSalons,
  searchSalonByCity,
} from "../api/salonApi";
import SalonCard from "../Components/SalonCard";

const SalonPage = () => {
  const [salons, setSalons] = useState([]);
  const [citySearch, setCitySearch] = useState("");

  const fetchSalons = async () => {
    const res = await getAllSalons();
    setSalons(res.data);
  };

  const handleSearch = async () => {
    if (citySearch.trim() === "") {
      fetchSalons();
    } else {
      const res = await searchSalonByCity(citySearch);
      setSalons(res.data);
    }
  };

  useEffect(() => {
    fetchSalons();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Browse Salons</h2>

      {/* Search Bar */}
      <div className="flex gap-2 justify-center mb-8">
        <input
          type="text"
          placeholder="Search by city..."
          className="border rounded px-4 py-2 w-60"
          value={citySearch}
          onChange={(e) => setCitySearch(e.target.value)}
        />
        <button
          className="btn-primary"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      {/* Salon Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {salons.map((salon: any) => (
          <SalonCard key={salon.id} salon={salon} />
        ))}
      </div>
    </div>
  );
};

export default SalonPage;
