import React from 'react';
import { Fade } from 'react-reveal';

const SingleWorkProgressV5 = ({ progress }) => {
    const { icon, number, title, text, delay } = progress

    return (
        <>
            <Fade className="fadeInUp" delay={delay}>
                <div className="work-progress-item-five">
                    <div className="icon-number">
                        <div className="icon">
                            <img src={`/images/work-progress/${icon}`} alt="Icon" />
                        </div>
                        <span className="number">{number}</span>
                    </div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                </div>
            </Fade>
        </>
    );
};

export default SingleWorkProgressV5;