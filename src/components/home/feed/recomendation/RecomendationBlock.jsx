import React from 'react';
import "./RecomendationBlock.css";
import avatar1 from "../../../../assets/icons/mock/avatar1.png";
import avatar2 from "../../../../assets/icons/mock/avatar2.png";
import avatar3 from "../../../../assets/icons/mock/avatar3.jpg";
import mock1 from "../../../../assets/icons/mock/mock-img7.jpg";
import mock2 from "../../../../assets/icons/mock/mokc-img5.jpg";
import mock3 from "../../../../assets/icons/mock/mock-img6.jpg";



const RecommendationBlock = () => {
    const recommendations = [
        { avatar: avatar1, name: "windowser", tagline: "Windows hacker", splashimg: mock3},
        { avatar: avatar3, name: "streamline", tagline: "streamer with honour", splashimg: mock1 },
        { avatar: avatar2, name: "peta-paka", tagline: "Some marvell stuff",splashimg: mock2 },
        { avatar: avatar3, name: "streamline", tagline: "streamer with honour",splashimg: mock1 },
    ];

    return (
        <div className="recommendation-block">
            <div className="rec-title">Recommended Authors</div>
            <div className="rec-authors-list">
                {recommendations.map((author, index) => (
                    <div key={index} className="rec-author">
                        <div className="rec-image-block">
                            <img src={author.splashimg} alt="rec" className="rec-splash"/>
                            <img className="rec-author-image" src={author.avatar} alt={author.name} />
                        </div>
                        <div className="rec-author-name">{author.name}</div>
                        <div className="rec-author-headline">{author.tagline}</div>
                    </div>
                ))}
            </div>
            <div className="rec-buttons">
                <div className="carousel-btn">{`<`}</div>
                <div className="rec-show-more">Show more</div>
                <div className="carousel-btn">{`>`}</div>

            </div>
        </div>
    );
};

export default RecommendationBlock;
