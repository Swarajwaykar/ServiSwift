import axios from 'axios';

const BASE_URL = 'http://localhost:5001/users';

export const getAllUsers = () => axios.get(BASE_URL);
export const getUserById = (id: number) => axios.get(`${BASE_URL}/${id}`);
export const createUser = (user: any) => axios.post(BASE_URL, user);
export const updateUser = (id: number, user: any) => axios.put(`${BASE_URL}/${id}`, user);
export const deleteUser = (id: number) => axios.delete(`${BASE_URL}/${id}`);
