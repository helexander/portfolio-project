import awsLogo from '../assets/images/aws-logo.png';
import databricksLogo from '../assets/images/databricks-logo.png';
import atlassianLogo from '../assets/images/atlassian-logo.png';

const certifications = [
    {
        id: 1,
        name: "Databricks Fundamentals Accreditation",
        issuer: "Databricks",
        issueDate: "2024",
        logo: databricksLogo,
        skills: ["Data Engineering", "Data Analytics"]
    },
    {
        id: 2,
        name: "AWS Cloud Practitioner Essentials",
        issuer: "AWS Training",
        issueDate: "2024",
        logo: awsLogo,
        skills: ["AWS Services", "Cloud Architecture"]
    },
    {
        id: 3,
        name: "Jira Fundamentals",
        issuer: "Atlassian",
        issueDate: "2024",
        logo: atlassianLogo,
        skills: ["Project Management", "Agile", "Issue Tracking"]
    }
];

export default certifications;