import React from "react";

// Website related settings
const settings = {
  isSplash: true, // false if you don't want Splash screen.
};

const seo = {
  title: "Nawres's Portfolio",
  description:
    "Hello, I'm Nawres Tlili, a Data Scientist and Business Intelligence professional with a focus on turning complex data into actionable insights.",
  og: {
    title: "Nawres Portfolio",
    type: "website",
  },
};

// Home Page
const greeting = {
  title: "Nawres Tlili",
  logo_name: "A.Nawres",
  nickname: " Data Scientist | Data Analyst",
  subTitle:
    "Hello, I'm Nawres Tlili, a Data Scientist and Business Intelligence enthusiast. I specialize in turning complex data into actionable insights using machine learning, predictive modeling, and interactive dashboards to drive real-world impact.",
  resumeLink:
    "https://drive.google.com/file/d/16QO2HWk1ho2V1howzw6-b7hgx2HArsux/view?usp=sharing",
  portfolio_repository: "https://github.com/nawreestl",
  githubProfile: "https://github.com/nawreestl",
};

// Social Media Links
const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/nawreestl",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/nawres-tlili/",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Gmail",
    link: "mailto:tlilinawres207@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/profile.php?id=100070662161364",
    fontAwesomeIcon: "fa-facebook-f",
    backgroundColor: "#1877F2",
  },
  {
    name: "Instagram",
    link:
      "https://www.instagram.com/its_nawresss?igsh=MWJpZzIwcWZ5cGo4Ng%3D%3D&utm_source=qr",
    fontAwesomeIcon: "fa-instagram",
    backgroundColor: "#E4405F",
  },
];

// Skills
const skills = {
  data: [
    {
      title: "Master's in Data Science",
      fileName: "Data_Scientist",
      skills: [
        "⚡ Master's student in Data Science with a strong foundation in Business Intelligence and AI.",
        "⚡ Hands-on experience in machine learning, data analysis, and predictive modeling through academic and personal projects.",
        "⚡ Passionate about leveraging data-driven insights to solve real-world problems and build scalable solutions in the world of AI.",
        "⚡ Experienced in tools like Power BI, SSIS, SSMS, and programming languages",
        "⚡ Actively seeking opportunities in Business Intelligence, data engineering, and machine learning.",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: { color: "#3776AB" },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: { color: "#150458" },
        },
        {
          skillName: "NumPy",
          fontAwesomeClassname: "simple-icons:numpy",
          style: { color: "#013243" },
        },
        {
          skillName: "PowerBI",
          fontAwesomeClassname: "simple-icons:powerbi",
          style: { color: "#F2C300" },
        },
        {
          skillName: "SSIS",
          fontAwesomeClassname: "simple-icons:visualstudio",
          style: { color: "#8A1F10" },
        },
        {
          skillName: "SSMS",
          fontAwesomeClassname: "simple-icons:visualstudio",
          style: { color: "#5C2D91" },
        },
      ],
    },
    {
      title: "Business Intelligence",
      fileName: "DataEngineerImg",
      skills: [
        "⚡ Proficient in data analysis, predictive modeling, and data mining techniques.",
        "⚡ Developed and deployed machine learning models for business problems such as churn prediction, fraud detection, and anomaly detection.",
        "⚡ Experienced in ETL processes using tools like SSIS, Talend, and Power BI.",
        "⚡ Skilled in working with big data technologies such as Hadoop for large-scale data processing.",
        "⚡ Proficient in building data pipelines, integrating data sources, and performing data visualizations for business insights using Power BI.",
      ],
      softwareSkills: [
        {
          skillName: "Power BI",
          fontAwesomeClassname: "simple-icons:powerbi",
          style: { color: "#F2C300" },
        },
        {
          skillName: "SSIS",
          fontAwesomeClassname: "simple-icons:visualstudio",
          style: { color: "#8A1F10" },
        },
        {
          skillName: "SSMS",
          fontAwesomeClassname: "simple-icons:visualstudio",
          style: { color: "#5C2D91" },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: { color: "#47A248" },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: { color: "#4479A1" },
        },
        {
          skillName: "Apache Hadoop",
          fontAwesomeClassname: "simple-icons:apachehadoop",
          style: { color: "#66CCFF" },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Skilled in building responsive front-end applications using React.",
        "⚡ Proficient in developing backend services using Spring Boot.",
        "⚡ Hands-on experience with RESTful API development and integration with front-end services.",
        "⚡ Experienced in building responsive layouts with Bootstrap for front-end design.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: { color: "#E34F26" },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: { color: "#1572B6" },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: { backgroundColor: "#000000", color: "#F7DF1E" },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: { color: "#61DAFB" },
        },
        {
          skillName: "Spring Boot",
          fontAwesomeClassname: "simple-icons:spring",
          style: { color: "#6DB33F" },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: { color: "#7952B3" },
        },
      ],
    },
  ],
};

// Education
const degrees = {
  degrees: [
    {
      title: "ISSAT Gafsa",
      subtitle: "Master's in Data Science",
      logo_path: "issat_gafsa.png",
      alt_name: "issat",
      duration: "2024 - 2025",
      descriptions: [
        "⚡ Currently pursuing a Master's in Data Science with a focus on Machine Learning, AI, and Big Data technologies.",
        "⚡ Working on academic and personal projects related to data analysis, anomaly detection, and predictive modeling.",
        "⚡ Hands-on applications of Python, TensorFlow, and PyTorch.",
      ],
      website_link: "https://www.issatgafsa.tn/",
    },
    {
      title: "ISG Bizerte",
      subtitle:
        "Bachelor's in Computer Science - Specialization in Business Intelligence",
      logo_path: "isgb.png",
      alt_name: "ISG Bizerte",
      duration: "2022 - 2025",
      descriptions: [
        "⚡ Specialized in Business Intelligence with focus on data analysis and predictive modeling.",
        "⚡ Practical experience using Power BI and SQL Server for data warehousing and reporting.",
        "⚡ Skills in data engineering, transformation, and integration for business solutions.",
      ],
      website_link: "http://www.isgbz.rnu.tn/",
    },
  ],
};

// Trainings
const trainings = {
  trainings: [],
};

// Experience
const experience = {
  title: "Experience",
  subtitle: "Work & Internships",
  description:
    "I'm Nawres Tlili, a passionate Data Scientist and Business Intelligence professional, driven to turn complex data into impactful solutions.\nWith expertise in AI, predictive modeling, and data-driven decision-making, I create intelligent systems that deliver real-world value.\nExplore my journey where innovation meets performance across full-stack development and data science projects.",
  header_image_path: "experience.png",
  sections: [
    {
      title: "Internships",
      experiences: [
        {
          title: "AI Marketing Intern",
          company: "BuzzBip",
          company_url: "https://buzzbip.com/",
          duration: "01/2025 - Present",
          location: "Tunis, Tunisia",
          description: [
            "⚡ Designed and developed an AI assistant for marketers.",
            "⚡ Implemented customer segmentation and automated marketing actions.",
            "⚡ Integrated SQL, RAG, and LLM for data management.",
            "⚡ Cloud deployment using Flask, Docker, Python, and GPT-5 on Azure.",
          ],
          skills: [
            "⚡ Python",
            "⚡ Flask",
            "⚡ SQL",
            "⚡ LLM/GPT-5",
            "⚡ Cloud Deployment",
            "⚡ Azure",
            "⚡ Docker",
          ],
          color: "#0879bf",
        },
        {
          title: "Business Intelligence Intern",
          company: "SMART MED SA",
          company_url: "https://www.smartmed.com",
          duration: "02/2024 - 06/2024",
          location: "Lafayette, Tunis, Tunisia",
          description: [
            "⚡ Developed a BI solution to analyze doctors’ behavior.",
            "⚡ Designed and automated ETL pipelines.",
            "⚡ Created interactive dashboards.",
            "⚡ Developed a web application using Spring Boot and ReactJS.",
          ],
          skills: [
            "⚡ Power BI",
            "⚡ SSIS",
            "⚡ SSMS",
            "⚡ ETL",
            "⚡ SQL",
            "⚡ Spring Boot",
            "⚡ ReactJS",
          ],
          color: "#0879bf",
        },
        {
          title: "Web Development Intern",
          company: "TechInventors",
          company_url: "https://www.techinventors.com",
          duration: "07/2023 - 08/2023",
          location: "Sousse, Tunisia",
          description: [
            "⚡ Developed a responsive website using HTML, CSS, JavaScript, and Bootstrap 5.",
            "⚡ Enhanced the user interface (UI/UX) design.",
          ],
          skills: [
            "⚡ HTML",
            "⚡ CSS",
            "⚡ JavaScript",
            "⚡ Bootstrap 5",
            "⚡ UI/UX",
            "⚡ Power BI",
          ],
          color: "#0879bf",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools.",
  avatar_image_path: "setting.png",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "email.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours.",
  },
  addressSection: {
    title: "Address",
    subtitle: "Tunis",
    avatar_image_path: "address_image.svg",
    location_map_link:
      "https://www.google.com/maps/place/Ariana/@36.8689216,10.1353403,13z",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  trainings,
  experience,
  projectsHeader,
  contactPageData,
};
