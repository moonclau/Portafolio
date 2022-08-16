import React from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import OwsCarousal from 'react-owl-carousel'

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
//import "./Testimonial.css";
import "../Testimonial/Testimonial.css";
export default function Testimonial(props){

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  const options ={
    loop: true,
    margin:0,
    nav:true,
    animateIn:"bounceInRight",
    animateOut: "bounceOutRight",
    dots:true,
    autoplay:true,
    smartSpeed:1000,
    responsive:{
        0:{
            item:1,
        },
       768:{
           item:1,
       },
       1000:{
           item:3,
       }
    }}
    return(
        <div>
        {/* <ScreenHeading
            title={'Testimonial'}
            subHeading={'What My Client Say About Me'}
            />
            <section className="testimonial-section" id={props.id || ''}>
                <div className="container">
                    <div className="row">
                        <OwsCarousal className="owl-carousel" id="testimonial-carousel" {...options}
                        >
                        <div className="col-lg-12">
                            <div className="testi-item">
                                <div className="testi-comment">
                                    <p>
                                        <li className="fa fa-quote-left"></li>
                                       I patronized Ehizeex and when He delivered, I honestly
                                       fell in love with the project He is a very honest guy and
                                       he delivers ontime.
                                       <li className="fa fa-quote-left"></li>
                                    </p>
                                    <ul className="starts list-unstyled">
                                    <li>
                                            <li className="fa fa-star"/>
                                        </li>
                                        <li>
                                            <li className="fa fa-star"/>
                                        </li>
                                        <li>
                                            <li className="fa fa-star"/>
                                        </li>
                                        <li>
                                            <li className="fa fa-star"/>
                                        </li>
                                        <li>
                                            <li className="fa fa-star"/>
                                        </li>
                                    </ul>
                                </div>
                                <div className="client-info">
                                    <img src="img/testimonial/lady.png" alt="no internet connection"></img>
                                    <h5> Daisy Dominic</h5>
                                    <p>CEO inansGlobal</p>
                                </div>
                              </div>
                        </div>
                        <div className="col-lg-12">
                              <div className="testi-item">
                                <div className="testi-comment">
                                    <p>
                                        <li className="fa fa-quote-left"></li>
                                       I patronized Ehizeex and when He delivered, I honestly
                                       fell in love with the project He is a very honest guy and
                                       he delivers ontime.
                                       <li className="fa fa-quote-left"></li>
                                    </p>
                                    <ul className="starts list-unstyled">
                                    <li>
                                            <li className="fa fa-star"/>
                                        </li>
                                        <li>
                                            <li className="fa fa-star"/>
                                        </li>
                                        <li>
                                            <li className="fa fa-star"/>
                                        </li>
                                        <li>
                                            <li className="fa fa-star"/>
                                        </li>
                                        <li>
                                            <li className="fa fa-star"/>
                                        </li>
                                    </ul>
                                </div>
                                <div className="client-info">
                                    <img src="img/testimonial/lady.png" alt="no internet connection"></img>
                                    <h5> Daisy Dominic</h5>
                                    <p>CEO inansGlobal</p>
                                </div>
                              </div>
                        </div>
                        <div className="col-lg-12">
                              <div className="testi-item">
                                <div className="testi-comment">
                                    <p>
                                        <li className="fa fa-quote-left"></li>
                                       I patronized Ehizeex and when He delivered, I honestly
                                       fell in love with the project He is a very honest guy and
                                       he delivers ontime.
                                       <li className="fa fa-quote-left"></li>
                                    </p>
                                    <ul className="starts list-unstyled">
                                    <li>
                                            <li className="fa fa-star"/>
                                        </li>
                                        <li>
                                            <li className="fa fa-star"/>
                                        </li>
                                        <li>
                                            <li className="fa fa-star"/>
                                        </li>
                                        <li>
                                            <li className="fa fa-star"/>
                                        </li>
                                        <li>
                                            <li className="fa fa-star"/>
                                        </li>
                                    </ul>
                                </div>
                                <div className="client-info">
                                    <img src="img/testimonial/mike.png" alt="no internet connection"></img>
                                    <h5> Daisy Dominic</h5>
                                    <p>CEO inansGlobal</p>
                                </div>
                              </div>
                        </div>
                        <div className="col-lg-12">
                              <div className="testi-item">
                                <div className="testi-comment">
                                    <p>
                                        <li className="fa fa-quote-left"></li>
                                       I patronized Ehizeex and when He delivered, I honestly
                                       fell in love with the project He is a very honest guy and
                                       he delivers ontime.
                                       <li className="fa fa-quote-left"></li>
                                    </p>
                                    <ul className="starts list-unstyled">
                                    <li>
                                            <li className="fa fa-star"/>
                                        </li>
                                        <li>
                                            <li className="fa fa-star"/>
                                        </li>
                                        <li>
                                            <li className="fa fa-star"/>
                                        </li>
                                        <li>
                                            <li className="fa fa-star"/>
                                        </li>
                                        <li>
                                            <li className="fa fa-star"/>
                                        </li>
                                    </ul>
                                </div>
                                <div className="client-info">
                                    <img src="img/testimonial/man.png" alt="no internet connection"></img>
                                    <h5> Daisy Dominic</h5>
                                    <p>CEO inansGlobal</p>
                                </div>
                              </div>
                        </div>
                            
                        </OwsCarousal>
                    </div>
                </div>
            </section> */}
        </div>
    )
}