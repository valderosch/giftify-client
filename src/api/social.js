import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export const getUserCollections = async (userId) => {
    const response = await axios.get(`${API_URL}/api/Collections/${userId}`);
    return response.data;
};

export const createCollection = async (collectionData) => {
    const response = await axios.post(`${API_URL}/api/Collections`, collectionData);
    return response.data;
};

export const updateCollection = async (id, collectionData) => {
    const response = await axios.put(`${API_URL}/api/Collections/${id}`, collectionData);
    return response.data;
};

export const deleteCollection = async (id) => {
    const response = await axios.delete(`${API_URL}/api/Collections/${id}`);
    return response.data;
};


export const getCommentsByPostId = async (postId) => {
    const response = await axios.get(`${API_URL}/api/Comments/${postId}`);
    return response.data;
};

export const createComment = async (commentData) => {
    const response = await axios.post(`${API_URL}/api/Comments`, commentData);
    return response.data;
};

export const updateComment = async (id, commentData) => {
    const response = await axios.put(`${API_URL}/api/Comments/${id}`, commentData);
    return response.data;
};

export const deleteComment = async (id) => {
    const response = await axios.delete(`${API_URL}/api/Comments/${id}`);
    return response.data;
};


export const getUserNotifications = async (userId) => {
    const response = await axios.get(`${API_URL}/api/Notifications/${userId}`);
    return response.data;
};

export const createNotification = async (notificationData) => {
    const response = await axios.post(`${API_URL}/api/Notifications`, notificationData);
    return response.data;
};
