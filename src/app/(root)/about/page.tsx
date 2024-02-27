"use client";

import React from 'react'
// import Navbar from '@/components/navigation/navbar'
import NavbarV2 from '@/components/navigation/NavbarV2';
import Footer from '@/components/footer'
import Image from 'next/image'
import "@/utils/stylesheets/AboutStyles.css"

type Props = {}

const About = (props: Props) => {
  return (
    <div>
      <div>
        {/* <Navbar /> */}
        <NavbarV2 />
      </div>

      <div 
        // className="mainAboutContainer bg-gray-100 dark:bg-gray-800 dark:text-gray-100 font-sans flex flex-col items-center space-y-10"
        className="mainAboutContainer"
      >
        <div className="portraitImageContainer">
          <Image 
            className="portraitImage" 
            src={require(`./profilePhoto/265.jpg`)}
            alt="Kenneth" 
            width={300}
            height={300}
          />
            
        </div>

        <div className="aboutTextContainer vscode-format">
          <h1 className="aboutName">Kenneth Ramirez Castro</h1>
          <h2 className="aboutPronouns">She/Her/They/Them</h2>
          <h2 className="aboutTitle">Software Engineer</h2>
          <h3 className="aboutLocation">New York City, NY</h3>
          <p className="aboutParagraph">
            Passionate Computer Science Senior specializing in 
            software engineering with a diverse skill set spanning 
            prominent programming languages including Python, Java, 
            CSS, and C++, with advanced proficiency in JavaScript and 
            C#. Experienced Python Developer intern at U.S. Army DEVCOM, 
            contributing to cutting-edge projects. Skilled in Nao AI 
            Humanoid Robotics, HTML5, and Front-End Web Development, 
            coupled with a keen eye for professional sports photography 
            showcased through my accomplishments.
            <br />
            <br />
            I am a dedicated professional who completed the IBM Accelerate 
            Software Development Internship, primed for a vibrant career in 
            Software Engineering. With a solid background as a Lab Assistant 
            and Teaching Assistant, I bring exceptional teamwork and 
            instructional capabilities to any project. Committed to continuous 
            learning and rapid skill assimilation, I thrive on challenging 
            opportunities that push my boundaries.
            <br />
            <br />
            Fluent in both Spanish and English, I am an active contributor to 
            the tech community through my membership in the Institute for 
            Electrical & Electronics Engineers (IEEE).
          </p>
        </div>
      </div>
      {/* Social Links */}
      <div className="socialLinksContainer flex justify-center space-x-4">
        
      </div>

        <div>
          <Footer />
        </div>
    </div>
  )
}

export default About