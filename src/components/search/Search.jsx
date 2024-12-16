import React from 'react';
import "./Search.css";

const Search = () => {

    return (
        <div className="search-page">
            <div className="searchbar-area">
                <div className="searchbar">
                    <div className="srch-icon"></div>
                    <input type="text" className="srch-input"/>
                </div>
            </div>
            <div className="recommendations-area">
                <div className="for-you">
                    
                </div>
                <div className="categories"></div>
                <div className="popular-this-week"></div>
            </div>
        </div>
    );
};

export default Search;