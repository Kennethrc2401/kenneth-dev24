type naoRoboticsProject = {
    title: string;
    description: string;
    dateStarted: string;
    dateFinished?: string;
    status?: string;
    link?: string;
    githubLink?: string;
    image?: string;
    imageAlt?: string;
    imageCaption?: string;
    video?: string;
    videoAlt?: string;
    videoCaption?: string;
    videoLink?: string;
    tags?: string[];
    type?: "Python" | "Dance Routine" | "Tool" | "Other";
};

export const naoRoboticsData: naoRoboticsProject[] = [
    {
        title: "In The Dark by Jend - Dance",
        description: "Choreographed and programmed a dance routine for the NAO robot to the song 'Prada' by Casso.",
        dateStarted: "April 2025",
        dateFinished: "April 18, 2025",
        status: "In Progress",
        tags: ["Python", "NAO", "Robotics", "Dance", "Choreography"],
        type: "Dance Routine",
    },
    {
        title: "Too Sweet by Hozier - Dance",
        description: "Choreographed and programmed a dance routine for the NAO robot to the song 'Too Sweet' by Hozier.",
        dateStarted: "April 2025",
        dateFinished: "April 2025",
        status: "Completed",
        tags: ["Python", "NAO", "Robotics", "Dance", "Choreography"],
        type: "Dance Routine",
    },
    {
        title: "I Adore You by Hugel - Dance",
        description: "Choreographed and programmed a dance routine for the NAO robot to the song 'I Adore You' by Hugel.",
        dateStarted: "May 2025",
        dateFinished: "May - Apr 2025",
        status: "Completed",
        tags: ["Python", "NAO", "Robotics", "Dance", "Choreography"],
        type: "Dance Routine",
    },
    {
        title: "Here We Go Again by Oliver Tree - Dance",
        description: "Choreographed and programmed a dance routine for the NAO robot to the song 'Here We Go Again' by Oliver Tree.",
        dateStarted: "2024",
        dateFinished: "2024",
        status: "Completed",
        tags: ["Python", "NAO", "Robotics", "Dance", "Choreography"],
        type: "Dance Routine",
    },
    {
        title: "Prada by Casso - Dance",
        description: "Choreographed and programmed a dance routine for the NAO robot to the song 'Prada' by Casso.",
        dateStarted: "2024",
        dateFinished: "2024",
        status: "Completed",
        tags: ["Python", "NAO", "Robotics", "Dance", "Choreography"],
        type: "Dance Routine",
    },
    {
        title: "Gangnam Style by PSY - Dance",
        description: "Choreographed and programmed a dance routine for the NAO robot to the song 'Gangnam Style' by PSY.",
        dateStarted: "2023-2024",
        dateFinished: "2023-2024",
        status: "Completed",
        tags: ["Python", "NAO", "Robotics", "Dance", "Choreography"],
        type: "Dance Routine",
    },
    {
        title: "Blinding Lights by The Weeknd - Dance",
        description: "Choreographed and programmed a dance routine for the NAO robot to the song 'Blinding Lights' by The Weeknd.",
        dateStarted: "2023-2024",
        dateFinished: "2023-2024",
        status: "Completed",
        tags: ["Python", "NAO", "Robotics", "Dance", "Choreography"],
        type: "Dance Routine",
    },
    {
        title: "NAO Robot Syncronization",
        description: "Synchronized two NAO robots to perform various actions & dance routines together.",
        dateStarted: "August 2019",
        dateFinished: "May 2023",
        status: "Completed with Limitations",
        githubLink: "...",
        imageAlt: "NAO Robot Syncronization Project",
        tags: ["Python", "NAO", "Robotics", "Synchronization", "Dance", "Multiprocessing"],
        type: "Python",
    },
];