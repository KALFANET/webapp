import axios from "axios";

const API_URL = "http://localhost:5000/api/users";

// פונקציה לקבלת כל המשתמשים
export const getUsers = async (token) => {
  const response = await axios.get(API_URL, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

// פונקציה להוספת משתמש חדש
export const addUser = async (userData, token) => {
  const response = await axios.post(API_URL, userData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

// פונקציה למחיקת משתמש
export const deleteUser = async (userId, token) => {
  const response = await axios.delete(`${API_URL}/${userId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};