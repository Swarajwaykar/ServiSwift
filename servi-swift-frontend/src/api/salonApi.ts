// src/api/salonApi.ts
import axios from "axios";
const BASE_URL = "http://localhost:5003/salons"; // Update port if needed

export const createSalon = (salonData: any) => axios.post(BASE_URL, salonData);
export const updateSalon = (id: number, salonData: any) => axios.put(`${BASE_URL}/${id}`, salonData);
export const getAllSalons = () => axios.get(BASE_URL);
export const getSalonById = (id: number) => axios.get(`${BASE_URL}/${id}`);
export const searchSalonByCity = (city: string) => axios.get(`${BASE_URL}/search?city=${city}`);
export const getSalonByOwnerId = (ownerId: number) => axios.get(`${BASE_URL}/owner/${ownerId}`);
