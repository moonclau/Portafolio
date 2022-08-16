import React from 'react';
import { ReactTypical } from '@deadcoder0904/react-typical';
import imgBack from '../../../src/images/mailz.jpeg';
import load1 from '../../../src/images/load2.gif'; 
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';


export default function ContactMe(props) {
    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return;
        Animations.animations.fadeInScreen(props.id);
      };
      const fadeInSubscription =
        ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
    
    return (
    <div className='main-container' id={props.id || ''}>
        <ScreenHeading subHeading={"Lets Keep In Touch"} title={"Contact Me"}/>
        <div className='central-form'>
            <div className='col'>
            <h2>
                <ReactTypical
                    steps={[
                        " Get In Touch 😁", 1000,
                    ]}
                    loop={Infinity} />
            </h2>
            <div className=''>
                        <div className='colz-icon'>
                         <a href='https://www.linkedin.com/in/claudia-itzel-cruz-hern%C3%A1ndez-85a8531b1/'>
                            <i className='fa fa-linkedin-square'></i>
                        </a>
                        <a href='https://github.com/moonclau'>
                            <i className='fa fa-git-square'></i>
                        </a>
                        </div>
                    </div>
            </div>
        </div>
    </div>
  )
}
