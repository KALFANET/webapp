import axios from 'axios';
import { API_URL } from '../config/apiConfig';

// טעינת רשימת משתמשים
export const fetchUsers = async () => {
    const response = await axios.get(`${API_URL}/api/users`);
    return response.data;
};

// העלאת קובץ
export const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append('file', file);

    const response = await axios.post(`${API_URL}/api/files/upload`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
    return response.data;
};