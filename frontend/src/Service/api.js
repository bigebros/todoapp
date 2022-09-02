import axios from 'axios';

const usersUrl = 'http://localhost:5000';

export const getUsers = async (query) => axios.get(`${usersUrl}${query}`);

export const getUser = async (id) => axios.get(`${usersUrl}/${id}`);

export const addUser = async (user) => axios.post(`${usersUrl}/add`, user);

export const deleteUser = async (id) => axios.delete(`${usersUrl}/${id}`);

export const editUser = async (id, user) =>
  axios.put(`${usersUrl}/${id}`, user);
