/**
 * PORTFOLIO DATA (SAMPLE / PLACEHOLDER DATA)
 * ============================================================================
 * IMPORTANT NOTE:
 * All information in this file is strictly fictional/dummy data designed for
 * an undergraduate IT student portfolio.
 * 
 * TO PERSONALIZE:
 * Replace the values below with your real details, projects, and links.
 * ============================================================================
 */

export const personalInfo = {
  name: "Alex Morgan",
  title: "IT Student & Aspiring Software Developer",
  status: "Open to Internship / OJT",
  location: "Manila, Philippines",
  shortBio:
    "An undergraduate Information Technology student passionate about building practical web applications, solving technical problems, and continuously learning new technologies.",
  fullBio:
    "Alex Morgan is an undergraduate Information Technology student with hands-on experience developing academic and personal software projects. Alex enjoys creating web applications, working with databases, and exploring modern development technologies. Through academic projects and independent learning, Alex has developed practical experience in frontend development, backend logic, database management, and system design.",
  email: "alex.morgan@example.com",
  github: "https://github.com/alexmorgan",
  linkedin: "https://linkedin.com/in/alexmorgan",
  resumeUrl: "#resume", // Can be updated with an actual PDF link or file in public/
  aboutCards: [
    {
      id: "card-status",
      label: "Current Status",
      value: "Undergraduate Student",
      subtext: "3rd Year BS Information Technology",
      icon: "GraduationCap",
    },
    {
      id: "card-field",
      label: "Field of Interest",
      value: "IT & Software Development",
      subtext: "Web Development & Databases",
      icon: "Code",
    },
    {
      id: "card-availability",
      label: "Availability",
      value: "Open to Internship / OJT",
      subtext: "Mid 2026 / Academic Requirement",
      icon: "CheckCircle",
      highlight: true,
    },
    {
      id: "card-location",
      label: "Location",
      value: "Manila, Philippines",
      subtext: "Available for On-site or Remote",
      icon: "MapPin",
    },
  ],
};

export const skillsData = {
  categories: [
    {
      title: "Programming",
      icon: "Code",
      skills: [
        { name: "JavaScript", level: "Intermediate", percent: 75 },
        { name: "Python", level: "Intermediate", percent: 70 },
        { name: "PHP", level: "Intermediate", percent: 65 },
        { name: "HTML5", level: "Intermediate", percent: 85 },
        { name: "CSS3", level: "Intermediate", percent: 80 },
      ],
    },
    {
      title: "Frameworks & Libraries",
      icon: "Layers",
      skills: [
        { name: "React.js", level: "Intermediate", percent: 72 },
        { name: "Node.js", level: "Developing", percent: 60 },
        { name: "Tailwind CSS", level: "Intermediate", percent: 78 },
      ],
    },
    {
      title: "Databases",
      icon: "Database",
      skills: [
        { name: "MySQL", level: "Intermediate", percent: 70 },
        { name: "Firebase", level: "Developing", percent: 62 },
        { name: "Firestore", level: "Developing", percent: 60 },
      ],
    },
    {
      title: "Tools & Workflow",
      icon: "Wrench",
      skills: [
        { name: "Git", level: "Intermediate", percent: 75 },
        { name: "GitHub", level: "Intermediate", percent: 75 },
        { name: "VS Code", level: "Intermediate", percent: 85 },
        { name: "Figma", level: "Familiar", percent: 58 },
      ],
    },
    {
      title: "Core Concepts & Others",
      icon: "Cpu",
      skills: [
        { name: "REST APIs", level: "Intermediate", percent: 70 },
        { name: "Authentication", level: "Developing", percent: 65 },
        { name: "CRUD Operations", level: "Intermediate", percent: 80 },
        { name: "Responsive Web Design", level: "Intermediate", percent: 82 },
        { name: "Database Design", level: "Intermediate", percent: 68 },
        { name: "UI/UX Principles", level: "Familiar", percent: 60 },
      ],
    },
  ],
  levelsLegend: [
    {
      name: "Familiar",
      description: "Basic knowledge and classroom exposure; able to understand syntax and concepts.",
    },
    {
      name: "Developing",
      description: "Actively building projects; understanding core logic and debugging with documentation.",
    },
    {
      name: "Intermediate",
      description: "Comfortable building functional applications independently with established best practices.",
    },
  ],
};

export const projectsData = [
  {
    id: "docuflow",
    title: "DocuFlow",
    tagline: "Centralized Document Management & Workflow Approval System",
    category: "Document Management System",
    badge: "Academic Capstone / Team Project",
    summary:
      "A centralized web-based document management platform designed to organize document submissions, approvals, requirements, and retrieval workflows.",
    problem:
      "Academic and administrative departments often suffer from lost submissions, delayed paper approvals, and lack of accountability in document routing.",
    solution:
      "Engineered an automated web portal where students and staff can upload documents, track review statuses in real time, and receive notification logs at every stage.",
    technologies: ["React.js", "Node.js", "MySQL", "Tailwind CSS"],
    role: "Full-Stack Developer (Frontend UI, Database Schema & Routing Logic)",
    features: [
      "Role-based access control (Admin, Approver, Submitter)",
      "Document submission with multi-format validation",
      "Multi-stage approval workflow with status markers",
      "Deadline tracking and urgent submission alerts",
      "Real-time document tracking audit log",
      "Comprehensive administrative dashboard with metrics",
    ],
    github: "https://github.com/alexmorgan/docuflow-dms",
    demo: "https://docuflow-demo.example.com",
    caseStudy: {
      overview:
        "DocuFlow was conceptualized to address bottlenecks in departmental paper processes. The goal was to eliminate physical paper routing while ensuring strict authorization hierarchies.",
      architecture: [
        "Frontend: React.js with modular component structure and Tailwind CSS for responsive styling.",
        "Backend: Node.js Express REST API handling authentication tokens, file processing, and routing.",
        "Database: Relational MySQL schema with foreign key constraints across users, documents, and logs.",
      ],
      databaseHighlights:
        "Designed tables for Users, Roles, Documents, Approvals, and AuditLogs with timestamp indexing for fast retrieval.",
      challengesAndLearnings:
        "Managing multi-tier document status state transitions taught me how to structure predictable database transactions and prevent race conditions when two approvers review simultaneously.",
      keyMetrics: [
        { label: "Target Users", val: "Students & Staff" },
        { label: "Architecture", val: "REST API + SPA" },
        { label: "Security", val: "Role-Based ACL" },
      ],
    },
  },
  {
    id: "stayease",
    title: "StayEase",
    tagline: "Accommodation Browsing & Reservation Platform Concept",
    category: "Accommodation Management Platform",
    badge: "Independent / Academic Project",
    summary:
      "A web application concept for browsing accommodations, managing user accounts, and handling online reservations.",
    problem:
      "Students and young professionals relocating to university towns struggle to find verified, budget-friendly accommodations with clear amenities and transparent reservation rules.",
    solution:
      "Developed a clean, user-friendly reservation portal with filterable property catalogs, saved favorites, Google authentication, and booking confirmation simulation.",
    technologies: ["React.js", "Firebase", "Firestore", "JavaScript"],
    role: "Frontend Developer & Cloud Database Integration",
    features: [
      "Secure user authentication with Google Sign-In & Email",
      "Dynamic property listings with amenity tags and pricing",
      "Real-time Firestore query filtering by city & price",
      "Personalized user profile and booking history dashboard",
      "Interactive reservation management and date picker",
      "Simulated payment integration flow and receipt generation",
    ],
    github: "https://github.com/alexmorgan/stayease-app",
    demo: "https://stayease-demo.example.com",
    caseStudy: {
      overview:
        "StayEase demonstrates real-time cloud database synchronization and responsive UI design tailored for mobile-first students seeking dormitory and apartment rentals.",
      architecture: [
        "Frontend: React.js leveraging modern hooks for state management and responsive CSS grid.",
        "Backend as a Service: Firebase Auth for instant secure OAuth sign-in.",
        "Database: Cloud Firestore with reactive snapshots for instant UI updates.",
      ],
      databaseHighlights:
        "Utilized Firestore collections for 'accommodations', 'users', and 'reservations' with security rules ensuring users only modify their own booking data.",
      challengesAndLearnings:
        "Working with NoSQL documents taught me how to structure denormalized data effectively to minimize read costs and achieve instant filter responses.",
      keyMetrics: [
        { label: "Database", val: "Cloud Firestore" },
        { label: "Auth Flow", val: "Google OAuth" },
        { label: "Layout", val: "Mobile-First" },
      ],
    },
  },
  {
    id: "pharmacart",
    title: "PharmaCart",
    tagline: "Web-based Pharmacy Catalog & Prescription Ordering System",
    category: "Pharmacy E-Commerce System",
    badge: "Web Systems Coursework Project",
    summary:
      "A web-based pharmacy ordering platform designed to manage products, customer orders, prescriptions, and delivery information.",
    problem:
      "Community pharmacies during busy periods struggle to process prescription verification and manage inventory without long queues or order errors.",
    solution:
      "Built a full-featured PHP/MySQL e-commerce platform allowing customers to securely upload prescription photos, browse categorized medicines, apply discount vouchers, and track delivery progress.",
    technologies: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3"],
    role: "Backend & Database Developer (PHP MVC, Relational DB & Cart Logic)",
    features: [
      "Comprehensive product catalog with categorized medicines",
      "Interactive shopping cart with quantity management",
      "Secure prescription upload verification workflow",
      "Multi-step checkout with delivery address capture",
      "Admin order management with status updates",
      "Discount voucher and promo code calculation system",
      "Real-time delivery milestone tracking interface",
    ],
    github: "https://github.com/alexmorgan/pharmacart-ecommerce",
    demo: "https://pharmacart-demo.example.com",
    caseStudy: {
      overview:
        "PharmaCart was built to demonstrate classic server-rendered web engineering, session management, sanitized input processing, and relational database integrity in an e-commerce context.",
      architecture: [
        "Server Logic: PHP 8 with modular procedural / MVC separation.",
        "Database: MySQL with InnoDB engine enforcing foreign key relationships and transactions.",
        "Client: Vanilla JavaScript for dynamic cart interactions and form validation.",
      ],
      databaseHighlights:
        "Structured tables: products, categories, orders, order_items, prescriptions, vouchers, and customers.",
      challengesAndLearnings:
        "Learned how to handle file uploads securely (MIME validation, size limits, hashed filenames) and how to handle inventory decrementing within SQL transactions.",
      keyMetrics: [
        { label: "Core Stack", val: "PHP 8 & MySQL" },
        { label: "Cart State", val: "PHP Sessions" },
        { label: "Validation", val: "Server & Client" },
      ],
    },
  },
];

export const experienceData = [
  {
    id: "exp-1",
    role: "Student Software Developer",
    organization: "Academic Project Team",
    period: "2025 – 2026",
    type: "Academic Team Project",
    isDummy: true,
    description:
      "Worked collaboratively on web-based academic projects involving frontend development, database design, system functionality, and documentation.",
    responsibilities: [
      "Collaborated with a 4-member student team using Git/GitHub for branching and pull requests.",
      "Designed responsive user interfaces using modern CSS and React components.",
      "Participated in database normalization exercises (1NF to 3NF) for academic project databases.",
      "Prepared technical documentation, system flowcharts, and user guides for capstone presentations.",
    ],
  },
  {
    id: "exp-2",
    role: "Junior Web Development Intern",
    organization: "Sample Technology Company",
    period: "2026 (Sample Internship)",
    type: "Simulated Internship / Practicum",
    isDummy: true,
    description:
      "Assisted senior engineers with frontend styling updates, debugging client-side tickets, and writing clean HTML/CSS/JavaScript components.",
    responsibilities: [
      "Fixed UI responsiveness bugs across mobile and desktop breakpoints.",
      "Tested and verified REST API endpoint responses using Postman.",
      "Created reusable UI components following existing design guidelines.",
      "Attended weekly standups and learned agile workflow fundamentals.",
    ],
  },
];

export const certificationsData = [
  {
    id: "cert-1",
    title: "Web Development Fundamentals",
    issuer: "Sample Learning Institute",
    year: "2026",
    badge: "Sample Certificate",
    isDummy: true,
    credentialId: "CERT-SAMPLE-2026-001",
    skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    verificationUrl: "#cert-verify-sample",
  },
  {
    id: "cert-2",
    title: "Introduction to Cybersecurity",
    issuer: "Sample Technology Academy",
    year: "2025",
    badge: "Sample Certificate",
    isDummy: true,
    credentialId: "CERT-SAMPLE-2025-042",
    skills: ["Network Security Basics", "Safe Coding", "Threat Analysis"],
    verificationUrl: "#cert-verify-sample",
  },
  {
    id: "cert-3",
    title: "Database Fundamentals",
    issuer: "Sample Online Academy",
    year: "2025",
    badge: "Sample Certificate",
    isDummy: true,
    credentialId: "CERT-SAMPLE-2025-089",
    skills: ["SQL Queries", "Relational Modeling", "Normalization"],
    verificationUrl: "#cert-verify-sample",
  },
];

export const educationData = {
  degree: "Bachelor of Science in Information Technology",
  institution: "Sample State University",
  period: "2023 – Present",
  expectedGraduation: "Expected Graduation: 2027",
  status: "3rd Year Undergraduate",
  isDummy: true,
  description:
    "Pursuing a comprehensive curriculum in Information Technology focused on software development, systems analysis, database management, and emerging web technologies.",
  coursework: [
    { name: "Web Development", code: "IT-301", highlight: true },
    { name: "Database Management", code: "IT-204", highlight: true },
    { name: "System Administration", code: "IT-312" },
    { name: "Cybersecurity Basics", code: "IT-320" },
    { name: "Programming Fundamentals", code: "IT-101" },
    { name: "Software Engineering", code: "IT-305", highlight: true },
    { name: "Data Structures & Algorithms", code: "IT-201" },
    { name: "Networking Fundamentals", code: "IT-208" },
  ],
};

export const achievementsData = [
  {
    id: "ach-1",
    title: "Academic Excellence Award",
    issuer: "College of Information Technology",
    year: "2025 – 2026",
    isDummy: true,
    description:
      "Recognized on the Dean's Honor List for maintaining high academic standing in major technical coursework.",
  },
  {
    id: "ach-2",
    title: "Best Web Application Project",
    issuer: "University IT Showcase",
    year: "2025",
    isDummy: true,
    description:
      "Awarded Best Project in Web Systems course for developing the DocuFlow document management system prototype.",
  },
  {
    id: "ach-3",
    title: "Finalist — University Hackathon",
    issuer: "Campus Developer Society",
    year: "2025",
    isDummy: true,
    description:
      "Built a prototype campus navigation tool with a student team in a 24-hour university coding competition.",
  },
  {
    id: "ach-4",
    title: "Outstanding Project Presentation",
    issuer: "Department Capstone Colloquium",
    year: "2024",
    isDummy: true,
    description:
      "Commended for clear technical communication, architectural diagrams, and live system demonstration.",
  },
];

export const organizationsData = [
  {
    id: "org-1",
    name: "University Computing Society",
    role: "Technical Committee Member",
    period: "2024 – Present",
    isDummy: true,
    description:
      "Assisted in coordinating technical workshops, coding bootcamps, and peer tutoring sessions for junior IT students.",
  },
  {
    id: "org-2",
    name: "Cybersecurity Awareness Workshop",
    role: "Participant & Student Volunteer",
    period: "2025",
    isDummy: true,
    description:
      "Participated in hands-on lab sessions covering phishing prevention, password security, and basic vulnerability testing.",
  },
  {
    id: "org-3",
    name: "University Web Development Competition",
    role: "Project Team Member",
    period: "2025",
    isDummy: true,
    description:
      "Collaborated on designing and presenting interactive web solutions addressing campus student life challenges.",
  },
];

export const resumeData = {
  title: "Alex Morgan - Curriculum Vitae",
  version: "Student Edition (Placeholder)",
  summary:
    "Motivated 3rd Year Information Technology student seeking an internship / OJT position in software development or web engineering. Eager to contribute hands-on skills in JavaScript, React, PHP, and SQL while learning in a collaborative professional environment.",
  sections: [
    {
      title: "Education",
      items: [
        "Bachelor of Science in Information Technology (Sample State University, 2023 – Present, Exp. 2027)",
      ],
    },
    {
      title: "Core Technical Skills",
      items: [
        "Languages: JavaScript (ES6+), Python, PHP, HTML5, CSS3, SQL",
        "Frameworks & Tools: React.js, Node.js, Tailwind CSS, Git/GitHub, VS Code, Figma",
        "Databases: MySQL, Firebase, Cloud Firestore",
      ],
    },
    {
      title: "Key Projects",
      items: [
        "DocuFlow (React, Node.js, MySQL): Role-based document workflow platform",
        "StayEase (React, Firebase): Accommodation booking application prototype",
        "PharmaCart (PHP, MySQL): Pharmacy e-commerce and prescription verification system",
      ],
    },
    {
      title: "Certifications & Training (Sample)",
      items: [
        "Web Development Fundamentals (Sample Learning Institute, 2026)",
        "Database Fundamentals (Sample Online Academy, 2025)",
        "Introduction to Cybersecurity (Sample Technology Academy, 2025)",
      ],
    },
  ],
};
