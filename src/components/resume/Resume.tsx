"use client"

import React from 'react'
import { educationData } from '@/utils/educationData'
import { experienceData } from '@/utils/experienceData'
import { certificationData } from '@/utils/certificationData'
import { skillsData } from '@/utils/skillsData'
import '@/utils/stylesheets/resumeStyles.css'
import SocialIconsComponent from '../socialIcons/SocialIcons'

type Props = {}

// Create a function that allows the keys in the legend
// to highlighting (using css) all the skills that have that skill level
// upon hovering over that legend key.
// This function will be called in the legend divs.

const onSkillKeyHover = (skillLevel: string) => { 
  const skillBoxes = document.querySelectorAll('.skillBox')
  skillBoxes.forEach((skillBox) => {
    if (skillBox.classList.contains(`skillLevel${skillLevel}`)) {
      skillBox.classList.add('highlightSkill')
    }
  })
  const skillLegend = document.querySelector('.skillLegend')
  skillLegend?.addEventListener('mouseleave', () => {
    skillBoxes.forEach((skillBox) => {
      skillBox.classList.remove('highlightSkill')
    })
  })
}

// Reset the highlighting of the skills when the mouse leaves the skills container.
// This function will be called in the skillsContainer div.

const onSkillsContainerLeave = () => {
  const skillBoxes = document.querySelectorAll('.skillBox')
  skillBoxes.forEach((skillBox) => {
    skillBox.classList.remove('highlightSkill')
  })
}

const ResumeComponent = (props: Props) => {
  return (
    <div className="resumeContainer">
      <div className="resumeHeader">
        <h1 className="myName">
          Sophia Amanda Ramirez
        </h1>
        <div className="myPronouns">
          <p>She/Her/Hers</p>
        </div>
        <h3 className="myTitle">Software & Python Developer • Robotics Lab Assistant • Sports Photographer</h3>
        <p className="myContact">
          <SocialIconsComponent />
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
        <h2 className="educationSectionHeading vscode-format">Education</h2>
        {/* Education Card - Dynamic*/}
        <div className="educationCard">
            {educationData.map((edu, index) => (
                <div key={index}>
                    <h3>{edu.school}</h3>
                    <p>{edu.location}</p>
                    <p>{edu.department}</p>
                    <p>{`Degree: ${edu.degree}`}</p>
                    <p>{`Major: ${edu.major}`}</p>
                    <p>{`Minor: ${edu.minor}`}</p>
                    <p>{`Grade: ${edu.currentGrade}`}</p>
                    <p>{edu.startDate} - {edu.graduation}</p>
                    {/* <p>GPA: {edu.gpa}</p> */}
                    
                    <p>{edu.activities}</p>
                    <p>{edu.description}</p>

                    {/* Courses Taken - Dynamic */}
                    <div className="courseBoxContainer">
                      <h4 className="courseBoxHeading">Courses Taken:</h4>
                      <div className="courseBoxList">
                      {edu.courses.map((course, index) => (
                        <div 
                          key={index}
                          className='skillBox'
                        >
                          {course}
                        </div>
                      ))}
                      </div>
                    </div>
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
                  <h3
                    className='certificationTitle'
                  >{cert.title}</h3>
                  <p
                    className='certificationCompany'
                  >{cert.company}</p>
                  <p>{cert.date}</p>
                  <p>{cert.description}</p>
                  <p>{cert.skills}</p>
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
        <div 
          className="skillsContainer"
          onMouseLeave={onSkillsContainerLeave}
        >
          {skillsData.map((skill, index) => (
            <div 
              key={index} 
              className={`skillBox ${skill.level.toLocaleLowerCase() === 'beginner' ? 'skillLevelLow' : skill.level.toLocaleLowerCase() === 'intermediate' ? 'skillLevelMed' : skill.level.toLocaleLowerCase() === 'advanced' ? 'skillLevelHigh' : 'skillLevelExpert'}`}
            >
              {skill.name}
            </div>
          ))}

          {/* Skills section will have a key legend to show what each color means. */}
          <div className="skillLegendContainer">
            <h3 className="skillLegendHeading">Skill Level Key:</h3>
            <br/>
            <p className="skillLegendDirections">Hover over each level to highlight skills of that level.</p>
            <div>
            <div 
              className="skillLevelLow keyItem"
              onMouseEnter={() => onSkillKeyHover('Low')}
            >
              Beginner</div>
            <div 
              className="skillLevelMed keyItem"
              onMouseEnter={() => onSkillKeyHover('Med')}
            >
              Intermediate</div>
            <div 
              className="skillLevelHigh keyItem"
              onMouseEnter={() => onSkillKeyHover('High')}
            >
              Advanced</div>
            <div 
              className="skillLevelExpert keyItem"
              onMouseEnter={() => onSkillKeyHover('Expert')}
            >
              Expert</div>
            </div>
          </div>
        </div>
    </div>
  </div>
</div>
  
  )
}

export default ResumeComponent