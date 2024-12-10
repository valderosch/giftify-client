import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export const setStatusOnline = async (userId) => {
    const response = await axios.post(`${API_URL}/chats/status/online`, {
        userId
    });
    return response.data;
};
export const setStatusOffline = async (userId) => {
    const response = await axios.post(`${API_URL}/chats/status/offline`, {
        userId
    });
    return response.data;
};
export const blockUser = async (userId) => {
    const response = await axios.post(`${API_URL}/chats/block`, {
        userId
    });
    return response.data;
};
export const unblockUser = async (userId) => {
    const response = await axios.post(`${API_URL}/chats/unblock`, {
        userId
    });
    return response.data;
};


export const createChat = async (chatData) => {
    try {
        const response = await axios.post(`${API_URL}/chats/chat/create`, chatData, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log('Chat created successfully:', response.data);
    } catch (error) {
        console.error('Error creating chat:', error);
    }
};

export const joinChat = async (chatId, userId) => {
    const response = await axios.post(`${API_URL}/chats/chat/join`, {
        chatId,
        userId
    });
    return response.data;
};
export const leaveChat = async (chatId, userId) => {
    const response = await axios.post(`${API_URL}/chats/chat/leave`, {
        userId,
        chatId
    });
    return response.data;
};
export const getChatsList = async (userId) => {
    const response = await axios.get(`${API_URL}/chats/chat/list`, {
        params: { userId }
    });
    return response.data;
};


export const sendMessageToChat = async (chatId, userId, message) => {
    try {
        console.log("Sending message with:", { chatId, userId, message });
        const response = await axios.post(`${API_URL}/chats/chat/message/send`, {
            chatId,
            senderId: userId,
            text: message,
        });
        return response.data;
    } catch (error) {
        console.error("Error sending message:", error);
    }
};
export const getMessagesHistory = async (chatId) => {
    try {
        const response = await axios.get(`${API_URL}/chats/message/history/${chatId}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching message history:", error);
        return [];
    }
};

export const getUserById = async (userId) => {
    try {
        const response = await fetch(`${API_URL}/identity/user/GetUserProfileById/profile/${userId}`);
        const data = await response.json();
        return data.username;
    } catch (error) {
        console.error("Error fetching username:", error);
        return null;
    }
};
