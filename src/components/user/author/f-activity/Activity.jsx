import React from 'react';

const Activity = () => {
    const posts = [];
    return (
        <div className="activity-section">
            <div className="acv-calendar">f</div>
            <div className="acv-posts">
                {posts.map((post, index) => (
                    <div className="post">
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Activity;