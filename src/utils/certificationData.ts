type Certification = {
    title: string;
    company: string;
    date: string;
    description: string[];
    skills: string[];
};

export const certificationData: Certification[] = [
    {
        title: "Build Websites from Scratch",
        company: "Codecademy",
        date: "Febraury 13, 2018",
        description: [
            "Learned to build websites from scratch using HTML, CSS, and JavaScript.",
        ],
        skills: [
            "HTML", 
            "CSS", 
            "JavaScript",
            "GitHub",
        ],
    },
    {
        title: "Build Website UIs",
        company: "Codecademy",
        date: "March 6, 2018",
        description: [
            "Learned to build usable and accessible website UIs.",
        ],
        skills: [
            "UI Design", 
            "Accessibility"
        ],
    },
    {
        title: "Build Front-End Web Applications from Scratch",
        company: "Codecademy",
        date: "April 4, 2018",
        description: [
            "Learned to build front-end web applications from scratch using JavaScript and Node.js.",
        ],
        skills: [
            "Frontend", 
            "JavaScript", 
            "Node JS",
            "GitHub",
        ],
    }
];