
// Current project schema
type Project = {
    title: string;
    dateCreated: string;
    description?: string;
    image: string;
    link: string;
    repository?: string;
    alt: string;
    tags?: string[];
};

// Goal is to create a function that validates the project object
// Possible a regex function that checks if the date is in the correct format
// and if the tags are strings
// The function should return a boolean value

export const validateProject = (project: Project): boolean => {
    // Check if the date is in the correct format
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(project.dateCreated)) {
        return false;
    }

    // Check if the tags are strings
    if (project.tags) {
        if (!project.tags.every((tag) => typeof tag === 'string')) {
            return false;
        }
    }

    return true;
};