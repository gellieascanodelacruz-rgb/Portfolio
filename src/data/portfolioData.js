/**
 * GELLIE ANNE DELA CRUZ - PORTFOLIO DATA
 * Bachelor of Science in Information Technology
 * Major in Web and Mobile Application Development
 * Bulacan State University
 */

import osoadocsLogin from "../assets/images/OSOADOCS/LOGIN OSOADOCS.png";
import lodgrHome from "../assets/images/lodgr images/HOME PAGE.png";
import lodgrProduct from "../assets/images/lodgr images/PRODUCT PREVIEW.png";
import lodgrHost from "../assets/images/lodgr images/HOST POV.png";
import lodgrLogin from "../assets/images/lodgr images/LODGR Log in Page.png";

export const personalInfo = {
  name: "Gellie Anne Dela Cruz",
  title: "Full-Stack Web Developer",
  status: "Full-Stack Web Developer",
  location: "Baliuag City, Bulacan, Philippines",
  shortBio:
    "Full-Stack Web Developer & Designer passionate about creating clean, aesthetic, and functional web applications.",
  fullBio:
    "I am a Bachelor of Science in Information Technology student majoring in Web and Mobile Application Development. I genuinely love designing websites and turning ideas into clean, functional, and user-friendly digital solutions. Experienced in frontend UI/UX design, full-stack web development, database management, and API integration, I take pride in crafting thoughtful interfaces backed by reliable, practical code.",
  email: "gellieascanodelacruz@gmail.com",
  github: "https://github.com/gellieascanodelacruz-rgb",
  linkedin: "https://linkedin.com/in/gellie-anne-dela-cruz-230854291",
  resumeUrl: "/Gellie_Anne_Dela_Cruz_Resume.pdf",
  aboutCards: [
    {
      id: "card-status",
      label: "Current Status",
      value: "4th Year BSIT Student",
      subtext: "Bulacan State University",
      icon: "GraduationCap",
    },
    {
      id: "card-field",
      label: "Major & Specialization",
      value: "Web & Mobile App Dev",
      subtext: "Frontend & UI Design",
      icon: "Code",
    },
    {
      id: "card-focus",
      label: "Technical Focus",
      value: "Full-Stack & Systems",
      subtext: "Databases, APIs & Backend Logic",
      icon: "Layers",
      highlight: false,
    },
    {
      id: "card-location",
      label: "Location",
      value: "Baliuag City, Bulacan",
      subtext: "Philippines (Open to Hybrid / Remote)",
      icon: "MapPin",
    },
  ],
  focusAreas: [
    "Full-Stack Web Development",
    "Frontend Development",
    "Backend Development",
    "Database Management",
    "API Integration",
    "Responsive Web Design",
    "Software Development",
    "Software Testing",
  ],
};

export const skillsData = {
  categories: [
    {
      title: "Frontend Development",
      icon: "Code",
      skills: [
        { name: "ReactJS", level: "Proficient", percent: 88 },
        { name: "JavaScript", level: "Proficient", percent: 88 },
        { name: "TypeScript", level: "Intermediate", percent: 75 },
        { name: "HTML5 & CSS3", level: "Proficient", percent: 92 },
        { name: "Tailwind CSS", level: "Proficient", percent: 85 },
        { name: "React Native", level: "Intermediate", percent: 75 },
        { name: "Responsive Design", level: "Proficient", percent: 90 },
      ],
    },
    {
      title: "Backend Development",
      icon: "Cpu",
      skills: [
        { name: "Node.js", level: "Proficient", percent: 82 },
        { name: "PHP", level: "Intermediate", percent: 76 },
        { name: "Django", level: "Intermediate", percent: 70 },
        { name: "Java", level: "Intermediate", percent: 76 },
      ],
    },
    {
      title: "Databases & Backend Services",
      icon: "Database",
      skills: [
        { name: "PostgreSQL", level: "Intermediate", percent: 80 },
        { name: "MySQL / SQL", level: "Proficient", percent: 86 },
        { name: "Supabase", level: "Intermediate", percent: 75 },
        { name: "Firebase", level: "Proficient", percent: 82 },
      ],
    },
    {
      title: "API & Payment Integration",
      icon: "Layers",
      skills: [
        { name: "REST APIs", level: "Proficient", percent: 85 },
        { name: "API Integration", level: "Proficient", percent: 85 },
        { name: "PayPal API", level: "Intermediate", percent: 75 },
      ],
    },
    {
      title: "Development & Version Control",
      icon: "Wrench",
      skills: [
        { name: "Git", level: "Proficient", percent: 85 },
        { name: "GitHub", level: "Proficient", percent: 85 },
        { name: "Visual Studio Code", level: "Proficient", percent: 90 },
        { name: "Postman", level: "Intermediate", percent: 80 },
        { name: "XAMPP", level: "Proficient", percent: 85 },
        { name: "Apache NetBeans", level: "Intermediate", percent: 75 },
      ],
    },
    {
      title: "Testing & Other Technologies",
      icon: "CheckCircle",
      skills: [
        { name: "Selenium", level: "Intermediate", percent: 72 },
        { name: "Figma", level: "Intermediate", percent: 78 },
        { name: "Android Studio", level: "Intermediate", percent: 70 },
        { name: "Unity", level: "Familiar", percent: 65 },
        { name: "VMware", level: "Intermediate", percent: 72 },
      ],
    },
  ],
  levelsLegend: [
    {
      name: "Familiar",
      description: "Working knowledge and concepts, able to implement with documentation.",
    },
    {
      name: "Intermediate",
      description: "Comfortable building and integrating functional application features.",
    },
    {
      name: "Proficient",
      description: "Hands-on experience building projects independently following best practices.",
    },
  ],
};

export const projectsData = [
  {
    id: "osoadocs",
    title: "OSOADOCS",
    tagline: "Centralized Document Workflow and Management System",
    category: "Web Application / System",
    badge: "Featured System Project",
    summary:
      "A centralized web-based system designed to streamline document submission, organization, tracking, and management for student organizations.",
    problem:
      "Student organizations and academic offices often struggle with scattered document submissions, untracked approval pipelines, and inefficient paper-based tracking.",
    solution:
      "Built a unified web-based document platform that centralizes organizational files, provides structured review workflows, and allows real-time tracking of submission statuses.",
    technologies: ["ReactJS", "Web Technologies", "Database Management", "Document Workflow"],
    role: "Full-Stack Developer",
    features: [
      "Centralizes organizational documents in one secure repository",
      "Provides structured document workflows for reviews and approvals",
      "Supports document submission, organization, and real-time tracking",
      "Designed to improve document accessibility and organizational efficiency",
    ],
    github: "https://github.com/gellieascanodelacruz-rgb",
    demo: "https://www.osoadocs.website/",
    image: osoadocsLogin,
    gallery: [
      { src: osoadocsLogin, title: "OSOADOCS — Centralized Student Organization Document Portal" },
    ],
    caseStudy: {
      overview:
        "OSOADOCS was designed to eliminate paperwork bottlenecks in student organizations. It centralizes all official records into a clean digital workflow with end-to-end tracking.",
      architecture: [
        "Frontend: Responsive ReactJS interface with real-time feedback and document previewing.",
        "Backend: Structured backend APIs managing secure submission validation and workflow transitions.",
        "Database: Relational database architecture organizing organizations, document categories, and audit records.",
      ],
      databaseHighlights:
        "Engineered relational schemas ensuring high data integrity, organized categories, and traceable submission logs.",
      challengesAndLearnings:
        "Implementing multi-step approval states helped deepen my understanding of system workflow state machines and error handling.",
      keyMetrics: [
        { label: "Platform", val: "Web-Based" },
        { label: "Target", val: "Student Orgs" },
        { label: "Focus", val: "Document Workflow" },
      ],
    },
  },
  {
    id: "lodgr",
    title: "LODGR",
    tagline: "Accommodation & Hosting Services Web Application",
    category: "Full-Stack Web Application",
    badge: "Full-Stack Web App",
    summary:
      "A responsive accommodation platform for browsing listings, managing accounts, and making reservations.",
    problem:
      "Users and students seeking accommodations need an intuitive, reliable way to view property listings, check room availability, and complete secure reservations online.",
    solution:
      "Developed a modern web application featuring dynamic listing exploration, Firebase user authentication, personalized account dashboards, and PayPal payment integration.",
    technologies: ["ReactJS", "Firebase", "PayPal API", "Responsive Web Design"],
    role: "Full-Stack Web Developer",
    features: [
      "Allows users to browse accommodation listings with amenities and details",
      "Provides comprehensive account and profile management functionality",
      "Supports online reservations and booking requests",
      "Integrates PayPal API for seamless online payment processing",
      "Uses Firebase authentication for secure user accounts and session persistence",
    ],
    github: "https://github.com/gellieascanodelacruz-rgb",
    demo: "https://lodgrs.vercel.app",
    image: lodgrHome,
    gallery: [
      { src: lodgrHome, title: "LODGR — Home Page & Featured Accommodation Listings" },
      { src: lodgrProduct, title: "LODGR — Product Details & Room Booking Preview" },
      { src: lodgrHost, title: "LODGR — Host Management Dashboard & Reservation Views" },
      { src: lodgrLogin, title: "LODGR — Secure Firebase Authentication Portal" },
    ],
    caseStudy: {
      overview:
        "LODGR is an accommodation marketplace concept built with modern ReactJS and Firebase. It demonstrates real-time user authentication and third-party payment gateway integration.",
      architecture: [
        "Frontend: ReactJS with modular component architecture and mobile-friendly responsive layout.",
        "Authentication & Cloud: Firebase Auth for secure user identity management.",
        "Payment Processing: Integrated PayPal API SDK for handling checkout flows and order confirmations.",
      ],
      databaseHighlights:
        "Configured secure user collections and booking records synchronized with Firebase cloud services.",
      challengesAndLearnings:
        "Handling asynchronous payment capture and confirming order states via PayPal API strengthened my integration and API communication skills.",
      keyMetrics: [
        { label: "Payments", val: "PayPal API" },
        { label: "Auth Flow", val: "Firebase Auth" },
        { label: "Frontend", val: "ReactJS" },
      ],
    },
  },
  {
    id: "sellsmart",
    title: "SellSmart",
    tagline: "Retail Point-of-Sale System",
    category: "Desktop Application / POS",
    badge: "Desktop Application",
    summary:
      "A desktop-based point-of-sale system designed to help retail stores manage products, sales, and transaction records.",
    problem:
      "Small retail stores frequently face inventory discrepancies, slow checkout tallying, and unorganized manual paper receipts.",
    solution:
      "Engineered an efficient Java desktop application with a MySQL database backend that automates inventory product management, checkout calculations, and sales logging.",
    technologies: ["Java", "MySQL", "Desktop Application", "SQL"],
    role: "Software Developer",
    image: null,
    gallery: [],
    features: [
      "Manages product information, categories, and unit pricing",
      "Records sales transactions with fast tallying and checkout calculation",
      "Organizes transaction records and sales history for easy auditing",
      "Supports day-to-day retail store operations reliably",
    ],
    github: "https://github.com/gellieascanodelacruz-rgb",
    demo: "#contact",
    caseStudy: {
      overview:
        "SellSmart is an automated desktop POS software engineered in Java and MySQL. It equips retail operators with fast product lookup and instant transaction logging.",
      architecture: [
        "Application Layer: Java desktop application with structured modular architecture.",
        "Data Layer: MySQL relational database accessed via JDBC with parameterized SQL queries for security.",
        "Transaction Management: ACID-compliant transaction records ensuring reliable sales auditing.",
      ],
      databaseHighlights:
        "Designed normalized product, transaction, and itemized sales tables with relational keys.",
      challengesAndLearnings:
        "Connecting Java desktop clients to MySQL via JDBC taught me robust exception handling and database connection management.",
      keyMetrics: [
        { label: "Platform", val: "Java Desktop" },
        { label: "Database", val: "MySQL / JDBC" },
        { label: "Function", val: "POS & Inventory" },
      ],
    },
  },
];

export const experienceData = [
  {
    id: "exp-academic",
    role: "Student Developer — Academic Projects",
    organization: "Bulacan State University",
    period: "2023 – Present",
    type: "Academic Software Development",
    description:
      "Developed web, desktop, and system-based applications as part of academic projects, gaining hands-on experience in software development, database management, API integration, and application design.",
    responsibilities: [
      "Architected and implemented full-stack web and desktop applications (OSOADOCS, LODGR, SellSmart).",
      "Designed and managed relational and cloud databases using PostgreSQL, MySQL, Supabase, and Firebase.",
      "Integrated third-party REST APIs and payment gateways including PayPal API.",
      "Applied software testing and version control practices utilizing Git, GitHub, Postman, and Selenium.",
    ],
  },
];

export const educationData = {
  degree: "Bachelor of Science in Information Technology",
  major: "Major in Web and Mobile Application Development",
  institution: "Bulacan State University",
  period: "2023 – Present",
  expectedGraduation: "Expected Graduation: 2027",
  status: "4th Year Undergraduate Student",
  description:
    "Pursuing a Bachelor of Science in Information Technology majoring in Web and Mobile Application Development. Dedicated to creating functional, user-friendly, and practical software solutions.",
};

export const achievementsData = [
  {
    id: "ach-deans-list",
    title: "Dean's Lister",
    issuer: "Bulacan State University",
    period: "Academic Excellence",
    description:
      "Recognized for maintaining high scholastic standing and demonstrating excellence in Information Technology and Web & Mobile Application Development coursework.",
  },
];

export const resumeData = {
  title: "Gellie Anne Dela Cruz - Resume",
  version: "Full-Stack Web Developer",
  summary:
    "Bachelor of Science in Information Technology student majoring in Web and Mobile Application Development at Bulacan State University. Passionate about turning ideas into functional, user-friendly, and practical web applications. Experienced in front-end and back-end development, database management, API integration, and developing web, desktop, and system projects.",
  sections: [
    {
      title: "Education",
      items: [
        "Bachelor of Science in Information Technology — Major in Web and Mobile Application Development (Bulacan State University, 2023 – Present, Expected Grad: 2027)",
      ],
    },
    {
      title: "Technical Skills",
      items: [
        "Frontend: ReactJS, JavaScript, TypeScript, HTML, CSS, Tailwind CSS, React Native, Responsive Web Design",
        "Backend: Node.js, PHP, Django, Java",
        "Databases & Cloud: PostgreSQL, MySQL, SQL, Supabase, Firebase",
        "APIs & Integration: REST APIs, API Integration, PayPal API",
        "Tools & Workflows: Git, GitHub, Visual Studio Code, Postman, XAMPP, Apache NetBeans, Selenium, Figma",
      ],
    },
    {
      title: "Featured Projects",
      items: [
        "OSOADOCS: Centralized Document Workflow and Management System (ReactJS, SQL, REST APIs)",
        "LODGR: Accommodation & Hosting Services Web Application (ReactJS, Firebase, PayPal API)",
        "SellSmart: Retail Point-of-Sale Desktop System (Java, MySQL)",
      ],
    },
    {
      title: "Honors & Achievements",
      items: [
        "Dean's Lister — Bulacan State University",
      ],
    },
  ],
};
