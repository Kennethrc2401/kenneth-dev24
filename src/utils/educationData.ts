type Education = {
    school: string;
    department: string;
    degree: string;
    major: string;
    minor: string;
    currentGrade: string;
    startDate: string;
    graduation: string;
    gpa: string;
    location: string;
    activities: string;
    description: string;
    courses: string[];
};
export const educationData: Education[] = [
    {
        school: 'Fairleigh Dickinson University',
        department: 'Gildart Haase School of Computer Sciences and Engineering',
        degree: 'Bachelor of Science (BS)',
        major: 'Information Technology',
        minor: 'Computer Science',
        currentGrade: 'Super Senior',
        startDate: 'August 2019',
        graduation: 'December 2025',
        gpa: '2.4 / 4.0',
        location: 'Teaneck, NJ',
        activities: 'Sports Photographer. Industrial Automation and Robotics Laboratory Assistant.',
        description: 'I am an Information Technology major with a Computer Science minor. I have taken a variety of courses in computer programming, software engineering, and computer science. I have also taken courses in mathematics, such as calculus and discrete structures. I have experience with programming languages such as Python, Java, C++, and SQL. I am interested in software development, data science, and artificial intelligence. I am currently a senior at Fairleigh Dickinson University and I am expected to graduate in May 2025.',
        courses: [
            'Computer Programming 1: Python',
            'Computer Programming 2: Java',
            'Intro to Computer Science',
            'Assembly Language Programming & Linux',
            'Data Structures and Algorithms & C++',
            'Software Engineering',
            'Database Systems & Oracle SQL',
            'Computer Game Programming & C++',
            'Operating Systems',
            'Mobile Application Development',
            'Computer Networks',
            'Computer Organization',
            'Survey of Computing Security',
            'Cloud Computing & AWS',
            'Math Foundations CSCI',
            'Discrete Structures',
            "Artificial Intelligence",
            "Programming for The Internet",
            "Computer Architecture",
        ]
    },
];