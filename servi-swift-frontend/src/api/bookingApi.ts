import axios from "axios";

const BASE_URL = "http://localhost:5005/api/bookings"; // change port if needed

export const createBooking = (data: any) => axios.post(BASE_URL, data);

export const getBookingsByCustomer = (customerId: number) =>
  axios.get(`${BASE_URL}/customer/${customerId}`);

export const getBookingsBySalon = (salonId: number) =>
  axios.get(`${BASE_URL}/salon/${salonId}`);

export const getBookingsByDate = (salonId: number, date: string) =>
  axios.get(`${BASE_URL}/salon/${salonId}/date/${date}`);

export const getBookingById = (id: number) =>
  axios.get(`${BASE_URL}/${id}`);

export const updateBookingStatus = (id: number, status: string) =>
  axios.put(`${BASE_URL}/${id}/status?status=${status}`);
