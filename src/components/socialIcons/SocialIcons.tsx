"use client";

import React from 'react'
import { 
    GithubIcon,
    LinkedinIcon,
    CameraIcon,
    Music2Icon,
    MailIcon,
    PhoneIcon,
    InstagramIcon,
 } from 'lucide-react'
 import './SocialIconsStyling.css'


type Props = {}

const SocialIconsComponent = (props: Props) => {
  return (
    <div>
        <div className="socialIconsContainer">
            <a 
                className="phoneIcon socialIcon" 
                href="tel:201-956-5731"
                title='Phone Number'
            >
                <PhoneIcon size={24} />
            </a>
            <a 
                className="mailIcon socialIcon" 
                href="mailto:Kennethrc19@student.fdu.edu"
                title='Email'
            >
                <MailIcon size={24} />
            </a>
            <a 
                className="gitIcon socialIcon" 
                href="https://github.com/Kennethrc2401" 
                target="_blank" 
                rel="noopener noreferrer"
                title='GitHub'
            >
                <GithubIcon size={24} />
            </a>
            <a 
                className="linkedinIcon socialIcon" 
                href="https://www.linkedin.com/in/kennethramirezcastro/" 
                target="_blank" 
                rel="noopener noreferrer"
                title='LinkedIn'
            >
                <LinkedinIcon size={24} />
            </a>
            <a 
                className="cameraIcon socialIcon" 
                href="http://kenneth-s-photos.weebly.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                title='Photography Portfolio'
            >
                <CameraIcon size={24} />
            </a>
            <a 
                className="musicIcon socialIcon" 
                href="https://open.spotify.com/user/kennethrc2401?si=fa4c12a26267453d" 
                target="_blank" 
                rel="noopener noreferrer"
                title='Spotify'
            >
                <Music2Icon size={24} />
            </a>
            <a 
                className="instagramIcon socialIcon" 
                href="https://www.instagram.com/sophiaspinsandblooms/" 
                target="_blank" 
                rel="noopener noreferrer"
                title='Instagram'
            >
                <InstagramIcon size={24} />
            </a>
        </div>
    </div>
  )
}

export default SocialIconsComponent