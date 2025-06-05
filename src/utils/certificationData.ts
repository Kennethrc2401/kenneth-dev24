type Certification = {
    title: string;
    company: string;
    date: string;
    description: string[];
    skills: string[];
};

export const certificationData: Certification[] = [
    {
        title: "Basic Life Support (BLS)",
        company: "Brooks CPR & American Heart Association",
        date: "June 6, 2025",
        description: [
            "Completed Basic Life Support (BLS) training, focusing on CPR techniques and emergency response.",
            "AED (Automated External Defibrillator) training included.",
            "Learned to recognize and respond to cardiac emergencies.",
            "Gained skills in high-quality chest compressions and rescue breaths.",
        ],
        skills: [
            "CPR", 
            "AED", 
            "Emergency Response",
            "Cardiac Emergencies",
            "Chest Compressions",
            "Rescue Breaths",
            "First Aid",
            "Basic Life Support",
        ],
    },
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