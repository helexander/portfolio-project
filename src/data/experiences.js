import glintechLogo from "../assets/images/glintechLogo.jpeg";
import nologyLogo from "../assets/images/nologyLogo.png";
import truescopeLogo from "../assets/images/truescopeLogo.png";
import huaChenLogo from "../assets/images/HuaChenLogo.png";

const experiences = [
    {
        id: 1,
        title: "Data Operations Executive",
        company: "Truescope Singapore",
        short_company_name: "Truescope Singapore",
        period: "June 2024 - Present",
        description: "Leading data operations and process improvements in Singapore",
        companyLogo: truescopeLogo,
        location: "Singapore",
        responsibilities: [
            "Identify and implement process improvements with scripts coded in Python and JavaScript",
            "Work closely with cross-functional teams to align data initiatives with business objectives",
            "Lead data-related projects from inception to completion",
        ],
        achievements: [
            "Successfully implemented automated scripts resulting in significant reduction in manual data handling time",
            "Improved overall productivity through workflow streamlining",
            "Enhanced team efficiency by minimizing errors and enabling focus on higher-value tasks"
        ],
        technologies: ["Python", "JavaScript", "Data Operations", "Project Management"]
    },
    {
        id: 2,
        title: "Business Development Specialist",
        company: "HuaChen Trading (Hong Kong) Limited",
        short_company_name: "HuaChen Trading",
        period: "Sep 2023 - May 2024",
        description: "Freelance business development and e-commerce specialist",
        companyLogo: huaChenLogo,
        location: "Hong Kong",
        responsibilities: [
            "Identify opportunities and generate leads through networking at trade shows",
            "Build and maintain company's Shopify website"
        ],
        achievements: [
            "Assisted in Christmas exhibition preparation attracting international clients",
            "Contributed to 20% increase in yearly revenue for Christmas range products",
            "Successfully networked with clients from China, Russia, Croatia, UAE, and Germany"
        ],
        technologies: ["Shopify", "Business Development", "E-commerce", "International Trade"]
    },
    {
        id: 3,
        title: "Junior Software Engineer",
        company: "Glintech",
        short_company_name: "Glintech",
        period: "Aug 2023 - Jan 2024",
        description: "Development within Atlassian ecosystem",
        companyLogo: glintechLogo,
        location: "Australia",
        responsibilities: [
            "Develop and enhance tools within Atlassian ecosystem (Confluence and Jira)",
            "Fix and troubleshoot existing bugs in software systems",
            "Improve project management and collaboration workflows"
        ],
        achievements: [
            "Successfully enhanced project management tools",
            "Resolved critical software bugs",
            "Improved collaboration workflows"
        ],
        technologies: ["Java", "Node.js", "React.js", "Jira", "Confluence"]
    },
    {
        id: 4,
        title: "Junior Frontend Developer",
        company: "Truescope Australia",
        short_company_name: "Truescope Australia",
        period: "Feb 2022 - July 2023",
        description: "Frontend development with focus on mobile-first approach",
        companyLogo: truescopeLogo,
        location: "Australia",
        responsibilities: [
            "Develop with mobile-first and test-driven development approach",
            "Collaborate with developers and analysts on feature development",
            "Maintain and test applications",
            "Manage source code with Bitbucket"
        ],
        achievements: [
            "Improved client-facing and internal web applications",
            "Implemented unit tests with Jest",
            "Enhanced mobile responsiveness",
            "Improved login interface",
            "Successfully collaborated with client success team for issue resolution"
        ],
        technologies: ["React JS", "Node JS", "SASS", "Jest", "Logrocket", "Sentry", "Bitbucket"]
    },
    {
        id: 5,
        title: "Trainee Software Developer",
        company: "_nology",
        short_company_name: "_nology",
        period: "Sept 2021 - Dec 2021",
        description: "Intensive software development training program",
        companyLogo: nologyLogo,
        location: "Australia",
        responsibilities: [
            "Develop responsive web applications",
            "Implement agile working principles",
            "Create websites, games, single page applications and APIs"
        ],
        achievements: [
            "Successfully developed laboratory web application for client",
            "Mastered various development tools and technologies",
            "Gained practical experience in agile development"
        ],
        technologies: ["React", "Node", "Spring", "MySQL", "Firebase", "Trello"]
    }
];

export default experiences; 