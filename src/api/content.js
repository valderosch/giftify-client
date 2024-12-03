import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export const getGoals = async () => {
    const response = await axios.get(`${API_URL}/api/goals`);
    return response.data;
};

export const createGoal = async (goalData) => {
    const response = await axios.post(`${API_URL}/api/goals`, goalData);
    return response.data;
};

export const updateGoal = async (id, goalData) => {
    const response = await axios.put(`${API_URL}/api/goals/${id}`, goalData);
    return response.data;
};

export const deleteGoal = async (id) => {
    const response = await axios.delete(`${API_URL}/api/goals/${id}`);
    return response.data;
};

export const getPostById = async (id, userId) => {
    const response = await axios.get(`${API_URL}/api/posts/${id}`, {
        params: { userId },
    });
    return response.data;
};

export const updatePost = async (id, postData) => {
    const response = await axios.put(`${API_URL}/api/posts/${id}`, postData);
    return response.data;
};

export const deletePost = async (id) => {
    const response = await axios.delete(`${API_URL}/api/posts/${id}`);
    return response.data;
};

export const getPostsByEmail = async (email) => {
    const response = await axios.get(`${API_URL}/api/posts`, {
        params: { email },
    });
    return response.data;
};

export const createPost = async (email, postData) => {
    const response = await axios.post(`${API_URL}/api/posts`, postData, {
        params: { email },
    });
    return response.data;
};

export const likePost = async (id) => {
    const response = await axios.put(`${API_URL}/api/posts/${id}/like`);
    return response.data;
};
