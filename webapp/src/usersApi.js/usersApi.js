import axios from "axios";
import Dashboard from "../pages/Dashboard";
import './styles/global.css';
const API_URL = "http://localhost:5000/api/users";

export const getUsers = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addUser = async (userData) => {
  const response = await axios.post(API_URL, userData);
  return response.data;
};

export const deleteUser = async (userId) => {
  const response = await axios.delete(`${API_URL}/${userId}`);
  return response.data;
};

function DashboardComponent() {
    const chartOptions = {
        options: { /* ... */ },
        series: [{ name: 'Uploaded Files', data: [10, 20, 15, 30] }],
    };
    // ...
}

export default DashboardComponent;

const path = require('path');

module.exports = {
  resolve: {
    fallback: {
      crypto: require.resolve('crypto-browserify')
    }
  },
  // Other configurations...
};