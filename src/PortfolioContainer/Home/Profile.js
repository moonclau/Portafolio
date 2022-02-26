import React from 'react'

export default function Profile() {
  return (
    <div className='profile-container'>
        <div className='profile-parent'>
            <div className='profile-details'>
                <div className='colz'>
                <a href='https://www.linkedin.com/in/claudia-itzel-cruz-hern%C3%A1ndez-85a8531b1/'>
                        <i className='fa fa-linkedin-square'></i>
                    </a>
                    <a href='https://github.com/moonclau'>
                        <i className='fa fa-git-square'></i>
                    </a>
                    <a href='#'>
                        <i className='fa fa-instagram'></i>
                    </a>
                    <a href='#'>
                        <i className='fa fa-youtube-square'></i>
                    </a>
                    <a href='#'>
                        <i className='fa fa-twitter'></i>
                    </a>
                </div>

                <div className='profile-details-name'>
                    <span className='primary-text'>
                        {""}
                    </span>
                </div>

            </div>
        </div>
    </div>
  )
}
