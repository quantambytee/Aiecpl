import React from 'react';
import { Fade } from 'react-reveal';

const SingleWorkProgressV1 = ({ progress }) => {
    const { icon, title, delay, step } = progress;

    return (
        <>
            <Fade bottom delay={delay}>
                <div className="work-progress-item ">
                    <div className="icon">
                        <i className={icon}></i>
                        <span className="progress-step">{step}</span>
                    </div>
                    <h3>{title}</h3>
                </div>
            </Fade>
        </>
    );
};

export default SingleWorkProgressV1;