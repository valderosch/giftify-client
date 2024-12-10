import React, {useEffect, useState, useRef} from 'react';
import "./Chats.css";
import publicImage from "../../assets/icons/ui/public.png";
import privateImage from "../../assets/icons/ui/private.png";
import recentImage from "../../assets/icons/ui/recent.png";
import createImage from "../../assets/icons/navigator/CreateIcon.png";
import pattern1 from "../../assets/icons/mock/pattern1.jpg";
import pattern2 from "../../assets/icons/mock/pattern2.jpg";
import pattern4 from "../../assets/icons/mock/pattern4.jpg";
import pinImage2 from "../../assets/icons/ui/pin.png";
import {createChat, getChatsList, getMessagesHistory, getUserById, leaveChat, sendMessageToChat} from "../../api/chat";



const Chats = ({user}) => {
    const [activeTab, setActiveTab] = useState('public');
    const [selectedChat, setSelectedChat] = useState(null);
    const [messageText, setMessageText] = useState('');
    const [messages, setMessages] = useState([]);
    const [chats, setChats] = useState([]);
    const [showCreateChatForm, setShowCreateChatForm] = useState(false);
    const [chatName, setChatName] = useState('');
    const [participantEmails, setParticipantEmails] = useState('');
    const [userId] = useState(user.id);
    const messageEndRef = useRef(null);

    useEffect(() => {
        const fetchChats = async () => {
            const chatList = await getChatsList(userId);
            setChats(chatList);
        };
        fetchChats();
    }, [userId]);

    useEffect(() => {
        if (activeTab !== 'recent') {
            setShowCreateChatForm(false);
        }
    }, [activeTab]);

    useEffect(() => {
        const fetchMessages = async () => {
            if (selectedChat) {
                const chatMessages = await getMessagesHistory(selectedChat._id);
                const messagesWithUsernames = await Promise.all(chatMessages.map(async (msg) => {
                    const user = await getUserById(msg.senderId);
                    return { ...msg, senderUsername: user};
                }));
                setMessages(messagesWithUsernames);
            }
        };
        fetchMessages();
    }, [selectedChat]);

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const scrollToBottom = () => {
        messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const filteredChats = chats.filter(chat =>
        chat.members && (activeTab === 'public'
            ? chat.members.length > 2
            : chat.members.length <= 2)
    );

    const sendMessage = async () => {
        if (messageText.trim() === '') return;
        const newMessage = { senderId: userId, text: messageText, senderUsername: user.username };
        setMessages((prevMessages) => [...prevMessages, newMessage]);
        await sendMessageToChat(selectedChat._id, userId, messageText);
        const updatedMessages = await getMessagesHistory(selectedChat._id);
        const messagesWithUsernames = await Promise.all(updatedMessages.map(async (msg) => {
            const sender = await getUserById(msg.senderId);
            return { ...msg, senderUsername: sender };
        }));

        setMessages(messagesWithUsernames);
        setMessageText('');
    };

    const handleCreateChatFormSubmit = async () => {
        const participants = participantEmails.split(',').map(email => email.trim());
        if (!participants.includes(user.email)) {
            participants.push(user.email);
        }

        const requestBody = {
            name: chatName,
            members: participants
        };

        try {
            await createChat(requestBody);
            const chatList = await getChatsList(userId);
            setChats(chatList);
            setChatName('');
            setParticipantEmails('');
            setShowCreateChatForm(false);
        } catch (error) {
            console.error("Error creating chat:", error);
        }
    };

    const handleExitChat = async () => {
        if (selectedChat) {
            await leaveChat(selectedChat.chatId, userId);
            console.log("selectedChat:", selectedChat);
            setSelectedChat(null);
            localStorage.removeItem(`username_${selectedChat._id}`);
        }
    };

    const handleSelectChat = async (chat) => {
        const username = await getUserById(userId);
        console.log(`\n\nUSERNAME _ ${username}`);
        if (username) {
            localStorage.setItem(`username_${chat._id}`, username);
        }
        setSelectedChat(chat);
    };

    const images = [pattern1, pattern2, pattern4];

    const selectChatImage = (chatId) => {
        const digits = chatId.replace(/\D/g, '');
        if (digits.length === 0) {
            return pattern4;
        }
        const digitArray = digits.split('').map(Number);
        const randomDigit = digitArray[Math.floor(Math.random() * digitArray.length)];
        return images[randomDigit % images.length];
    };

    return (
        <div className="chats">
            <div className="chats-aside">
                <div className="chats-tabs">
                    <div className={`chats-tab ${activeTab === 'public' ? 'active' : ''}`}
                         onClick={() => setActiveTab('public')}>
                        <img className="tab-icon" src={publicImage} alt="icon" />
                        <div className="tab-title">Public</div>
                    </div>
                    <div className={`chats-tab ${activeTab === 'private' ? 'active' : ''}`}
                         onClick={() => setActiveTab('private')}>
                        <img className="tab-icon" src={privateImage} alt="icon" />
                        <div className="tab-title">Private</div>
                    </div>
                    <div className={`chats-tab ${activeTab === 'recent' ? 'active' : ''}`}
                         onClick={() => {
                             setActiveTab('recent');
                             setShowCreateChatForm(true);
                         }}>
                        <img className="tab-icon" src={recentImage} alt="icon" />
                        <div className="tab-title">New</div>
                    </div>
                </div>
                {showCreateChatForm ? (
                    <div className="create-chat-form">
                        <div className="create-title">Create new chat</div>
                        <div className="create-description">
                            1) Enter chat name.<br/>
                            2) Enter emails to add users to chat.<br/>
                        </div>
                        <input
                            type="text"
                            placeholder="Chat Name"
                            className="chat-name"
                            value={chatName}
                            onChange={(e) => setChatName(e.target.value)}
                        />
                        <textarea
                            placeholder="User Emails (comma-separated)"
                            className="chat-users"
                            value={participantEmails}
                            onChange={(e) => setParticipantEmails(e.target.value)}
                        />
                        <div onClick={handleCreateChatFormSubmit} className="create-chat-btn">Create Chat</div>
                    </div>
                ) : (
                    <div className="chats-list">
                        {filteredChats.map((chat, index) => (
                            <div
                                key={index}
                                className={`chat-item ${selectedChat === chat ? 'active' : ''}`}
                                onClick={() => handleSelectChat(chat)}
                            >
                                <img className="chat-icon" src={selectChatImage(chat._id)} alt="icon" />
                                <div className="chat-info">
                                    <div className="chat-name">
                                        {chat.name}
                                    </div>
                                    <div className="chat-last-message">{chat.last_message || 'No messages yet'}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className="chats-main">
                {selectedChat ? (
                    <div className="selected-chat-content">
                        <div className="chat-header">
                            <div className="chat-header-content">
                                <img className="selected-chat-img" src={selectChatImage(selectedChat._id)} alt="chat"/>
                                <div className="selected-chat-info">
                                    <div className="s-chat-name">
                                        {selectedChat.name}
                                        <span className="chat-user-count">
                                            {selectedChat.members.length} <img src={publicImage} alt="" className="users-img"/>
                                        </span>
                                    </div>
                                    <div className="s-chat-stat">
                                        {selectedChat.members.length > 2 ? 'Public' : 'Private'}
                                    </div>
                                </div>
                                <div className="chat-actions">
                                    <button onClick={handleExitChat}>invite</button>
                                    <button onClick={handleExitChat}>Leave</button>
                                </div>
                            </div>
                        </div>
                        <div className="chat-content">
                            {messages.map((msg, index) => (
                                <div key={index} className={`chat-message ${msg.senderId === userId ? 'my-message' : 'other-message'}`}>
                                    <div
                                        className="sender"
                                        style={{
                                            color: msg.senderId === userId ? '#99CBF9' : '#9eaeb9',
                                        }}
                                    >
                                        {msg.senderUsername}
                                    </div>
                                    <p className="msg-text">{msg.text}</p>
                                </div>
                            ))}
                            <div ref={messageEndRef} />
                        </div>
                        <div className="chat-control-area">
                            <div className="add-button">
                                <img className="add-file-button" src={pinImage2} alt="file"/>
                            </div>
                            <input
                                className="chat-input"
                                value={messageText}
                                onChange={(e) => setMessageText(e.target.value)}
                                placeholder="Type something..."
                            />
                            <div className="chat-button" onClick={sendMessage}>Send</div>
                        </div>
                    </div>
                ) : (
                    <div className="no-chat">
                        <img className="no-chat-img" src={privateImage} alt="no chat"/>
                        <div className="no-chat-title">Select anyone to chat with</div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Chats;