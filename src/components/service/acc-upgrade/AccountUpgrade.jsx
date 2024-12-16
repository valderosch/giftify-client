import React, {useState} from 'react';
import "./AccountUpgrade.css";
import {upgradeToAuthor} from "../../../api/user";
import pinicn from "../../../assets/icons/ui/pin.png";

const AccountUpgrade = ({ user }) => {
    const [formData, setFormData] = useState({
        shortDescription: "",
        longDescription: "",
        avatar: null,
        banner: null,
        accountTopic: "general",
        socialLinks: [],
    });

    const accountTopics = [
        { id: "music", label: "Music" },
        { id: "photo", label: "Photo" },
        { id: "games", label: "Games" },
        { id: "social", label: "Social Media" },
        { id: "programming", label: "Programming" },
        { id: "podcasts", label: "Podcasts" },
        { id: "lifestyle", label: "Lifestyle" },
        { id: "charity", label: "Charity" },
        { id: "writing", label: "Writing" },
        { id: "general", label: "General" },
        { id: "diy", label: "DIY" },
        { id: "education", label: "Education" },
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setFormData((prev) => ({ ...prev, [name]: files[0] }));
    };

    const handleTopicSelect = (topicId) => {
        setFormData((prev) => ({ ...prev, accountTopic: topicId }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const upgradeData = {
            shortDescription: formData.shortDescription,
            longDescription: formData.longDescription || "No description provided.",
            avatar: formData.avatar ? URL.createObjectURL(formData.avatar) : "",
            banner: formData.banner ? URL.createObjectURL(formData.banner) : "",
            accountTopic: formData.accountTopic,
            socialLinks: formData.socialLinks.length > 0
                ? formData.socialLinks
                : [{ platform: "yt", url: "https://www.youtube.com/@coursera" }],
        };

        try {
            console.log(upgradeData);
            console.log(user.id);
            const response = await upgradeToAuthor(user.id, upgradeData);
            alert("Account upgraded successfully!");
            console.log("Upgrade response:", response);
        } catch (error) {
            console.error("Error upgrading account:", error);
            alert("Failed to upgrade account.");
        }
    };

    return (
        <div className="upgrade">
            <div className="upgrade-content">
                <div className="upgrade-header">
                    <div className="header-title">Upgrade your account</div>
                    <div className="header-desrc">Upgrade your account status to discover new abilities</div>
                </div>
                <form onSubmit={handleSubmit} className="upgrade-form">
                    <label className="account-input">
                        Short Description:
                        <input
                            type="text"
                            name="shortDescription"
                            value={formData.shortDescription}
                            onChange={handleInputChange}
                            required
                            className="acc-input"
                        />
                    </label>
                    <label className="account-area">
                        Long Description:
                        <textarea
                            name="longDescription"
                            value={formData.longDescription}
                            onChange={handleInputChange}
                            className="acc-area"
                        />
                    </label>
                    <div className="account-images">
                        <label>
                            <img src={pinicn} alt="pin" className="input-img"/>
                            Avatar:
                            <input
                                type="file"
                                name="avatar"
                                accept="image/*"
                                onChange={handleFileChange}
                                className="file-input"
                            />
                        </label>
                        <label>
                            <img src={pinicn} alt="pin" className="input-img"/>
                            Banner:
                            <input
                                type="file"
                                name="banner"
                                accept="image/*"
                                onChange={handleFileChange}
                                className="file-input"
                            />
                        </label>
                    </div>
                    <div className="account-topic">
                        <p>Account Topic:</p>
                        <div className="topics-grid">
                            {accountTopics.map((topic) => (
                                <button
                                    type="button"
                                    key={topic.id}
                                    className={`topic-tile-c${formData.accountTopic === topic.id ? "selected" : ""}`}
                                    onClick={() => handleTopicSelect(topic.id)}
                                >
                                    {topic.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <label className="links">
                        <div className="social-links">
                            <div className="pp">
                                Social links:
                            </div>
                            <select
                                name="platform"
                                className="platform"
                                onChange={(e) => setFormData((prev) => ({ ...prev, currentPlatform: e.target.value }))}
                                defaultValue="yt"
                            >
                                <option value="yt">YouTube</option>
                                <option value="ds">Discord</option>
                                <option value="x">Telegram</option>
                                <option value="ot">Other</option>
                            </select>
                            <input
                                type="text"
                                placeholder="URL (e.g., https://example.com)"
                                className="linkkk"
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        e.preventDefault();
                                        const platform = formData.currentPlatform || "yt";
                                        const url = e.target.value.trim();

                                        if (url) {
                                            setFormData((prev) => ({
                                                ...prev,
                                                socialLinks: [
                                                    ...prev.socialLinks,
                                                    { platform, url },
                                                ],
                                            }));
                                            e.target.value = "";
                                        }
                                    }
                                }}
                            />
                        </div>
                        <div className="social-links-list">
                            {formData.socialLinks.map((link, index) => (
                                <div key={index} className="social-link-item">
                                    <span>{link.platform.toUpperCase()}: {link.url}</span>
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setFormData((prev) => ({
                                                ...prev,
                                                socialLinks: prev.socialLinks.filter((_, i) => i !== index),
                                            }))
                                        }
                                    >
                                        Remove
                                    </button>
                                </div>
                            ))}
                        </div>
                    </label>

                    <button type="submit" className="submit-button">
                        Upgrade to Author
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AccountUpgrade;