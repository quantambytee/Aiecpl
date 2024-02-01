import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const MeetBtn = () => {
    return (
        <>
            <div className="menu-btn apply-btn">
                <Link to="/contact#" className="theme-btn apply-btn-theme">Apply Now</Link>
            </div>
        </>
    );
};

export default MeetBtn;