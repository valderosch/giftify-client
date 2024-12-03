import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export const getUserBalance = async (userId) => {
    const response = await axios.get(`${API_URL}/api/Balance/${userId}`);
    return response.data;
};

export const topUpBalance = async (userId, amount) => {
    const response = await axios.post(`${API_URL}/api/Balance/top-up`, {
        userId,
        amount,
    });
    return response.data;
};

export const withdrawBalance = async (userId, amount) => {
    const response = await axios.post(`${API_URL}/api/Balance/withdraw`, {
        userId,
        amount,
    });
    return response.data;
};