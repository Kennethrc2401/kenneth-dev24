"use client"

import { projectData } from "@/utils/projectData"
import Image from "next/image"
// import Navbar from "@/components/navigation/navbar"
import NavbarV2 from "@/components/navigation/NavbarV2"
import Footer from "@/components/footer"
import "@/utils/stylesheets/ProjectsStyles.css";

type Props = {}

const Projects = (props: Props) => {
  return (
    <div 
      className="flex flex-col items-center space-y-8 projectsContainer font-sans"
    >
      {/* <Navbar /> */}
      <NavbarV2 />
      <div className="text-4xl font-bold projectSectionHeading">Projects</div>
      <div 
        className="flex flex-wrap justify-center space-x-8"
        style={{ 
          padding: "1rem 0", 
          gap: "2.5rem",
        }}
      >
        {projectData.map((project) => (
          <a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center space-y-4"
          >
            <Image
              src={require(`./projectImages/${project.image}`)}
              alt={project.alt}
              className="object-cover projectImage"
              width={384}
              height={384}
            />
            <div className="text-2xl font-bold projectTitle">{project.title}</div>
            <div className="projectDateCreated">{project.dateCreated}</div>
            <div className="projectDescription">{project.description}</div>
          </a>
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default Projects