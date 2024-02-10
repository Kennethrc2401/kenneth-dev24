import React from 'react'
import { educationData } from '@/utils/educationData'
import { experienceData } from '@/utils/experienceData'
import { certificationData } from '@/utils/certificationData'
import { skillsData } from '@/utils/skillsData'
import '@/utils/stylesheets/resumeStyles.css'

type Props = {}

const ResumeComponent = (props: Props) => {
  return (
    <div className="resumeContainer">
      <div className="resumeHeader">
        <h1 className="myName">Kenneth Ramirez Castro</h1>
        <h3 className="myTitle">Software & Python Developer • Robotics Lab Assistant • Sports Photographer</h3>
        <p className="myContact">
          <a className="myPhone" href="tel:201-956-5731">(201) 956-5731</a> •{' '}
          <a className="myEmail" href="mailto:Kennethrc19@student.fdu.edu">Kennethrc19@student.fdu.edu</a>
          <br/>
          <a className="myLinkedIn" href="https://www.linkedin.com/in/kenneth-ramirez-castro-260a0598/" target='_blank' rel="noopener noreferrer">LinkedIn</a>&nbsp; • &nbsp;
          <a className="myGithub" href="https://github.com/Kennethrc2401" target='_blank' rel="noopener noreferrer">GitHub</a>&nbsp; • &nbsp;
          <a className='myPhotographyPortfolio' href="http://kenneth-s-photos.weebly.com/" target='_blank' rel="noopener noreferrer">Kenneth&apos;s Photos</a>
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
    <div className="vscode-format">
    <div className="resumeEducation">
        <h2 className="educationHeading">Education</h2>
        {/* Education Card - Dynamic*/}
        <div className="educationCard">
            {educationData.map((edu, index) => (
                <div key={index}>
                    <h3>{edu.school}</h3>
                    <p>{edu.department}</p>
                    <p>{edu.degree}</p>
                    <p>{edu.major}</p>
                    <p>{edu.minor}</p>
                    <p>{edu.currentGrade}</p>
                    <p>{edu.startDate} - {edu.graduation}</p>
                    <p>GPA: {edu.gpa}</p>
                    <p>{edu.location}</p>
                    <p>{edu.activities}</p>
                    <p>{edu.description}</p>
                </div>
            ))}
        </div>
    </div>
        
        </div>
            <hr className='resumeDivider'/>
            <div className="vscode-format">
            <div className="resumeExperience">
                <h2>Experience</h2>
                {/* Experience Card - Dynamic */}
                <div className="experienceCard">
                    {experienceData.map((exp, index) => (
                      <div key={index}>
                        <h3>{exp.title}</h3>
                        <p>{exp.company}</p>
                        <p>{exp.location}</p>
                        <p>{exp.date}</p>
                        <p>{exp.description}</p>
                        {/* <p className='experienceSkills'>{exp.skills}</p> */}
                        <div className="experienceSkills">
                          {exp.skills.map((skill, index) => (
                            <div key={index} className='skillBox'>{skill}</div>
                          ))}
                      </div>
                    </div>
                    ))}
          </div>
          </div>
                
        </div>
        <hr className='resumeDivider'/>
        <div className="vscode-format">
          <div className="resumeCertifications">
            <h2>Certifications</h2>
            {/* Certification Card - Dynamic */}
            <div className="certificationCard">
              {certificationData.map((cert, index) => (
                <div key={index}>
                  <h3>{cert.title}</h3>
                  <p>{cert.company}</p>
                  <p>{cert.date}</p>
                  <p>{cert.description}</p>
                  {/* <p>{cert.skills}</p> */}
                  <div className="certificationSkills">
                    {cert.skills.map((skill, index) => (
                      <div key={index} className='skillBox'>{skill}</div>
                    ))}
                </div>
              </div>
              ))}
      </div>
      </div>
    </div>
    <hr className='resumeDivider'/>
      <div className="resumeSkills">
        <h2 className='resumeSkillsHeading'>Skills</h2>
              {/* Each skill will be in a small rectangular shape */}
              {/* Shape fill color depends on level */}
              {/* Gray-ish for beginner
                  Orange-ish for intermediate
                  Green for advanced 
                  Purple-ish for Novice or Expert
              */}
              <div className="skillsContainer">
                {skillsData.map((skill, index) => (
                  <div key={index} className={`skillBox ${skill.level.toLocaleLowerCase() === 'beginner' ? 'skillLevelLow' : skill.level.toLocaleLowerCase() === 'intermediate' ? 'skillLevelMed' : skill.level.toLocaleLowerCase() === 'advanced' ? 'skillLevelHigh' : 'skillLevelExpert'}`}>
                    {skill.name}
                  </div>
                ))}
      </div>
  </div>
</div>
</div>
  
  )
}

export default ResumeComponent