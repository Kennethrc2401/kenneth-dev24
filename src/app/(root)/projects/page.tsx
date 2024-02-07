import { projectData } from "@/utils/projectData"
import Image from "next/image"
import Navbar from "@/components/navigation/navbar"
import Footer from "@/components/footer"

type Props = {}

const Projects = (props: Props) => {
  return (
    <div 
      className="flex flex-col items-center space-y-8 projectsContainer bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 font-sans"
    >
      <Navbar />
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
            <div className="text-2xl font-bold">{project.title}</div>
            <div>{project.dateCreated}</div>
            <div>{project.description}</div>
          </a>
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default Projects