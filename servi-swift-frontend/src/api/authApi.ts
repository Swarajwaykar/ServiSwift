// src/api/authApi.ts
import axios from "axios";

const BASE_URL = "http://localhost:5009/api/auth";

export const login = (data: { email: string; password: string }) =>
  axios.post(`${BASE_URL}/login`, data);

export const register = (data: { name: string; email: string; password: string }) =>
  axios.post(`${BASE_URL}/register`, data);
