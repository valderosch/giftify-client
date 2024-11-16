import React, { useState, useEffect } from 'react';
import "./Chats.css";
import publicImage from "../../assets/icons/ui/public.png";
import privateImage from "../../assets/icons/ui/private.png";
import recentImage from "../../assets/icons/ui/recent.png";
import chatImage from "../../assets/icons/mock/avatar3.jpg";
import chatImage2 from "../../assets/icons/mock/avatar1.png";
import pinImage2 from "../../assets/icons/ui/pin.png";




const Chats = () => {
    const [activeTab, setActiveTab] = useState('public');
    const [selectedChat, setSelectedChat] = useState(null);
    const [messageText, setMessageText] = useState('');
    const [messages, setMessages] = useState([]);

    const chats = [
        {chat_name: "Code Express", chat_type: "public", chat_icon: chatImage, last_message: "Have not found yet?"},
        {chat_name: "Memory page", chat_type: "public", chat_icon: chatImage, last_message: "Have not found yet?"},
        {chat_name: "Shrek3", chat_type: "public", chat_icon: chatImage2, last_message: "Have not found yet?"},
        {chat_name: "Confused", chat_type: "public", chat_icon: chatImage, last_message: "Have not found yet?"},
        {chat_name: "Asseto world", chat_type: "public", chat_icon: chatImage2, last_message: "Have not found yet?"},
        {chat_name: "linked", chat_type: "private", chat_icon: chatImage2, last_message: "Have not found yet?"},
        {chat_name: "cool ink", chat_type: "private", chat_icon: chatImage, last_message: "Have not found yet?"},
        {chat_name: "freegers", chat_type: "private", chat_icon: chatImage2, last_message: "Have not found yet?"},
        {chat_name: "Kyles birthday", chat_type: "public", chat_icon: chatImage, last_message: "Have not found yet?"},
        {chat_name: "Mates", chat_type: "public", chat_icon: chatImage2, last_message: "Have not found yet?"},
    ]

    const filteredChats = chats.filter(chat => chat.chat_type === activeTab);

    useEffect(() => {
        if (selectedChat) {

            const interval = setInterval(() => {
                simulateIncomingMessage();
            }, 5000);
            return () => clearInterval(interval);
        }
    }, [selectedChat]);

    const simulateIncomingMessage = () => {
        setMessages(prevMessages => [
            ...prevMessages,
            { sender: 'bot', text: `Some new texts from me at ${new Date().toLocaleTimeString()}` }
        ]);
    };

    const sendMessage = () => {
        if (messageText.trim() === '') return;


        setMessages(prevMessages => [
            ...prevMessages,
            { sender: 'user', text: messageText }
        ]);
        setMessageText('');
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
                         onClick={() => setActiveTab('recent')}>
                        <img className="tab-icon" src={recentImage} alt="icon" />
                        <div className="tab-title">Recent</div>
                    </div>
                </div>
                <div className="chats-list">
                    {filteredChats.map((chat, index) => (
                        <div
                            key={index}
                            className={`chat-item ${selectedChat === chat ? 'active' : ''}`}
                            onClick={() => setSelectedChat(chat)}
                        >
                            <img className="chat-icon" src={chat.chat_icon} alt="icon" />
                            <div className="chat-info">
                                <div className="chat-name">{chat.chat_name}</div>
                                <div className="chat-last-message">{chat.last_message}</div>
                            </div>
                            <div className="chat-controls">•••</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="chats-main">
                {selectedChat ? (
                    <div className="selected-chat-content">
                        <div className="chat-header">
                            <div className="chat-header-content">
                                <img className="selected-chat-img" src={selectedChat.chat_icon} alt="chat"/>
                                <div className="selected-chat-info">
                                    <div className="s-chat-name">
                                        {selectedChat.chat_name}
                                    </div>
                                    <div className="s-chat-stat">
                                        {selectedChat.chat_name.length > 7 ? "online" : "offline"}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="chat-content">
                            {messages.map((msg, index) => (
                                <div key={index} className={`chat-message ${msg.sender}`}>
                                    <div className="sender">{msg.sender}</div>
                                    <p className="msg-text"> {msg.text}</p>
                                </div>
                            ))}
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
                            <button className="chat-button" onClick={sendMessage}>Send</button>
                        </div>

                    </div>
                ) : (
                    <div className="no-chat">
                        <img className="no-chat-img" src={privateImage}/>
                        <div className="no-chat-title">
                            Select anyone to chat with
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Chats;