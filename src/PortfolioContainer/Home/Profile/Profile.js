import React from 'react';
import { ReactTypical } from '@deadcoder0904/react-typical';
import "./Profile.css";
export default function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
                         <a href='https://www.linkedin.com/in/claudia-itzel-cruz-hern%C3%A1ndez-85a8531b1/'>
                            <i className='fa fa-linkedin-square'></i>
                        </a>
                        <a href='https://github.com/moonclau'>
                            <i className='fa fa-git-square'></i>
                        </a>
                        </div>
                    </div>
                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            {" "}
                            Hello, I'M <span className='highlighted-text'>Claudia</span>
                        </span>
                    </div>
                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            {" "}
                            <h1>
                                            <ReactTypical
                                                steps={[
                                                    "Ethusiastic Dev 😁", 1000, "Full Stack Developer 💻", 2000]}
                                                loop={Infinity} />
                            </h1>

                        <span className='profile-role-tagline'>
                            Knack of building applications with front and back end operations.
                        </span>
                        </span>
                    </div>
                    <div className='profile-options'>
                        <button className='btn primary-btn'> Hire Me</button>
                            <a href='CV_ClaudiaCruz.pdf' download='Claudia CV.pdf'>
                                <button className='btn highlighted-btn'>Get Resume</button>
                            </a>
                        </div>
                    </div>
                    <div className='profile-picture'>
                        <div className='profile-picture-background'></div>
                    </div>
                </div>
            </div>
    )
}
