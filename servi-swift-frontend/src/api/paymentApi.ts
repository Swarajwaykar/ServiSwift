// src/api/paymentApi.ts
import axios from "axios";

const BASE_URL = "http://localhost:5006/api/payments"; // update port if needed

export const createPayment = (paymentData: any) =>
  axios.post(BASE_URL, paymentData);

export const getPaymentById = (id: number) =>
  axios.get(`${BASE_URL}/${id}`);

export const proceedPayment = (id: number) =>
  axios.put(`${BASE_URL}/${id}/proceed`);
