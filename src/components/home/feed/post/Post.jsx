import React, {useState} from 'react';
import "./Post.css";
import likeIcon from "../../../../assets/icons/ui/like.png";
import commIcon from "../../../../assets/icons/ui/comm.png";
import saveIcon from "../../../../assets/icons/ui/save.png";
import shareIcon from "../../../../assets/icons/ui/share.png";
import reportIcon from "../../../../assets/icons/ui/issue.png";
import ReportElement from "../../../service/popups/report/ReportElement";



const Post = (props) => {
    const [reportPopup, setReportPopup] = useState(false);

    const handleReport = () => {
        setReportPopup(!reportPopup);
    }

    return (
        <div className="post">
            <div className="post-attribution">
                <div className="author-credential">
                    <img className="author-image" src={props.authorimg} alt="a"></img>
                    <div className="author-name">{props.author}</div>
                </div>
                <div className="post-date">{props.date}</div>
            </div>
            <div className="post-image-block">
                {props.image && (
                    <div className="with-image">
                        <div className="image-wrapper">
                            <img className="post-image" src={props.image} alt="post image" />
                        </div>
                        <div className="image-extra"></div>
                    </div>
                )}
            </div>
            <div className="post-info-block">
                <div className="main-info-block">
                    <a className="post-title-link">{props.title}</a>
                    <div className="post-description">{props.description}...</div>
                    <div className="open-post-button">More</div>
                </div>
                <div className="post-controls">
                    <div className="social-block">
                        <div className="likes-block">
                            <img className="like-img" src={likeIcon} alt="like"/>
                            <div className="like-counter">{props.likes}</div>
                        </div>
                        <div className="comments-block">
                            <img className="comm-img" src={commIcon} alt="comm"/>
                            <div className="comm-counter">{props.comments}</div>
                        </div>
                        <img className="save-block" src={saveIcon} alt="save"/>
                    </div>
                    <div className="control-block">
                        <img className="share-button" src={shareIcon} alt="share"/>
                        <img className="report-button"
                             src={reportIcon} alt="report"
                             onClick={handleReport}

                        />
                        <div className="options-button">•••</div>
                    </div>
                </div>
            </div>
            { reportPopup && (
                <ReportElement/>
            )}
        </div>
    );
};

export default Post;