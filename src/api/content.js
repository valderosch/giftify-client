import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export const getGoals = async (id) => {
    const response = await axios.get(`${API_URL}/content/GetGoalsByAuthor/author/${id}`);
    return response.data;
};

export const createGoal = async (goalData) => {
    const response = await axios.post(`${API_URL}/content/CreateGoal`, goalData);
    return response.data;
};

export const updateGoal = async (id, goalData) => {
    const response = await axios.put(`${API_URL}/content/UpdateGoal/${id}`, goalData);
    return response.data;
};

export const deleteGoal = async (id) => {
    const response = await axios.delete(`${API_URL}/content/DeleteGoal/${id}`);
    return response.data;
};

export const getPostById = async (id, userId) => {
    const response = await axios.get(`${API_URL}/content/GetPostById/${id}`, {
        params: { userId },
    });
    return response.data;
};

export const updatePost = async (id, postData) => {
    const response = await axios.put(`${API_URL}/content/UpdatePost/${id}`, postData);
    return response.data;
};

export const deletePost = async (id) => {
    const response = await axios.delete(`${API_URL}/content/DeletePost/${id}`);
    return response.data;
};

    export const getPostsByEmail = async (email) => {
    const response = await axios.get(`${API_URL}/content/GetAllPosts`, {
        params: { email },
    });
    return response.data;
};

export const createPost = async (email, postData) => {
    const response = await axios.post(`${API_URL}/content/CreatePost`, postData, {
        params: { email },
    });
    return response.data;
};

export const likePost = async (id) => {
    const response = await axios.put(`${API_URL}/content/LikePost/${id}/like`);
    return response.data;
};
