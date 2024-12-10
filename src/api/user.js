import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';


export const registerUser = async (userData) => {
    const response = await axios.post(`${API_URL}/identity/user/Register/register`, userData);
    return response.data;
};


export const loginUser = async (credentials) => {
    const response = await axios.post(`${API_URL}/identity/user/Login/login`, credentials);
    return response.data;
};


export const requestResetPassword = async (email) => {
    const response = await axios.post(`${API_URL}/identity/user/RequestPasswordReset/request-reset-password`, { email });
    return response.data;
};


export const resetPassword = async (email, newPassword) => {
    const response = await axios.post(`${API_URL}/identity/user/ResetPassword/reset-password`, {
        email,
        newPassword,
    });
    return response.data;
};


export const getUserProfile = async (email) => {
    const response = await axios.get(`${API_URL}identity/user/GetUserProfile/profile`, {
        params: { email },
    });
    return response.data;
};

export const getUsernameFromIdentity = async (userId) => {
    try {
        const response = await fetch(`${API_URL}/identity/user/GetUserProfileById/profile/${userId}`);
        console.log(`link ----- ${API_URL}/identity/user/GetUserProfileById/profile/${userId}`);
        const data = await response.json();
        return data.username;
    } catch (error) {
        console.error("Error fetching username:", error);
        return null;
    }
};

export const updateUserProfile = async (email, profileData) => {
    const response = await axios.put(
        `${API_URL}/user/UpdateUserProfile/profile`,
        profileData,
        { params: { email } }
    );
    return response.data;
};
