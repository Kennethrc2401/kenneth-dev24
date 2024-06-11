"use client"

import React from 'react'
import { skillsData } from '@/utils/skillsData'
import './SkillsBoxStyles.css'

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


const SkillBox = (props: Props) => {
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
}

export default SkillBox