import React from "react";
// Website related settings
const settings = {
  isSplash: true, // false if you don't want Splash screen.
};

const seo = {
  title: "Nawres's Portfolio",
  description:
    "Hi, I'm Nawres Tlili, an aspiring Data Scientist with a passion for machine learning, data analysis, and building data-driven solutions.",
  og: {
    title: "Nawres Portfolio",
    type: "website",
  },
};

//Home Page
const greeting = {
  title: "Nawres tlili",
  logo_name: "A.Nawres",
  nickname: "Data Analyst",
  subTitle:
    "Hi, I'm Nawres Tlili, an aspiring Data Scientist with a passion for machine learning, data analysis, and building data-driven solutions.",
  resumeLink:
    "https://drive.google.com/file/d/1AhHibccB9C0bGX3er9cQKvzv6UsqxVxk/view?usp=sharing",
  portfolio_repository: "https://github.com/nawreestl",
  githubProfile: "https://github.com/nawreestl",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/nawreestl",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/nawres-tlili/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },

  {
    name: "Gmail",
    link: "mailto:tlilinawres207@@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },

  {
    name: "Facebook",
    link: "https://www.facebook.com/profile.php?id=100070662161364",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link:
      "https://www.instagram.com/its_nawresss?igsh=MWJpZzIwcWZ5cGo4Ng%3D%3D&utm_source=qr",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title:
        "Master's Student in Data Science with a Passion for Business Intelligence & AI",
      fileName: "Data_Science_Student",
      skills: [
        "⚡ Master's student in Data Science with a strong foundation in Business Intelligence and AI.",
        "⚡ Hands-on experience in machine learning, data analysis, and predictive modeling through academic and personal projects.",
        "⚡ Passionate about leveraging data-driven insights to solve real-world problems and build scalable solutions in the world of AI.",
        "⚡ Experienced in tools like Power BI, SSIS, SSMS, and programming languages such as Python, SQL, and JavaScript.",
        "⚡ Actively seeking opportunities in Business Intelligence, data engineering, and machine learning.",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            color: "#150458",
          },
        },
        {
          skillName: "NumPy",
          fontAwesomeClassname: "simple-icons:numpy",
          style: {
            color: "#013243",
          },
        },
        {
          skillName: "PowerBI",
          fontAwesomeClassname: "simple-icons:powerbi",
          style: {
            color: "#F2C300",
          },
        },
        {
          skillName: "SSIS",
          fontAwesomeClassname: "simple-icons:visualstudio",
          style: {
            color: "#8A1F10", // Custom color for SSIS
          },
        },
        {
          skillName: "SSMS",
          fontAwesomeClassname: "simple-icons:visualstudio",
          style: {
            color: "#5C2D91", // Custom color for SSMS
          },
        },
      ],
    },
    {
      title: "Data Science & Business Intelligence",
      fileName: "DataEngineerImg",
      skills: [
        "⚡ Proficient in data analysis, predictive modeling, and data mining techniques.",
        "⚡ Developed and deployed machine learning models for business problems such as churn prediction, fraud detection, and anomaly detection.",
        "⚡ Experienced in data extraction, transformation, and loading (ETL) processes using tools like SSIS, Talend, and Power BI.",
        "⚡ Skilled in working with big data technologies such as Hadoop for large-scale data processing.",
        "⚡ Proficient in building data pipelines, integrating data sources, and performing data visualizations for business insights using Power BI.",
      ],
      softwareSkills: [
        {
          skillName: "Power BI",
          fontAwesomeClassname: "simple-icons:powerbi",
          style: {
            color: "#F2C300",
          },
        },
        {
          skillName: "SSIS",
          fontAwesomeClassname: "simple-icons:visualstudio",
          style: {
            color: "#8A1F10",
          },
        },
        {
          skillName: "SSMS",
          fontAwesomeClassname: "simple-icons:visualstudio",
          style: {
            color: "#5C2D91",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "Apache Hadoop",
          fontAwesomeClassname: "simple-icons:apachehadoop",
          style: {
            color: "#66CCFF",
          },
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
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Spring Boot",
          fontAwesomeClassname: "simple-icons:spring",
          style: {
            color: "#6DB33F",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#7952B3",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  // competitiveSites: [
  //   {
  //     siteName: "LeetCode",
  //     iconifyClassname: "simple-icons:leetcode",
  //     style: {
  //       color: "#F79F1B",
  //     },
  //     //   profileLink: "https://leetcode.com/layman_brother/",
  //   },
  // {
  //   siteName: "HackerRank",
  //   iconifyClassname: "simple-icons:hackerrank",
  //   style: {
  //     color: "#2EC866",
  //   },
  //   profileLink: "https://www.hackerrank.com/layman_brother",
  // },
  //],
};

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
        "⚡ Involved in hands-on applications of data science tools such as Python, TensorFlow, and PyTorch.",
      ],
      website_link: "https://www.issatgafsa.tn/https://issatgf.rnu.tn/fra/home",
    },
    {
      title: "ISG Bizerte",
      subtitle:
        "Bachelor's in Computer Science - Specialization in Business Intelligence",
      logo_path: "isgb.png",
      alt_name: "ISG Bizerte",
      duration: "2022 - 2025",
      descriptions: [
        "⚡ Specialized in Business Intelligence with a focus on data analysis and predictive modeling.",
        "⚡ Gained practical experience in using BI tools like Power BI and SQL Server for data warehousing and reporting.",
        "⚡ Developed skills in data engineering, data transformation, and integration for business solutions.",
      ],
      website_link: "http://www.isgbz.rnu.tn/",
    },
  ],
};

const trainings = {
  trainings: [],
};

const experience = {
  title: "Experience",
  subtitle: "Work and Internship",
  description:
    "I'm Nawres Tlili, a passionate Data Science and Business Intelligence enthusiast, driven to turn complex data into impactful solutions. With a focus on AI, predictive modeling, and data-driven decision-making, I’m committed to creating intelligent systems that deliver real-world value. Explore my journey where innovation meets performance across full-stack development and data science projects.",

  header_image_path: "experience.png",
  sections: [
    {
      title: "Internship",
      experiences: [
        {
          title: "Développeur Web Stagiaire",
          company: "TechInventors",
          company_url: "https://www.techinventors.com",
          duration: "07/2023 - 08/2023",
          location: "Sousse, Tunisia",
          description:
            "⚡ Développement d'un site web en utilisant HTML, CSS, JavaScript et Bootstrap 5. Travail sur le front-end et back-end pour améliorer l'interface utilisateur et les fonctionnalités du site.",
          color: "#0879bf",
        },
        {
          title: "Stagiaire Business Intelligence",
          company: "SMART MED SA",
          company_url: "https://www.smartmed.com",
          duration: "02/2024 - 06/2024",
          location: "Lafayette , Tunis",
          description:
            "⚡ Conception et développement d'une solution Business Intelligence pour analyser les comportements des médecins et améliorer les processus décisionnels.",
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
    "My projects makes use of vast variety of latest technology tools.",
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
      "https://www.google.com/maps/place/Ariana/@36.8689216,10.1353403,13z/data=!3m1!4b1!4m6!3m5!1s0x12e2cb4e31471bf3:0x65bc5efbce842198!8m2!3d36.8665367!4d10.1647233!16zL20vMGI0Znh0",
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
  competitiveSites,
  degrees,
  trainings,
  experience,
  projectsHeader,
  contactPageData,
};
