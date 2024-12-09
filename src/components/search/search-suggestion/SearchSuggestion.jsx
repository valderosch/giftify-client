import React from 'react';

const SearchSuggestion = ({uer}) => {
    return (
        <div className="suggestion">
            <div className="sug-icon">
                <img src="" alt="suggestion" className="img-sug-img"/>
            </div>
            <div className="sug-body">
                <div className="sug-naming">{user.username}</div>
                <div className="sug-info">
                    <div className="sug-subs">{user.subs_count}</div>
                    <div className="sug-posts">{user.posts_count}</div>
                </div>
            </div>
        </div>
    );
};

export default SearchSuggestion;