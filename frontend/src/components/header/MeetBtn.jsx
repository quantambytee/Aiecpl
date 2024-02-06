import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import ApplyFormModal from '../formModal/ApplyFormModal';

const MeetBtn = () => {
    const [openApplyModal,setOpenApplyModal]= useState(false)
    const handleOpenModal=()=>{
        setOpenApplyModal(true)
    }
    const handleCloseModal=()=>{
        setOpenApplyModal(false)
    }
    return (
        <>
            <div className="menu-btn apply-btn">
                <Link to="/#" onClick={handleOpenModal} className="theme-btn apply-btn-theme">Apply Now</Link>
            </div>
            <ApplyFormModal openModal={openApplyModal} closeModal={handleCloseModal}/>
        </>
    );
};

export default MeetBtn;