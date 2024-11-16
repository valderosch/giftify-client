import React from 'react';
import "./Search.css";

const Search = () => {
    const categories = ["Інструменти і модифікації для ігор", "Відеоігри", "Поп-культура", "Комедія", "Рольові ігри", "Кримінальна документалістика", "Уроки малювання"];
    const recentVisits = [
        { name: "PandaSama", avatar: "avatar1.png" },
        { name: "Ashley Plays", avatar: "avatar2.png" },
        { name: "a.deep.indigo", avatar: "avatar3.png" },
        { name: "LUO_subarist", avatar: "avatar4.png" }
    ];
    const recommendations = [
        { name: "JimmyTurbo", description: "Recording new sound effects for Assetto Corsa", avatar: "avatar5.png" },
        { name: "Sonic Ether", description: "Creating Minecraft Shaders", avatar: "avatar6.png" },
        { name: "Velocity Driving", description: "Creating Velocity Driving Server", avatar: "avatar7.png" },
        { name: "Designio", description: "Creating Minecraft Resource Packs", avatar: "avatar8.png" },
        { name: "Octopus", description: "Pixel art for Octopus projects", avatar: "avatar9.png" },
        { name: "Fornax", description: "Creating pixeldrain", avatar: "avatar10.png" }
    ];

    return (
        <div className="search-page">
            <div className="search-wrapper">
                {/* Панель фільтрів */}
                <div className="filter-panel">
                    {categories.map((category, index) => (
                        <button key={index} className="filter-button">{category}</button>
                    ))}
                </div>

                {/* Розділ "Недавно відвідані" */}
                <div className="recently-visited">
                    <h3>Недавно відвідані</h3>
                    <div className="recent-list">
                        {recentVisits.map((visit, index) => (
                            <div key={index} className="recent-item">
                                <img src={visit.avatar} alt={visit.name} className="recent-avatar" />
                                <span>{visit.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Персональна підбірка */}
                <div className="recommendations">
                    <h3>Креатори: персональна підбірка</h3>
                    <div className="recommend-grid">
                        {recommendations.map((creator, index) => (
                            <div key={index} className="creator-card">
                                <img src={creator.avatar} alt={creator.name} className="creator-avatar" />
                                <div className="creator-info">
                                    <h4>{creator.name}</h4>
                                    <p>{creator.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;