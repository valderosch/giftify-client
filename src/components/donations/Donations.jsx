import React from 'react';
import "./Donations.css";
import Access from "../service/access/Access";

const Donations = ({user, role}) => {
    return (
        <div className="donations">
            {role === 'author'?
                <div className=""></div>
                :
                <Access/>
            }
        </div>
    );
};

export default Donations;