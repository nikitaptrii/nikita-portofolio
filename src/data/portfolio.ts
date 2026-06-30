export const profile = {
  name: "Nikita Putri Prabowo",
  role: "Computer Science Student & Software Engineer",
  location: "West Java, Indonesia",
  email: "nikitaprabowo27@gmail.com",
  phone: "+62 812 8210 9806",
  linkedin: "https://www.linkedin.com/in/nikita270905",
  github: "https://github.com/nikitaptrii",
  resume: "/Nikita-Putri-Prabowo-CV.pdf",
  summary:
    "Computer Science student at Universitas Padjadjaran with experience in software development, web application development, project management, and data science. I enjoy translating business needs into scalable technical solutions and building user-focused digital products.",
  stats: [
    { value: "3.83", label: "GPA / 4.00" },
    { value: "16+", label: "Website pages designed" },
    { value: "8", label: "Agile sprints led" },
    { value: "99%+", label: "Testing coverage achieved" }
  ]
};

export const education = {
  school: "Universitas Padjadjaran",
  degree: "Bachelor of Computer Science",
  period: "Aug 2023 — Aug 2027 expected",
  location: "Sumedang, Indonesia",
  details: [
    "Cumulative GPA: 3.83 / 4.00",
    "Relevant courses: Web Development, Software Engineering, Database Systems, Artificial Intelligence, Machine Learning, System Analysis & Design, Project Management, Data Mining"
  ]
};

export const experiences = [
  {
    company: "Universitas Padjadjaran",
    role: "Frontend Developer Internship",
    period: "Mar 2026 — Jun 2026",
    description: [
      "Designed and implemented UI/UX for 16+ website pages for the AHS Universitas Padjadjaran platform.",
      "Developed responsive WordPress website interfaces optimized for desktop, tablet, and mobile devices.",
      "Collaborated with stakeholders to transform requirements into functional, accessible, and visually appealing web pages.",
      "Maintained website quality through performance optimization and cross-browser compatibility testing."
    ]
  },
  {
    company: "Kementerian PPN/Bappenas",
    role: "Project Manager Internship",
    period: "Jan 2026 — Feb 2026",
    description: [
      "Managed project workflows and task tracking using Coda to improve coordination and project visibility.",
      "Monitored project timelines and followed up on task completion to support timely milestone delivery.",
      "Reviewed project requirements and relevant government regulations to support application development activities.",
      "Coordinated communication among team members and stakeholders to facilitate smooth project execution."
    ]
  },
  {
    company: "Klinkgo x Rakamin Academy",
    role: "Project-Based Virtual Intern as System Analyst",
    period: "Sep 2025",
    description: [
      "Conducted user requirement analysis and translated business needs into detailed system specifications.",
      "Designed UML diagrams and ERD models to visualize structures, business processes, and workflows.",
      "Defined and documented 20+ functional requirements to support early-stage system design and development."
    ]
  }
];

export const projects = [
  {
    title: "CareConnect",
    role: "Project Manager, Scrum Master, Quality Assurance",
    period: "Mar 2026 — Jun 2026",
    link: "https://care-connect-ten-hazel.vercel.app/",
    tags: ["Project Management", "QA", "Vitest", "UX Research"],
    summary:
      "Responsive mental health support platform with anonymous reporting, psychologist consultation, community support, donations, dashboards, and AI Insight.",
    highlights: [
      "Led Agile planning across 8 sprints and coordinated frontend–backend collaboration.",
      "Documented 20+ functional requirements, role-based workflows, UML diagrams, ERD, test scenarios, and technical documentation.",
      "Achieved 99.15% statement coverage and 99.35% line coverage through Vitest-based QA.",
      "Conducted usability evaluation with SUS score of 78.94 and positive UEQ scores across all 6 dimensions."
    ],
    featured: true
  },
  {
    title: "Loan Predictor",
    role: "Frontend Developer, Machine Learning Trainer",
    period: "Mar 2026 — Apr 2026",
    link: "https://loan-prediction-loaniq.streamlit.app/",
    tags: ["Python", "Streamlit", "Neuro-Fuzzy", "Machine Learning"],
    summary:
      "End-to-end loan prediction web application with interactive dashboards and real-time user input analysis.",
    highlights: [
      "Built machine learning prediction workflow using Python, Streamlit, and Neuro-Fuzzy algorithms.",
      "Achieved approximately 76% prediction accuracy through feature engineering and model optimization.",
      "Integrated model outputs into a user-friendly decision support interface."
    ]
  },
  {
    title: "AZKO Data Warehouse",
    role: "Data Warehouse Developer",
    period: "2026",
    link: "https://github.com/Robaz04/azko-warehouse",
    tags: ["Data Warehouse", "ETL", "PostgreSQL", "MySQL", "OLAP"],
    summary:
      "Cloud-ready data warehouse project that transforms sales, warehouse, and marketing OLTP data into a BI-ready star schema.",
    highlights: [
      "Designed a PostgreSQL star schema with 7 dimension tables and a fact_sales table for analytical reporting.",
      "Built a Python ETL pipeline to extract data from multiple MySQL OLTP sources, transform it, and load it into the data warehouse.",
      "Prepared analytical SQL queries for monthly sales, top products, branch profitability, campaign effectiveness, customer segmentation, and payment analysis.",
      "Configured a GitHub Actions workflow for scheduled daily ETL runs and optional dummy data generation."
    ]
  },
  {
    title: "Analisis Sentimen Peron Wanita",
    role: "Machine Learning Developer",
    period: "2026",
    link: "https://github.com/Mes1205/Analisis-Sentimen-Peron-Wanita",
    tags: ["NLP", "PyTorch", "ANFIS", "Streamlit", "PySastrawi"],
    summary:
      "Indonesian sentiment analysis application that classifies user comments into negative, neutral, or positive sentiment.",
    highlights: [
      "Developed a Streamlit interface for entering comments and displaying sentiment labels with class probabilities.",
      "Implemented Indonesian text preprocessing including normalization, tokenization, stopword removal, and stemming.",
      "Integrated an ANFIS-based PyTorch classifier with TF-IDF and lexicon-based features for sentiment prediction."
    ]
  },
  {
    title: "MediCare+",
    role: "Project Manager",
    period: "Aug 2025 — Dec 2025",
    link: "https://medi-care-rosy.vercel.app/",
    tags: ["Healthcare", "Project Management", "Web App", "QA"],
    summary:
      "Multi-role healthcare web application for hospital pharmacy digital queue and medicine delivery.",
    highlights: [
      "Led product development involving patients, pharmacists, couriers, and administrators.",
      "Managed task allocation, sprint coordination, requirement analysis, feature prioritization, and QA.",
      "Facilitated collaboration between technical and non-technical stakeholders."
    ]
  },
  {
    title: "BISINDO Alphabet Recognition",
    role: "Machine Learning Trainer",
    period: "Apr 2025 — Jun 2025",
    link: "https://github.com/nikitaptrii/Deteksi-Huruf-BISINDO-Kelompok6",
    tags: ["Computer Vision", "TensorFlow", "OpenCV", "CNN"],
    summary:
      "Computer vision application for real-time BISINDO alphabet gesture recognition.",
    highlights: [
      "Trained a CNN model achieving around 85% accuracy for BISINDO alphabet gestures.",
      "Built real-time detection and classification using Python, TensorFlow, and OpenCV."
    ]
  },
  {
    title: "Loyalitics Decision Maker",
    role: "Main Developer",
    period: "May 2025 — Oct 2025",
    link: "https://loyalitics-desicionmaker.streamlit.app/",
    tags: ["Python", "Streamlit", "Random Forest", "Data Visualization"],
    summary:
      "Customer churn analysis platform with segmentation insights and interactive business dashboards.",
    highlights: [
      "Implemented Random Forest, Decision Tree, and K-Means for customer insights.",
      "Automated data processing workflows to reduce manual analysis effort."
    ]
  }
];

export const skills = [
  {
    group: "Programming",
    items: ["Python", "JavaScript", "TypeScript", "SQL", "PHP"]
  },
  {
    group: "Web Development",
    items: ["React", "Next.js", "Laravel", "Tailwind CSS", "HTML", "CSS"]
  },
  {
    group: "Machine Learning & AI",
    items: ["TensorFlow", "PyTorch", "OpenCV", "CNN", "Random Forest", "Decision Tree", "K-Means", "NLP", "LLM", "RAG"]
  },
  {
    group: "Data",
    items: ["Data Cleaning", "Preprocessing", "Visualization", "Validation", "Feature Engineering", "Text Classification", "ETL", "Data Warehouse"]
  },
  {
    group: "Testing & Documentation",
    items: [
      "Postman",
      "Vitest",
      "Laravel Dusk",
      "Black Box Testing",
      "User Acceptance Testing (UAT)",
      "Requirement Analysis",
      "Quality Assurance (QA)",
      "UML",
      "ERD",
      "Technical Documentation"
    ]
  },
  {
    group: "Tools & Collaboration",
    items: ["Git", "GitHub", "Streamlit", "Figma", "Trello", "Leadership", "Teamwork"]
  }
];

export const leadership = [
  {
    title: "External Affairs Staff",
    organization: "Himatif FMIPA Unpad",
    period: "Feb 2024 — Dec 2025",
    points: [
      "Secured 15+ partnerships and managed 20+ media collaborations.",
      "Initiated 5+ collaboration and benchmarking programs with external institutions.",
      "Published monthly social media content with up to 51K+ views."
    ]
  },
  {
    title: "Marketing and Branding Manager",
    organization: "Informatics Festival x Himatif Unpad",
    period: "May 2025 — Oct 2025",
    points: [
      "Increased Instagram followers by 400+ through targeted content strategy.",
      "Maintained weekly digital presence with at least 4 posts per week.",
      "Contributed to attracting 1000+ participants across the event series."
    ]
  },
  {
    title: "Project Supervisor",
    organization: "Informatics Festival x Himatif Unpad",
    period: "May 2024 — Oct 2024",
    points: [
      "Coordinated 1 department and 3 divisions to deliver IFEST 2024 for 400+ participants.",
      "Collaborated with 10+ committee leads and stakeholders to complete key milestones on time."
    ]
  }
];

export const navigation = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" }
];