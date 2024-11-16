import React, {useState} from 'react';
import "./ShareProfile.css";
import { FaFacebook, FaTwitter, FaTelegram, FaWhatsapp } from 'react-icons/fa';

const ShareProfile = ({toggle, profileUrl}) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(profileUrl);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    };

    return (
        <div className="share-popup" onClick={toggle}>
            <div className="popup-content" onClick={event => event.stopPropagation()}>
                <div className="popup-top">
                    <div className="popup-title">Share this profile</div>
                    <div className="popup-close" onClick={toggle}>×</div>
                </div>
                <div className="share-methods">
                    <div className="popup-links">
                        <a className="popup-link" href={`https://www.facebook.com/sharer/sharer.php?u=${profileUrl}`} target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="share-icon" />
                        </a>
                        <a className="popup-link" href={`https://twitter.com/intent/tweet?url=${profileUrl}`} target="_blank" rel="noopener noreferrer">
                            <FaTwitter className="share-icon" />
                        </a>
                        <a className="popup-link" href={`https://t.me/share/url?url=${profileUrl}`} target="_blank" rel="noopener noreferrer">
                            <FaTelegram className="share-icon" />
                        </a>
                        <a className="popup-link" href={`https://wa.me/?text=${profileUrl}`} target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp className="share-icon" />
                        </a>
                    </div>
                </div>
                <div className="popup-clipbar">
                    <input type="text" className="popup-link-bar" value={profileUrl} contentEditable={"false"}/>
                    <div className="popup-copy-button" onClick={handleCopy}>
                        {copied ? "Copied!" : "Copy"}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShareProfile;