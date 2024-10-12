type PythonProject = {
    title: string;
    description: string;
    dateStarted: string;
    dateFinished?: string;
    status?: string;
    link?: string;
    githubLink?: string;
    image?: string;
    alt?: string;
    tags?: string[];
};

export const pythonRoboticsData: PythonProject[] = [
    {
        title: "NAO Robot Syncronization",
        description: "Synchronized two NAO robots to perform various actions & dance routines together.",
        dateStarted: "August 2019",
        dateFinished: "May 2023",
        status: "Completed with Limitations",
        link: "...",
        githubLink: "...",
        image: "...",
        alt: "NAO Robot Syncronization Project",
        tags: ["Python", "NAO", "Robotics"],
    },
];
