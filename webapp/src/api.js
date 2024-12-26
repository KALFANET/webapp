import serverConfig from './config/serverConfig.json';

const API_BASE_URL = `http://localhost:${serverConfig.backendPort}/api`;

export const fetchUsers = async () => {
    const response = await fetch(`${API_BASE_URL}/users`);
    if (!response.ok) {
        throw new Error(`Error fetching users: ${response.statusText}`);
    }
    return response.json();
};

export const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch(`${API_BASE_URL}/upload`, {
        method: 'POST',
        body: formData,
    });

    if (!response.ok) {
        throw new Error(`Error uploading file: ${response.statusText}`);
    }

    return response.json();
};