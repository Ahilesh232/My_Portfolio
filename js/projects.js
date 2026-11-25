/* ==========================================================
   EDIT ME — all portfolio content lives here.
   Leave a field empty ("" or null) and the site hides it.
   ========================================================== */

window.SITE = {
  name: "Ahilesh V",
  title: "Software Developer | Python | AI & Data Science",
  email: "ahilesh232@gmail.com",
  github: "https://github.com/Ahilesh232",
  linkedin: "https://www.linkedin.com/in/ahilesh-v-b1ab7829b",
  resume: "assets/Ahilesh_Resume.pdf",
  profileImage: "assets/images/profile.jpg"
};

/* Project fields: id, index, title, category, filters[], engine (stack),
   platform, languages, year, status, summary, details, features[], tags[],
   image, video, art, links [{label,url}] */
window.PROJECTS = [
  {
    id: "sql-rag-ecommerce",
    index: "01",
    title: "SQL-RAG E-Commerce Intelligence System",
    category: "Full Stack / AI",
    filters: ["AI / RAG", "Full Stack"],
    engine: "FastAPI + React.js",
    platform: "Web",
    languages: "Python, SQL, JavaScript",
    year: "2026",
    status: "Completed",
    summary: "An AI-powered analytics platform that lets users query SQL databases in plain English and get business insights without writing SQL.",
    details: "Built a complete AI analytics pipeline that converts user questions into SQL queries, retrieves relevant business data, and generates human-readable explanations. It combines LLMs, Retrieval-Augmented Generation and SQL, and improves accessibility for non-technical users through an intuitive web interface.",
    features: [
      "Natural language to SQL query generation",
      "AI-powered business analytics assistant",
      "Retrieval-Augmented Generation (RAG) integration",
      "Automatic database retrieval and summarization",
      "Interactive analytics dashboard",
      "Secure SQL query execution",
      "Real-time business insights"
    ],
    tags: ["Python", "FastAPI", "React.js", "SQL", "LangChain", "LangGraph", "RAG", "LLMs", "SQLite/MySQL"],
    image: "assets/images/ecommerce.jpg",
    video: null,
    art: "art--ai",
    links: [{ label: "Source Code", url: "https://github.com/Ahilesh232/SQL-RAG-Based-E-Commerce-Intelligence-System" }]
  },
  {
    id: "contract-analysis",
    index: "02",
    title: "AI Contract Analysis System",
    category: "Machine Learning / NLP",
    filters: ["AI / RAG", "NLP"],
    engine: "Streamlit + LangChain",
    platform: "Web",
    languages: "Python",
    year: "2025",
    status: "Completed",
    summary: "A document-intelligence app that examines legal agreements, flags risks, extracts key clauses and generates structured summaries.",
    details: "Built a document intelligence application that processes PDF contracts, classifies legal clauses, identifies financial and compliance risks, and explains findings through an interactive Streamlit interface, reducing manual contract review time. Developed during the Infosys Springboard virtual internship.",
    features: [
      "PDF contract upload and analysis",
      "Automatic clause extraction",
      "Risk identification and categorization",
      "AI-generated contract summaries",
      "Multi-agent reasoning for legal analysis",
      "Interactive Streamlit dashboard",
      "NLP-powered document understanding"
    ],
    tags: ["Python", "Streamlit", "NLP", "LangChain", "LangGraph", "LLMs", "FAISS", "Pinecone"],
    image: "assets/images/contract.jpg",
    video: null,
    art: "art--ai",
    links: [{ label: "Source Code", url: "https://github.com/Ahilesh232/Infosys_intern_AI-based-project-" }]
  },
  {
    id: "healthcare-recommendation",
    index: "03",
    title: "Healthcare Recommendation System",
    category: "AI / Healthcare",
    filters: ["AI / RAG", "Full Stack"],
    engine: "FastAPI + React.js",
    platform: "Web",
    languages: "Python, JavaScript",
    year: "2026",
    status: "Completed",
    summary: "A RAG and LLM-based assistant that turns symptom descriptions into educational guidance, specialist suggestions and first-aid tips.",
    details: "Built an AI-driven healthcare recommendation platform where users describe symptoms in natural language. A RAG pipeline retrieves information from trusted medical sources (WHO, CDC, NIH), an LLM analyzes the context, and the app suggests possible conditions, specialists, preventive care, emergency alerts and nearby facilities. For educational use only; it does not replace professional medical diagnosis or treatment.",
    features: [
      "Natural language symptom analysis",
      "Retrieval-Augmented Generation (RAG) pipeline",
      "Trusted medical knowledge retrieval (WHO, CDC, NIH)",
      "Specialist recommendation based on symptoms",
      "Nearby hospital and clinic recommendations",
      "First-aid and preventive healthcare suggestions",
      "AI chatbot for healthcare queries",
      "Explainable AI recommendations",
      "User authentication and medical history",
      "Emergency alerts for critical symptoms"
    ],
    tags: ["React.js", "Python", "FastAPI", "LangChain", "LangGraph", "RAG", "LLMs", "FAISS", "Pinecone", "MySQL"],
    image: "assets/images/healthcare.jpg",
    video: null,
    art: "art--health",
    links: [{ label: "Source Code", url: "https://github.com/Ahilesh232/AI_Healthcare_Assistant" }]
  },
  {
    id: "smart-business-analytics",
    index: "04",
    title: "Smart Business Analytics Platform",
    category: "Full Stack / AI",
    filters: ["AI / RAG", "Full Stack", "Data Analytics"],
    engine: "FastAPI + React.js",
    platform: "Web",
    languages: "Python, JavaScript",
    year: "2026",
    status: "Completed",
    summary: "Upload CSV or Excel data and instantly get KPI dashboards, ML sales forecasts, AI insights and a conversational data assistant.",
    details: "Built a full-stack business intelligence platform that cleans and processes uploaded datasets, computes KPIs, visualizes trends with interactive charts, forecasts future sales using machine learning, and generates AI recommendations. A chat assistant answers business questions in natural language using real computed data.",
    features: [
      "CSV and Excel dataset upload",
      "Automatic data cleaning and preprocessing",
      "Intelligent column detection",
      "Interactive KPI dashboard",
      "Revenue, profit, customer and regional analytics",
      "Machine learning sales forecasting",
      "AI-generated insights and recommendations",
      "Natural language analytics chatbot",
      "Historical chat and dataset management",
      "Responsive SaaS-style interface"
    ],
    tags: ["React.js", "Vite", "Tailwind CSS", "Chart.js", "FastAPI", "SQLAlchemy", "Pandas", "Scikit-learn", "OpenAI API"],
    image: "assets/images/smartbiz.jpg",
    video: null,
    art: "art--data",
    links: [{ label: "Source Code", url: "https://github.com/Ahilesh232/Smart-Business-Analytics-Platform" }]
  },
  {
    id: "food-delivery",
    index: "05",
    title: "Responsive Food Delivery System",
    category: "Web Development",
    filters: ["Web"],
    engine: "React.js + Vite",
    platform: "Web",
    languages: "JavaScript, HTML, CSS",
    year: "2025",
    status: "Completed",
    summary: "A responsive food-ordering app for browsing restaurants, exploring menus, building a cart and placing orders.",
    details: "Built a modern frontend application focused on responsive UI design, efficient state management and smooth user experience. It simulates a real-world food delivery platform using reusable React components.",
    features: [
      "Responsive mobile-friendly design",
      "Restaurant and menu browsing",
      "Shopping cart functionality",
      "Dynamic product listings",
      "Fast navigation with React",
      "Reusable component architecture"
    ],
    tags: ["React.js", "Vite", "JavaScript", "HTML", "CSS"],
    image: "assets/images/food.jpg",
    video: null,
    art: "art--web",
    links: [{ label: "Source Code", url: "https://github.com/Ahilesh232/Food-Delivery--react-js" }]
  },
  {
    id: "kkr-website-clone",
    index: "06",
    title: "Karthikesh Robotics Website Clone",
    category: "Frontend Development",
    filters: ["Web"],
    engine: "HTML + CSS + JS",
    platform: "Web",
    languages: "HTML, CSS, JavaScript",
    year: "2024",
    status: "Completed",
    summary: "A fully responsive clone of the Karthikesh Robotics and Automation website, recreating its layouts, navigation and interactions.",
    details: "Recreated the modern interface, responsive layouts and interactive components of the company website to sharpen frontend skills: layout accuracy, responsive design principles and reusable UI components across devices.",
    features: [
      "Responsive website design",
      "Interactive navigation bar",
      "Modern landing page",
      "Mobile-friendly layouts",
      "Image galleries and banners",
      "Smooth scrolling effects"
    ],
    tags: ["HTML", "CSS", "JavaScript"],
    image: "assets/images/kkr.jpg",
    video: null,
    art: "art--web",
    links: [{ label: "Source Code", url: "https://github.com/Ahilesh232/KKR-web-clone" }]
  }
];

window.SKILLS = [
  {
    group: "Programming", items: [
      { name: "Python", abbr: "Py", note: "Primary language for AI & backend work" },
      { name: "Java (Basics)", abbr: "Jv", note: "OOP fundamentals" },
      { name: "C", abbr: "C", note: "Programming foundations" }]
  },
  {
    group: "Web & Databases", items: [
      { name: "React.js", abbr: "Re", note: "Component-based frontends" },
      { name: "FastAPI", abbr: "API", note: "Backend REST APIs" },
      { name: "HTML5 · CSS3 · JavaScript", abbr: "Web", note: "Responsive interfaces" },
      { name: "MySQL · SQLite", abbr: "DB", note: "Relational data & queries" }]
  },
  {
    group: "Data Analytics & BI", items: [
      { name: "SQL", abbr: "SQL", note: "Joins, window functions, subqueries" },
      { name: "Power BI", abbr: "BI", note: "DAX, data modeling, dashboards" },
      { name: "Excel · Tableau · Sheets", abbr: "XL", note: "Pivot tables, VLOOKUP, charts" }]
  },
  {
    group: "AI & Machine Learning", items: [
      { name: "LLMs · RAG · LangChain", abbr: "AI", note: "Retrieval-augmented applications" },
      { name: "FAISS", abbr: "VEC", note: "Vector search" },
      { name: "Pandas · NumPy · Scikit-learn", abbr: "ML", note: "Analysis, modeling, forecasting" },
      { name: "Matplotlib · Seaborn", abbr: "Viz", note: "Data visualization" }]
  }
];

window.TIMELINE = [
  { when: "2021 – 2022", quest: "// EDUCATION", title: "Higher Secondary (HSC)", text: "Christian Matriculation Higher Secondary School, Dindigul, Tamil Nadu.Percentage:81%." },
  { when: "2022 – 2026", quest: "// EDUCATION", title: "B.E. Computer Science & Engineering", text: "NPR College of Engineering & Technology, Dindigul, Tamil Nadu. CGPA: 8.16." },
  { when: "Internship", quest: "// WEB DEVELOPMENT", title: "Web Development Intern • Karthikesh Robotics", text: "Built and optimized dynamic, responsive websites using modern web technologies. Madurai." },
  { when: "Internship", quest: "// DATA ANALYTICS", title: "Data Analytics Intern • Innervex Technologies", text: "Applied Python and MySQL for data analysis and visualization to derive business insights. Coimbatore." },
  { when: "Virtual Internship", quest: "// AI", title: "AI Virtual Intern • Infosys Springboard", text: "Completed an internship focused on AI-based document analysis and contract risk assessment." },
  { when: "Internship", quest: "// DATA SCIENCE & AI", title: "Data Science Intern • BDreamz Global Solutions Pvt. Ltd., Chennai ", text: "Performed data cleaning, exploratory data analysis (EDA), feature engineering, and developed regression and classification models using Python, Pandas, NumPy, and machine learning techniques through hands-on projects." },
  { when: "Certifications", quest: "// CREDENTIALS", title: "Certifications & Programs", text: "Data Science & AI Training (Campus Connect)| Besant Technologies; Advanced Diploma in Computer Programming (CADD CAE Computers); Google Cybersecurity Professional Certificate (Coursera); Fundamentals of Information Security & Intro to Data Science (Infosys Springboard); Forage virtual programs in AWS Solutions Architecture and Tata GenAI Powered Data Analytics." }
];
