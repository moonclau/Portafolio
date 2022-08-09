import React, { useState } from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations';

export default function Resume(props) {
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0)
    const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({})

    let fadeInScreenHandler = (screen) => {
      if (screen.fadeInScreen !== props.id) return;
      Animations.animations.fadeInScreen(props.id);
    };
    const fadeInSubscription =
      ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
    const ResumeHeading =(props)=>{
      return (
      <div className='resume-heading'>
        <div className='resume-main-heading'>
          <div className='heading-bullet'>
            <span>{props.heading ? props.heading: ''}</span>
            {props.fromDate && props.toDate ?(
              <div className='heading-date'>
                {props.fromDate + "_" + props.toDate}
              </div>
            ) : (
              <div></div>
            )}
          </div>
              <div className='resume-sub-heading'>
                <span>{props.subHeading ? props.subHeading: ''}</span>
              </div>
              <div className='resume-heading-description'>
                <span>{props.description ? props.description: ""}</span>
              </div>
        </div>
      </div>
      )
    };
    const resumeBullet =[
      {label: "Education", logoSrc : "education.svg"},
      {label: "Word History", logoSrc: "work-history.svg"},
      {label: "Programming Skills", logoSrc: "programing-skills.svg"},
      {label: "Projects", logoSrc: "projects.svg"},
      {label: "Interests", logoSrc: "interests.svg"},
  ];
  const programmingSkillDetails =[
    {skill: "JavaScript", ratingPercentage: 85},
    {skill: "React Js", ratingPercentage: 85},
    {skill: "React Native", ratingPercentage: 85},
    {skill: "Express JS", ratingPercentage: 89},
    {skill: "Node Js", ratingPercentage: 70},
    {skill: "Mongo Db", ratingPercentage: 80},
    {skill: "Core Java", ratingPercentage: 80},
    {skill: "HTML", ratingPercentage: 40},
    {skill: "CSS", ratingPercentage: 50},
  ];
  const projectDetails = [
    {
    title: "Personal Portfolio Website",
    duration: { fromDate: "2020", toDate: "2021" },
    description: "A Personal Portfolio website to showcase all my details and projects at one place.",
    subHeading:"Technologies Used: React JS, Bootsrap",
    },
    {
    title :"Mobile E-shop",
    duration: { fromDate: "2020", toDate: "2021" },
    description: "An ecommerce application designed to sell products online wth payment system integration",
    subHeading:"Technologies Used: React Native, Mongo DB, Express Js, Node Js, Redux.",
    },
    {title: "Ecommerce Website",
    duration: { fromDate: "2020", toDate: "2021" },
    description: "Online ecommerce website for showcasing and selling products onlne with payment system integration, both Paypal and Stripe.",
    subHeading:"Technologies Used: Mongo DB, Epress Js, React Js, Node JS, Redux, Bootstrap.",
  }];

  const resumeDetails =[
    <div className='resume-screen-container' key="education">
      <ResumeHeading 
      heading={"Tecnologico de Toluca"}
      subHeading={"Ingenieria en tecnologias de la informacion y comunicacion"}
      fromDate={"2015"}
      toDate={"2021"}
      />
      <ResumeHeading 
      heading={"High School"}
      subHeading={"Programador"}
      fromDate={"2012"}
      toDate={"2015"}
      />
    </div>,
    <div className='resume-screen-container' key="work-experience">
         <ResumeHeading 
      heading={"Ehizeex Technoloy"}
      subHeading={"FULL STACK DEVELOPER INTERN"}
      fromDate={"2020"}
      toDate={"present"}
      />
      <div className='experience-description'>
        <span className='resume-description-text'>
        Currently working as MERN stack web and mobile developer and also an online instructor on udemy.
        </span>
      </div>
      <div className='experiece-description'>
        <span className='resume-description-text'>
        - Developed an ecommerce website for client with the dashboard for managing the products, managing reviews, users, payment etc.
        </span>
        <br/>
        <span className='resume-description-text'>
        - Integrated the web app with backend services to create new user onboarding application with dynamic form content. 
        </span>
        <br/>
        <span className='resume-description-text'>
        - I stretch my mental capacity to develope UI as per the given designs.
        </span>
      </div>,
      <div className='resume-screen-container programming-skills-container' key="programming-skills">
        {programmingSkillDetails.map((skill, index)=>(
          <div className='skill-parent' key={index}>
            <div className='heading-bullet'></div>
            <span>{skill.skill}</span>
            <div className='skill-percentage'>
              <div style={{width: skill.ratingPercentage + "%"}} 
              className="active-percentage"></div>
            </div>
          </div>
        ))}
      </div>,
      <div className='resume-screen-container' key="project">
        {projectDetails.map((projectDetails, index) =>{
          <ResumeHeading
          key={index}
          heading={projectDetails.title}
          subHeading={projectDetails.description}
          fromDate={projectDetails.duration.fromDate}
          toDate={projectDetails.duration.toDate}/>

        })}
      </div>,
      <div className='resume-screen-container' key="interests">
        <ResumeHeading
        heading="Teaching"
        description="Apart from being a tech enthusiast and a code writer, i also love to teach people what i know simply because i believe in sharing."
        />
        <ResumeHeading
        heading="Music"
        description="Listening to soothing music is something i can never compromise with, skimming through Spotify's pop songs charts is at times the best stress reliever that i can get my hands on."
        />
        <ResumeHeading
        heading="Competitive Gaming"
        description="I like to challenge my reflexes a lot while competing in football games, pushing the rank and having interactive gaming sessions excites me the most."
        />
      </div>
    </div>
  ];

  const handleCarousel =(index)=>{
    let offsetHeight=360;
    let newCarousalOffset ={ 
      style:{ transform: "translateY("+ index*offsetHeight * -1 +")"}
    };
    setCarousalOffSetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  }
  const getBullets= () =>{
    return resumeBullet.map((bullet, index)=>(
      <div onClick={() =>handleCarousel(index)}
      className={ index === selectedBulletIndex ? "bellet selected-bullet" : "bullet"}
      key={index}>
        
      </div>
    ))
  }

  const getResumeScreen =() =>{
    return(
      <div
      style={carousalOffSetStyle.style}
      className='resume-details-carousal'>
        {resumeDetails.map((resumeDetails)=> resumeDetails)}
      </div>
    )
  }
  return (
    <div resume-container screen-container id ={props.id || ""}>
      <div className='resume-content'>
        <ScreenHeading title={'Resume'} subHeading={'My Formal Bio Details'}/>
        <div className='resume-card'>
          <div className='resume-bullets'>
            <div className='bullet-container'>
              <div className='bullet-icons'></div>
              <div className='bullets'>{getBullets()}</div>
            </div>
          </div>
          <div className='resume-bullet-details'>{getResumeScreen()}</div>
        </div>
      </div>
    </div>
  )
}
