import axios from "axios";

const BASE_URL = "http://localhost:5002/service-offerings";

export const getAllOfferings = () => axios.get(BASE_URL);
export const getOfferingById = (id: number) => axios.get(`${BASE_URL}/${id}`);
export const getBySalonId = (salonId: number) => axios.get(`${BASE_URL}/salon/${salonId}`);
export const getByCategoryId = (categoryId: number) => axios.get(`${BASE_URL}/category/${categoryId}`);
export const createOffering = (data: any) => axios.post(BASE_URL, data);
export const updateOffering = (id: number, data: any) => axios.put(`${BASE_URL}/${id}`, data);
export const deleteOffering = (id: number) => axios.delete(`${BASE_URL}/${id}`);
