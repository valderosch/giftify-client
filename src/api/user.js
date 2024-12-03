import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';


export const registerUser = async (userData) => {
    const response = await axios.post(`${API_URL}/api/auth/register`, userData);
    return response.data;
};


export const loginUser = async (credentials) => {
    const response = await axios.post(`${API_URL}/api/auth/login`, credentials);
    return response.data;
};


export const requestResetPassword = async (email) => {
    const response = await axios.post(`${API_URL}/api/auth/request-reset-password`, { email });
    return response.data;
};


export const resetPassword = async (email, newPassword) => {
    const response = await axios.post(`${API_URL}/api/auth/reset-password`, {
        email,
        newPassword,
    });
    return response.data;
};


export const getUserProfile = async (email) => {
    const response = await axios.get(`${API_URL}/user/GetUserProfile/profile`, {
        params: { email },
    });
    return response.data;
};

export const updateUserProfile = async (email, profileData) => {
    const response = await axios.put(
        `${API_URL}/user/UpdateUserProfile/profile`,
        profileData,
        { params: { email } }
    );
    return response.data;
};
