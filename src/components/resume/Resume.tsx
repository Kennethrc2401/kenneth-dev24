import React from 'react'



type Props = {}

const ResumeComponent = (props: Props) => {
  return (
    <div className="resumeContainer">
        <div className="resumeHeader">
            <h1 className="myName">
                Kenneth Ramirez Castro
            </h1>
            <h3 className="myTitle">
                Software & Python Developer • Robotics Lab Assistant • Sports Photographer
            </h3>
            <p className="myContact">
              <a className="myPhone" href="tel:201-956-5731">(201) 956-5731</a> • <a className="myEmail" href="mailto:Kennethrc19@student.fdu.edu">Kennethrc19@student.fdu.edu</a>
              <br/>
              <a className="myLinkedIn" href="https://www.linkedin.com/in/kenneth-ramirez-castro-260a0598/" target='_blank'>LinkedIn</a>&nbsp; • &nbsp;
                <a className="myGithub" href="https://github.com/Kennethrc2401" target='_blank'>GitHub</a>&nbsp; • &nbsp;
                <a className='myPhotographyPortfolio' href="http://kenneth-s-photos.weebly.com/" target='_blank'>Kenneth&apos;s Photos</a>
            </p>
            <br/>
            <p className="myObjective markdownFormatted">
              Overachieving Computer Science Senior, proficient with programming languages used in software engineering (Python, JAVA,  
              CSS, C++, and some JavaScript and C#); Nao AI Humanoid Robotics; HTML5 and Front-End Web Development; Adobe Creative Cloud; 
              and professional sports photography. Completed IBM Accelerate Software Development Internship. Seeking career in Software 
              Engineering. Possess strong teamwork and training skills from work as a Lab Assistant and TA. Believe in initiative-taking 
              learning. Adept at quickly applying new skills. Fluent in Spanish and English. Active member of the Institute for Electrical 
              & Electronic Engineers (IEEE).
            </p>
        </div>
        <hr className='resumeDivider'/>
        <div className="resumeBody">

        </div>
    </div>
  )
}

export default ResumeComponent