// Project Detail Data
const projectsData = {
    "fruit-app": {
        id: "fruit-app",
        title: "Fruit Classifier CNN Mobile",
        category: "AI/ML Research",
        tagline: "Android application for classifying 10 tropical fruits using Convolutional Neural Network (CNN)",
        heroImage: "../assets/images/projects/fruit-app.png",
        timeline: "6 Months (Thesis Project)",
        team: "Solo Research Project",
        completion: "100%",
        status: "Completed - Thesis Project",

        // Problem Background
        problemBackground: `
            <p>As a tropical country, Indonesia has a high diversity of fruits, but identifying tropical fruits often becomes a challenge for the general public, traders, and even the agricultural industry. Many tropical fruits have similar visual characteristics (e.g., snake fruit with scaly skin vs rambutan with soft spines), which causes difficulties in manual identification.</p>
            <p class="mt-4">On the other hand, the application of AI/ML technology in Indonesia's agricultural sector is still limited, especially in the form of mobile applications that can be accessed offline. Previous research shows that existing fruit identification applications often have limitations in accuracy for specific tropical fruits and require stable internet connections.</p>
            <p class="mt-4"><strong>Research Gap:</strong> There is no mobile application that specializes in classifying 10 Indonesian tropical fruits with a CNN model optimized for mobile devices and can run offline with high accuracy.</p>
        `,

        // Project Goals (Research Objectives)
        goals: [
            "Develop a MobileNetV2 CNN model that can classify 10 types of Indonesian tropical fruits with accuracy >90%",
            "Implement the model into an Android application that can run offline (on-device inference)",
            "Optimize the model to have size <50MB and inference time <2 seconds on mid-range devices",
            "Design intuitive UI/UX for various user groups (from children to farmers)",
            "Create a validation system with 75% confidence threshold to increase prediction reliability",
            "Document end-to-end methodology as academic contribution in AI application for mobile"
        ],

        // My Role & Contributions (Personal Value)
        role: [
            "<strong>Researcher & Developer</strong>: Conducted independent research from literature study, dataset preparation, to final implementation",
            "<strong>Dataset Curation</strong>: Collected and curated specific dataset of 10 Indonesian tropical fruits through combination of public datasets and custom collection (total 10,000+ images)",
            "<strong>Model Development</strong>: Trained MobileNetV2 CNN with PyTorch, implemented transfer learning, and performed hyperparameter tuning",
            "<strong>Mobile Optimization</strong>: Converted model to TorchScript and integrated with PyTorch Mobile for optimal Android performance",
            "<strong>Full-Stack Mobile Dev</strong>: Developed Android application from scratch using Kotlin and Jetpack Compose with clean architecture",
            "<strong>User Testing</strong>: Conducted usability testing with 30+ respondents from various backgrounds for UI/UX validation",
            "<strong>Academic Writing</strong>: Wrote research paper and technical documentation as part of final thesis"
        ],

        // Key Features (Technical Implementation)
        features: [
            {
                title: "Real-time Camera Classification",
                description: "Real-time classification through camera with live preview and bounding box visualization"
            },
            {
                title: "Gallery Integration",
                description: "Image selection from gallery with crop and rotate capabilities"
            },
            {
                title: "Confidence Threshold System",
                description: "Prediction validation with 75% threshold - results below threshold marked as 'Not recognized'"
            },
            {
                title: "Detailed Prediction Analytics",
                description: "Complete display: fruit label, confidence score, inference time, timestamp"
            },
            {
                title: "Offline-First Architecture",
                description: "All inference processes run on device without internet connection"
            },
            {
                title: "Modern UI with Jetpack Compose",
                description: "Material Design 3 with dark mode, Android 12+ splash screen, and responsive layout"
            },
            {
                title: "History & Favorites",
                description: "Local storage of classification results with Room Database and bookmark favorites"
            },
            {
                title: "Educational Content",
                description: "Nutrition information, harvest season, and production regions for each fruit"
            }
        ],

        // Application Preview
        preview: [
            {
                type: "image",
                src: "../assets/images/projects/fruit-app.png",
                caption: "Main Interface - Fruit Classification"
            },
            {
                type: "image",
                src: "../assets/images/projects/fruit-app.png",
                caption: "Camera Classification with Results"
            },
            {
                type: "image",
                src: "../assets/images/projects/fruit-app.png",
                caption: "Detailed Fruit Information"
            }
        ],

        // What I Learned (Personal Growth)
        learnings: [
            "<strong>End-to-end ML Pipeline</strong>: Understood complete process from data collection, preprocessing, training, to mobile deployment",
            "<strong>PyTorch Mobile Integration</strong>: Techniques for integrating PyTorch models to Android with memory and performance optimization",
            "<strong>Model Optimization</strong>: Quantization, pruning, and TorchScript conversion to reduce model size by 60% without significant accuracy loss",
            "<strong>Research Methodology</strong>: Conducted structured academic research with rigorous experiment validation",
            "<strong>Cross-disciplinary Skills</strong>: Combined knowledge of Computer Vision, Mobile Development, and UX Design in one product",
            "<strong>Complex Problem-solving</strong>: Solved challenges like handling various lighting conditions, similar fruit differentiation, and mobile memory management",
            "<strong>Academic Writing</strong>: Wrote research paper with proper academic format and comprehensive technical documentation"
        ],

        // Technologies Used (Tech Stack Details)
        technologies: [
            "Kotlin", "Jetpack Compose", "Material Design 3",
            "PyTorch", "TorchScript", "MobileNetV2",
            "Room Database", "CameraX", "Coroutines Flow",
            "Clean Architecture", "MVVM", "Dependency Injection"
        ],

        // Project Links
        links: [
            {
                type: "github",
                url: "https://github.com/NgatourRohman/fruit-classifier-cnn-mobile",
                label: "GitHub Repository (Full Code)"
            },
            {
                type: "documentation",
                url: "../assets/pdf/fruit-classifier-thesis.pdf",
                label: "Research Paper & Documentation"
            }
        ],

        // Challenges Overcome & Solutions
        challenges: [
            "<strong>Dataset Limitation</strong>: Limited tropical fruit dataset - solved with data augmentation (rotation, flip, brightness adjustment) and controlled web scraping",
            "<strong>Model Size vs Accuracy Trade-off</strong>: Initial model 200MB too large - solved with quantization-aware training and selective layer freezing",
            "<strong>Mobile Performance</strong>: Initial inference time 5+ seconds - optimized with batch normalization fusion and GPU acceleration",
            "<strong>Similar Fruit Confusion</strong>: Model often confused snake fruit and rambutan - solved with additional edge case training data",
            "<strong>Memory Management</strong>: Memory leak in continuous camera usage - fixed with proper lifecycle management and bitmap recycling"
        ],

        // Skills Gained (For Resume/CV)
        skills: [
            "Mobile Machine Learning Implementation",
            "PyTorch to Android Integration",
            "CNN Model Optimization for Edge Devices",
            "Research & Academic Paper Writing",
            "Cross-platform AI Solution Design",
            "Performance Profiling & Optimization",
            "User-centered AI Application Design",
            "Technical Documentation & Presentation"
        ],

        // Research Metrics & Results
        researchResults: {
            accuracy: "92.4%",
            modelSize: "38MB",
            inferenceTime: "1.8 seconds",
            datasetSize: "10,500 images",
            classes: "10 tropical fruits",
            validationMethod: "5-fold cross validation",
            testingDevice: "Xiaomi Redmi Note 10"
        },

        // Business/Research Impact
        impact: [
            "Proved feasibility of CNN application for tropical fruit identification on mobile devices",
            "Provided blueprint for research-to-product pipeline in academic project context",
            "Potential application in agricultural sector for quality control and digital farming",
            "Educational tool to introduce AI/ML to students and general public"
        ]
    },

    "vigilanteyes": {
        id: "vigilanteyes",
        title: "VigilantEyes Anti-Bullying System",
        category: "PKM-KC Award",
        tagline: "Android-based bullying prevention tool integrated with CCTV systems for safer school environments",
        heroImage: "../assets/images/projects/vigilanteyes.png",
        timeline: "4 Months",
        team: "Team of 3",
        completion: "100%",
        status: "Award Winner",

        // Problem Background
        problemBackground: `
            <p>Bullying in Indonesian schools remains a significant issue, with many cases going unreported due to fear of retaliation or lack of anonymous reporting channels. Traditional CCTV systems only provide passive monitoring without proactive intervention capabilities.</p>
            <p class="mt-4">Schools need a comprehensive solution that combines real-time monitoring with immediate reporting mechanisms and preventive education to create safer learning environments.</p>
        `,

        // Project Goals
        goals: [
            "Reduce bullying incidents by 40% through early detection",
            "Create anonymous reporting system with 24/7 availability",
            "Integrate with existing CCTV infrastructure",
            "Provide real-time alerts to school administrators",
            "Educate students about bullying prevention"
        ],

        // My Role & Contributions
        role: [
            "<strong>Project Lead</strong>: Coordinated team of 3 members and managed project timeline",
            "<strong>UI/UX Designer</strong>: Created user-centered design using Figma with 20+ screens",
            "<strong>Frontend Developer</strong>: Built Android application using Kotlin and Jetpack Compose",
            "<strong>System Architect</strong>: Designed integration architecture between mobile app and CCTV systems",
            "<strong>Presenter</strong>: Presented project to Ministry of Education and secured funding"
        ],

        // Key Features
        features: [
            {
                title: "Anonymous Reporting",
                description: "Secure and anonymous incident reporting with photo/video attachment"
            },
            {
                title: "CCTV Integration",
                description: "Real-time monitoring integration with existing security systems"
            },
            {
                title: "Emergency Alerts",
                description: "Instant notifications to school staff with incident location"
            },
            {
                title: "Educational Resources",
                description: "Interactive learning modules about bullying prevention"
            },
            {
                title: "Incident Analytics",
                description: "Dashboard with statistics and trend analysis for administrators"
            },
            {
                title: "Parent Portal",
                description: "Secure access for parents to monitor and report concerns"
            }
        ],

        // Application Preview
        preview: [
            {
                type: "image",
                src: "../assets/images/projects/vigilanteyes.png",
                caption: "Anonymous reporting interface"
            }
        ],

        // What I Learned
        learnings: [
            "<strong>Team Leadership</strong>: Project management and team coordination in academic settings",
            "<strong>Hardware-Software Integration</strong>: Connecting mobile applications with CCTV hardware systems",
            "<strong>Sensitive Design</strong>: Designing for vulnerable user groups (bullying victims)",
            "<strong>Government Funding</strong>: Presentation skills for government funding applications",
            "<strong>Data Privacy</strong>: Privacy and security considerations in educational applications",
            "<strong>User Research</strong>: Conducting research with school administrators and students"
        ],

        // Technologies Used
        technologies: ["Kotlin", "Jetpack Compose", "Firebase", "WebSocket", "FFmpeg", "MVVM", "Retrofit", "Figma"],

        // Project Links
        links: [
            {
                type: "github",
                url: "https://github.com/NgatourRohman/vigilanteyes",
                label: "View Source Code"
            }
        ],

        // Challenges
        challenges: [
            "<strong>CCTV System Diversity</strong>: Integrating various CCTV brands - solved with adapter pattern design",
            "<strong>User Anonymity</strong>: Ensuring complete user anonymity - implemented encryption and data minimization",
            "<strong>Real-time Processing</strong>: Video processing delays - optimized with FFmpeg and WebSocket",
            "<strong>Network Restrictions</strong>: School network limitations - created offline-first architecture"
        ],

        // Skills Gained
        skills: [
            "Project Leadership",
            "Hardware-Software Integration",
            "Privacy by Design",
            "Government Proposal Writing",
            "Stakeholder Communication",
            "Security Implementation"
        ],

        // Awards & Recognition
        awards: [
            "PKM-KC Awardee 2024 - Ministry of Education",
            "Best Innovation in School Safety - University Level",
            "Funding Grant: IDR 15,000,000"
        ]
    },

    "trashure": {
    id: "trashure",
    title: "Trashure - Waste Management App",
    category: "Bangkit Capstone",
    tagline: "Household waste management and education app - Capstone Project for Bangkit Academy 2023",
    heroImage: "../assets/images/projects/trashure.png",
    timeline: "Aug 2023 - Dec 2023",
    team: "Team Project (6 members)",
    completion: "60%",
    status: "Incomplete - Project Halted",

    // Problem Background
    problemBackground: `
        <p>As part of the Bangkit Academy 2023 (Batch 5) Capstone Project, our team identified waste management as a critical issue in urban Indonesia. Many households lack proper knowledge about waste segregation, recycling procedures, and local waste management facilities.</p>
        <p class="mt-4">The challenge was to create an educational tool that could simplify waste management while connecting users with local recycling infrastructure. However, due to time constraints and team member transitions after the program ended, the project was not fully completed.</p>
    `,

    // Project Goals
    goals: [
        "Develop a waste management app as final Capstone project for Bangkit Academy",
        "Implement waste classification using Google ML Kit",
        "Create educational modules about recycling and waste reduction",
        "Connect users with local waste collection facilities",
        "Build a team project following Agile methodology",
        "Present project to Bangkit mentors and stakeholders"
    ],

    // My Role & Contributions
    role: [
        "<strong>Android Developer</strong>: Developed Android app using Kotlin and Jetpack Compose",
        "<strong>UI/UX Designer</strong>: Collaborated on app design and user flow",
        "<strong>Team Member</strong>: Participated in Agile sprints and team meetings",
        "<strong>Researcher</strong>: Conducted research on waste management practices in Indonesia",
        "<strong>Presenter</strong>: Contributed to final project presentation"
    ],

    // Key Features (yang berhasil diimplementasikan)
    features: [
        {
            title: "Waste Classification",
            description: "Basic integration of Google ML Kit for waste type recognition"
        },
        {
            title: "Educational Content",
            description: "Waste segregation guides and recycling information"
        },
        {
            title: "User Interface",
            description: "Clean UI built with Jetpack Compose following Material Design"
        },
        {
            title: "Team Collaboration",
            description: "Git workflow and collaborative development using Agile methodology"
        }
    ],

    // Application Preview
    preview: [
        {
            type: "image",
            src: "../assets/images/projects/trashure.png",
            caption: "Main Interface - Waste Management Dashboard"
        }
    ],

    // What I Learned
    learnings: [
        "<strong>Team Collaboration</strong>: Gained experience working in a 6-person team with diverse roles",
        "<strong>Agile Methodology</strong>: Practiced Scrum with regular sprints and stand-up meetings",
        "<strong>Google Technologies</strong>: Utilized various Google Cloud and ML technologies",
        "<strong>Project Management</strong>: Learned about project planning and time management in team setting",
        "<strong>Real-world Constraints</strong>: Experienced challenges of incomplete projects due to external factors"
    ],

    // Technologies Used
    technologies: ["Kotlin", "Jetpack Compose", "Google ML Kit", "Git", "Agile", "Team Collaboration"],

    // Project Links
    links: [
        {
            type: "github",
            url: "https://github.com/NgatourRohman/bangkit-capstone",
            label: "Capstone Project Repository"
        },
        {
            type: "documentation",
            url: "../assets/pdf/bangkit-certificate.pdf",
            label: "Bangkit Completion Certificate"
        }
    ],

    // Challenges
    challenges: [
        "<strong>Team Coordination</strong>: Managing collaboration across 6 team members with different schedules",
        "<strong>Time Constraints</strong>: Limited timeframe for Capstone project completion",
        "<strong>Post-Program Continuity</strong>: Project halted after Bangkit program ended as team members pursued different opportunities",
        "<strong>Feature Scope</strong>: Ambitious feature set for the given timeframe",
        "<strong>Technical Integration</strong>: Learning curve for integrating multiple Google technologies"
    ],

    // Skills Gained
    skills: [
        "Team-based Android Development",
        "Agile Project Management",
        "Cross-functional Collaboration",
        "Google Cloud & ML Integration",
        "Capstone Project Presentation",
        "Time Management in Team Setting"
    ],

    // Status Note
    statusNote: "This project was developed as part of the Bangkit Academy 2023 Capstone requirement. While core functionalities were implemented, the project was not continued after the program concluded due to team members pursuing separate career paths."
},

    "paskibra-expert": {
        id: "paskibra-expert",
        title: "Paskibra Psychological Test Expert System",
        category: "AI/Expert System",
        tagline: "Expert system for psychological testing of Paskibra candidates using training data and rule-based reasoning",
        heroImage: "../assets/images/projects/paskibra-expert.png",
        timeline: "3 Months",
        team: "Academic Project",
        completion: "100%",
        status: "Completed",

        // Problem Background
        problemBackground: `
            <p>Selecting Paskibra (flag-raising troop) candidates requires thorough psychological testing to ensure mental readiness, discipline, and patriotism. Traditional psychological tests are often time-consuming and subjective, depending heavily on the examiner's experience.</p>
            <p class="mt-4">There is a need for a standardized, objective system that can help in the initial screening process while maintaining the human touch in final selection.</p>
        `,

        // Project Goals
        goals: [
            "Automate initial psychological screening of Paskibra candidates",
            "Create rule-based expert system with 85% accuracy compared to human experts",
            "Develop user-friendly interface for school administrators",
            "Generate comprehensive psychological profiles",
            "Reduce selection time by 60%"
        ],

        // My Role & Contributions
        role: [
            "<strong>AI Developer</strong>: Designed and implemented the expert system logic",
            "<strong>Data Analyst</strong>: Analyzed psychological test patterns from historical data",
            "<strong>Backend Developer</strong>: Built Python-based decision engine",
            "<strong>Researcher</strong>: Studied psychological parameters for Paskibra selection",
            "<strong>Documentation</strong>: Created comprehensive system documentation"
        ],

        // Key Features
        features: [
            {
                title: "Psychological Assessment",
                description: "Comprehensive psychological parameter evaluation"
            },
            {
                title: "Rule-Based Reasoning",
                description: "IF-THEN rules based on expert knowledge and historical data"
            },
            {
                title: "Candidate Profiling",
                description: "Detailed psychological profile generation"
            },
            {
                title: "Recommendation System",
                description: "Suitability scoring and recommendations"
            },
            {
                title: "Report Generation",
                description: "Automated PDF report creation"
            },
            {
                title: "Admin Dashboard",
                description: "Web-based interface for management"
            }
        ],

        // Application Preview
        preview: [
            {
                type: "image",
                src: "../assets/images/projects/paskibra-expert.png",
                caption: "Psychological test interface"
            }
        ],

        // What I Learned
        learnings: [
            "<strong>Expert Systems</strong>: Principles and implementation of rule-based expert systems",
            "<strong>Psychological Assessment</strong>: Understanding of psychological parameters in selection processes",
            "<strong>Decision Making Algorithms</strong>: Algorithm design for complex decision making",
            "<strong>Data Analysis</strong>: Analysis of qualitative and quantitative test data",
            "<strong>Ethical AI</strong>: Ethical considerations in psychological assessment systems"
        ],

        // Technologies Used
        technologies: ["Python", "Django", "JavaScript", "MySQL", "Rule-Based System", "Data Analysis", "ReportLab"],

        // Project Links
        links: [
            {
                type: "github",
                url: "https://github.com/NgatourRohman/paskibra-expert-system",
                label: "View Source Code"
            }
        ],

        // Challenges
        challenges: [
            "<strong>Rule Definition</strong>: Translating expert knowledge into computable rules",
            "<strong>Data Validation</strong>: Ensuring psychological test data accuracy",
            "<strong>System Accuracy</strong>: Achieving high correlation with human expert decisions",
            "<strong>User Acceptance</strong>: Gaining trust from traditional selection committees"
        ],

        // Skills Gained
        skills: [
            "Expert System Development",
            "Psychological Assessment Design",
            "Rule-Based AI",
            "Decision Making Algorithms",
            "Educational System Design"
        ]
    },

    "ahp-optic": {
        id: "ahp-optic",
        title: "SPK AHP Lensa - Optik Buana Surya",
        category: "Decision Support System",
        tagline: "Decision support system for eyeglass lens selection using Analytic Hierarchy Process methodology",
        heroImage: "../assets/images/projects/ahp-optic.png",
        timeline: "3 Months",
        team: "Group Project (3 members)",
        completion: "100%",
        status: "Completed",

        problemBackground: `
            <p>Optical shops often struggle with recommending the most suitable eyeglass lenses to customers based on multiple criteria such as price, durability, visual clarity, and UV protection. The decision process is often subjective and depends on the salesperson's experience.</p>
            <p class="mt-4">Optik Buana Surya needed a systematic approach to evaluate and rank lens options to provide consistent, data-driven recommendations to customers.</p>
        `,

        goals: [
            "Implement Analytic Hierarchy Process (AHP) for objective lens selection",
            "Create web-based interface for easy data input and result visualization",
            "Reduce decision time by 50% compared to manual evaluation",
            "Improve customer satisfaction with data-backed recommendations",
            "Train staff on using the decision support system"
        ],

        role: [
            "<strong>System Analyst</strong>: Analyzed requirements and designed AHP hierarchy",
            "<strong>Backend Developer</strong>: Implemented AHP algorithm in PHP",
            "<strong>Frontend Developer</strong>: Created user-friendly web interface",
            "<strong>Database Designer</strong>: Designed MySQL database schema",
            "<strong>Tester</strong>: Conducted system testing with real optical shop data"
        ],

        features: [
            {
                title: "AHP Implementation",
                description: "Full implementation of Analytic Hierarchy Process with pairwise comparisons"
            },
            {
                title: "Multi-criteria Analysis",
                description: "Evaluation based on price, durability, clarity, UV protection, and brand"
            },
            {
                title: "Result Visualization",
                description: "Graphical representation of ranking results"
            },
            {
                title: "Admin Dashboard",
                description: "CRUD operations for lens data and criteria management"
            },
            {
                title: "Consistency Check",
                description: "Automatic consistency ratio calculation to validate pairwise comparisons"
            },
            {
                title: "Report Generation",
                description: "Printable reports with recommendations and justification"
            }
        ],

        preview: [
            {
                type: "image",
                src: "../assets/images/projects/ahp-optic.png",
                caption: "Criteria weighting interface"
            }
        ],

        learnings: [
            "<strong>AHP Methodology</strong>: Deep understanding of Analytic Hierarchy Process",
            "<strong>Decision Support Systems</strong>: Designing systems for complex decision making",
            "<strong>Multi-criteria Analysis</strong>: Handling multiple conflicting criteria",
            "<strong>Real-world Application</strong>: Applying academic concepts to business problems",
            "<strong>Client Communication</strong>: Understanding and translating business requirements"
        ],

        technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap", "AHP Algorithm", "Chart.js"],

        links: [
            {
                type: "github",
                url: "https://github.com/NgatourRohman/ahp-lens-system",
                label: "View Source Code"
            }
        ],

        challenges: [
            "<strong>Algorithm Complexity</strong>: Implementing AHP with proper consistency checking",
            "<strong>Data Accuracy</strong>: Ensuring accurate pairwise comparison data input",
            "<strong>User Training</strong>: Training optical shop staff to use the system effectively",
            "<strong>Real-time Calculation</strong>: Optimizing calculations for instant results"
        ],

        skills: [
            "Analytic Hierarchy Process (AHP)",
            "Decision Support System Design",
            "Multi-criteria Decision Analysis",
            "Web Application Development",
            "Business Requirement Analysis"
        ]
    },

    "library": {
        id: "library",
        title: "Library Management System",
        category: "Academic Project",
        tagline: "Simple web application for book and borrowing management with admin and user interfaces",
        heroImage: "../assets/images/projects/library.png",
        timeline: "2 Months",
        team: "Solo Project",
        completion: "100%",
        status: "Completed",

        problemBackground: `
            <p>Small libraries and educational institutions often struggle with manual book tracking systems, leading to lost books, overdue fines calculation errors, and inefficient member management.</p>
            <p class="mt-4">There was a need for a simple, affordable digital solution that could automate basic library operations without requiring extensive technical knowledge to operate.</p>
        `,

        goals: [
            "Digitize book inventory and member records",
            "Automate borrowing and return processes",
            "Implement overdue fine calculation",
            "Create separate interfaces for librarians and members",
            "Generate basic reports and statistics"
        ],

        role: [
            "<strong>Full-Stack Developer</strong>: Developed both frontend and backend components",
            "<strong>Database Designer</strong>: Created normalized database structure",
            "<strong>UI/UX Designer</strong>: Designed simple and intuitive interfaces",
            "<strong>Tester</strong>: Performed functionality and usability testing"
        ],

        features: [
            {
                title: "Book Management",
                description: "CRUD operations for book catalog with ISBN, title, author, category"
            },
            {
                title: "Member Management",
                description: "Member registration and profile management"
            },
            {
                title: "Borrowing System",
                description: "Book borrowing, return, and renewal with due date tracking"
            },
            {
                title: "Fine Calculation",
                description: "Automatic overdue fine calculation based on return date"
            },
            {
                title: "Search Functionality",
                description: "Advanced search by title, author, category, or ISBN"
            },
            {
                title: "Report Generation",
                description: "Basic reports for borrowed books, overdue items, and member activity"
            }
        ],

        preview: [
            {
                type: "image",
                src: "../assets/images/projects/library.png",
                caption: "Book catalog interface"
            }
        ],

        learnings: [
            "<strong>Full-Stack Development</strong>: End-to-end web application development",
            "<strong>Database Design</strong>: Creating normalized database schemas",
            "<strong>CRUD Operations</strong>: Implementing Create, Read, Update, Delete functionality",
            "<strong>User Authentication</strong>: Basic session-based authentication",
            "<strong>Form Validation</strong>: Client and server-side validation"
        ],

        technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap", "HTML/CSS", "jQuery"],

        links: [
            {
                type: "github",
                url: "https://github.com/NgatourRohman/library-management",
                label: "View Source Code"
            }
        ],

        challenges: [
            "<strong>Data Integrity</strong>: Ensuring data consistency across related tables",
            "<strong>Concurrent Access</strong>: Handling multiple simultaneous borrow/return operations",
            "<strong>User Experience</strong>: Creating intuitive interfaces for non-technical users",
            "<strong>Security</strong>: Implementing basic security measures against SQL injection"
        ],

        skills: [
            "Web Application Architecture",
            "Database Design & Normalization",
            "PHP & MySQL Development",
            "Bootstrap UI Development",
            "Basic System Security"
        ]
    }
};

// Initialize Page
document.addEventListener('DOMContentLoaded', function () {
    // Initialize dark mode
    initDarkMode();

    // Get project ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id') || 'fruit-app';

    // Load project data
    loadProject(projectId);

    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Create particles background
    createParticles();
});

function initDarkMode() {
    const themeToggle = document.getElementById('themeToggle');
    const sunIcon = document.getElementById('sunIcon');
    const moonIcon = document.getElementById('moonIcon');

    if (!themeToggle) return;

    // Check for saved theme preference or default to dark
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    const currentTheme = localStorage.getItem('theme') ||
        (prefersDark.matches ? 'dark' : 'light');

    // Apply theme
    if (currentTheme === 'dark') {
        document.documentElement.classList.add('dark');
        if (sunIcon) sunIcon.classList.remove('hidden');
        if (moonIcon) moonIcon.classList.add('hidden');
    } else {
        document.documentElement.classList.remove('dark');
        if (sunIcon) sunIcon.classList.add('hidden');
        if (moonIcon) moonIcon.classList.remove('hidden');
    }

    // Toggle theme
    themeToggle.addEventListener('click', () => {
        const isDark = document.documentElement.classList.toggle('dark');

        if (isDark) {
            if (sunIcon) sunIcon.classList.remove('hidden');
            if (moonIcon) moonIcon.classList.add('hidden');
            localStorage.setItem('theme', 'dark');
        } else {
            if (sunIcon) sunIcon.classList.add('hidden');
            if (moonIcon) moonIcon.classList.remove('hidden');
            localStorage.setItem('theme', 'light');
        }
    });
}

function createParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;

    const particleCount = 15;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        const size = Math.random() * 60 + 20;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const delay = Math.random() * 10;
        const duration = Math.random() * 10 + 10;

        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.animationDelay = `${delay}s`;
        particle.style.animationDuration = `${duration}s`;

        particlesContainer.appendChild(particle);
    }
}

function loadProject(projectId) {
    const project = projectsData[projectId];
    if (!project) {
        window.location.href = 'index.html';
        return;
    }
    const statusElement = document.getElementById('projectStatus');
    if (projectId === "trashure") {
        statusElement.className = "px-4 py-2 rounded-full bg-yellow-500/20 text-yellow-600 font-medium text-sm";
        statusElement.textContent = "Incomplete - Project Halted";
    }
    // Update page title
    document.title = `${project.title} - Ngatour Rohman`;

    // Update basic information
    document.getElementById('projectTitle').textContent = project.title;
    document.getElementById('projectCategory').textContent = project.category;
    document.getElementById('projectTagline').textContent = project.tagline;
    document.getElementById('projectTimeline').textContent = project.timeline;
    document.getElementById('projectTeam').textContent = project.team;
    document.getElementById('projectCompletion').textContent = project.completion;
    document.getElementById('projectStatus').textContent = project.status;

    // Update hero image
    const heroImage = document.getElementById('projectHeroImage');
    heroImage.src = project.heroImage;
    heroImage.alt = `${project.title} - Hero Image`;
    heroImage.onerror = function () {
        this.src = '../assets/images/projects/default-project.png';
    };

    // Create dynamic sections
    const sectionsContainer = document.getElementById('dynamicSections');

    // Problem Background Section
    sectionsContainer.innerHTML = `
        <!-- Problem Background -->
        <section class="glass-card rounded-3xl p-6 md:p-8 shadow-glass-lg">
            <div class="flex items-center gap-3 mb-6">
                <div class="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-neon">
                    <i class="uil uil-question-circle text-white text-xl"></i>
                </div>
                <h2 class="text-2xl font-bold">Problem Background</h2>
            </div>
            <div class="prose prose-lg dark:prose-invert max-w-none">
                ${project.problemBackground}
            </div>
        </section>

        <!-- Project Goals -->
        <section class="glass-card rounded-3xl p-6 md:p-8 shadow-glass-lg">
            <div class="flex items-center gap-3 mb-6">
                <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-neon">
                    <i class="uil uil-bullseye text-white text-xl"></i>
                </div>
                <h2 class="text-2xl font-bold">Project Goals</h2>
            </div>
            <div class="space-y-4" id="projectGoals">
                ${project.goals.map(goal => `
                    <div class="flex items-start gap-3">
                        <div class="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <i class="uil uil-check text-green-600 text-sm"></i>
                        </div>
                        <p class="text-slate-700 dark:text-slate-300">${goal}</p>
                    </div>
                `).join('')}
            </div>
        </section>

        <!-- My Role & Contributions -->
        <section class="glass-card rounded-3xl p-6 md:p-8 shadow-glass-lg">
            <div class="flex items-center gap-3 mb-6">
                <div class="w-12 h-12 bg-gradient-to-br from-brand-500 to-brand-600 rounded-2xl flex items-center justify-center shadow-neon">
                    <i class="uil uil-user-circle text-white text-xl"></i>
                </div>
                <h2 class="text-2xl font-bold">My Role & Contributions</h2>
            </div>
            <div class="space-y-4" id="myRole">
                ${project.role.map((item, index) => `
                    <div class="flex items-start gap-3">
                        <div class="w-8 h-8 bg-brand-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                            <span class="text-brand-600 font-bold text-sm">${index + 1}</span>
                        </div>
                        <p class="text-slate-700 dark:text-slate-300">${item}</p>
                    </div>
                `).join('')}
            </div>
        </section>

        <!-- Key Features -->
        <section class="glass-card rounded-3xl p-6 md:p-8 shadow-glass-lg">
            <div class="flex items-center gap-3 mb-6">
                <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-neon">
                    <i class="uil uil-apps text-white text-xl"></i>
                </div>
                <h2 class="text-2xl font-bold">Key Features</h2>
            </div>
            <div class="grid md:grid-cols-2 gap-4" id="keyFeatures">
                ${project.features.map(feature => `
                    <div class="glass rounded-xl p-4 hover:shadow-glass-lg transition-all">
                        <h4 class="font-semibold mb-2 text-slate-800 dark:text-slate-200">${feature.title}</h4>
                        <p class="text-sm text-slate-600 dark:text-slate-400">${feature.description}</p>
                    </div>
                `).join('')}
            </div>
        </section>

        <!-- Application Preview -->
        <section class="glass-card rounded-3xl p-6 md:p-8 shadow-glass-lg">
            <div class="flex items-center gap-3 mb-6">
                <div class="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-neon">
                    <i class="uil uil-play-circle text-white text-xl"></i>
                </div>
                <h2 class="text-2xl font-bold">Application Preview</h2>
            </div>
            <div class="space-y-6" id="appPreview">
                ${project.preview.map(item => item.type === 'image' ? `
                    <div class="relative rounded-xl overflow-hidden group">
                        <img src="${item.src}" alt="${item.caption}" 
                             class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                             onerror="this.src='../assets/images/projects/default-screenshot.png'">
                        <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                            <p class="text-white text-sm font-medium">${item.caption}</p>
                        </div>
                    </div>
                ` : `
                    <div class="relative rounded-xl overflow-hidden cursor-pointer group" onclick="playVideo('${item.src}')">
                        <div class="aspect-video bg-slate-800 flex items-center justify-center group-hover:bg-slate-700 transition-colors">
                            <div class="text-center">
                                <div class="w-16 h-16 bg-brand-500/20 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                                    <i class="uil uil-play-circle text-brand-600 text-2xl"></i>
                                </div>
                                <p class="text-white font-medium">${item.caption}</p>
                                <p class="text-slate-300 text-sm mt-1">Click to play demo video</p>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </section>

        <!-- What I Learned -->
        <section class="glass-card rounded-3xl p-6 md:p-8 shadow-glass-lg">
            <div class="flex items-center gap-3 mb-6">
                <div class="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center shadow-neon">
                    <i class="uil uil-graduation-cap text-white text-xl"></i>
                </div>
                <h2 class="text-2xl font-bold">What I Learned</h2>
            </div>
            <div class="space-y-4" id="whatILearned">
                ${project.learnings.map(item => `
                    <div class="flex items-start gap-3">
                        <div class="w-6 h-6 bg-yellow-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <i class="uil uil-lightbulb-alt text-yellow-600 text-sm"></i>
                        </div>
                        <p class="text-slate-700 dark:text-slate-300">${item}</p>
                    </div>
                `).join('')}
            </div>
        </section>
    `;

    // Add Research Results Section (only for fruit-app project)
    if (projectId === "fruit-app" && project.researchResults) {
        const researchSection = document.createElement('section');
        researchSection.className = 'glass-card rounded-3xl p-6 md:p-8 shadow-glass-lg';
        researchSection.innerHTML = `
            <div class="flex items-center gap-3 mb-6">
                <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-neon">
                    <i class="uil uil-chart-bar text-white text-xl"></i>
                </div>
                <h2 class="text-2xl font-bold">Research Results & Metrics</h2>
            </div>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                ${Object.entries(project.researchResults).map(([key, value]) => `
                    <div class="glass rounded-xl p-4">
                        <p class="text-sm text-slate-500 dark:text-slate-400 mb-1">${formatResearchKey(key)}</p>
                        <p class="font-bold text-lg text-brand-600">${value}</p>
                    </div>
                `).join('')}
            </div>
        `;
        sectionsContainer.appendChild(researchSection);
    }

    // Add Impact Section (only for fruit-app project)
    if (projectId === "fruit-app" && project.impact) {
        const impactSection = document.createElement('section');
        impactSection.className = 'glass-card rounded-3xl p-6 md:p-8 shadow-glass-lg';
        impactSection.innerHTML = `
            <div class="flex items-center gap-3 mb-6">
                <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-neon">
                    <i class="uil uil-rocket text-white text-xl"></i>
                </div>
                <h2 class="text-2xl font-bold">Impact & Contributions</h2>
            </div>
            <div class="space-y-3">
                ${project.impact.map(item => `
                    <div class="flex items-start gap-3">
                        <div class="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <i class="uil uil-check text-green-600 text-sm"></i>
                        </div>
                        <p class="text-slate-700 dark:text-slate-300">${item}</p>
                    </div>
                `).join('')}
            </div>
        `;
        sectionsContainer.appendChild(impactSection);
    }

    // Add Awards Section (if project has awards)
    if (project.awards) {
        const awardsSection = document.createElement('section');
        awardsSection.className = 'glass-card rounded-3xl p-6 md:p-8 shadow-glass-lg';
        awardsSection.innerHTML = `
            <div class="flex items-center gap-3 mb-6">
                <div class="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center shadow-neon">
                    <i class="uil uil-trophy text-white text-xl"></i>
                </div>
                <h2 class="text-2xl font-bold">Awards & Recognition</h2>
            </div>
            <div class="space-y-3">
                ${project.awards.map(item => `
                    <div class="flex items-start gap-3">
                        <div class="w-6 h-6 bg-yellow-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <i class="uil uil-award text-yellow-600 text-sm"></i>
                        </div>
                        <p class="text-slate-700 dark:text-slate-300">${item}</p>
                    </div>
                `).join('')}
            </div>
        `;
        sectionsContainer.appendChild(awardsSection);
    }

    // Update technologies
    const techContainer = document.getElementById('technologiesUsed');
    techContainer.innerHTML = project.technologies.map(tech => `
        <span class="px-3 py-1.5 rounded-full bg-brand-500/10 text-brand-600 text-xs font-medium">${tech}</span>
    `).join('');

    // Update links
    const linksContainer = document.getElementById('projectLinks');
    const iconMap = {
        'github': 'uil-github',
        'demo': 'uil-play-circle',
        'documentation': 'uil-file-download',
        'figma': 'uil-figma',
        'award': 'uil-trophy',
        'presentation': 'uil-presentation'
    };

    linksContainer.innerHTML = project.links.map(link => `
        <a href="${link.url}" target="_blank" 
           class="flex items-center gap-3 p-3 rounded-xl glass hover:shadow-glass-lg transition-all group project-link-card">
            <div class="w-10 h-10 bg-brand-500/20 rounded-lg flex items-center justify-center">
                <i class="uil ${iconMap[link.type] || 'uil-link'} text-brand-600"></i>
            </div>
            <div class="flex-1">
                <p class="font-medium text-slate-800 dark:text-slate-200">${link.label}</p>
            </div>
            <i class="uil uil-arrow-up-right text-slate-400 group-hover:text-brand-600"></i>
        </a>
    `).join('');

    // Update challenges
    const challengesContainer = document.getElementById('challenges');
    challengesContainer.innerHTML = project.challenges.map(challenge => `
        <div class="flex items-start gap-2">
            <i class="uil uil-check-circle text-green-500 mt-0.5"></i>
            <p class="text-sm text-slate-700 dark:text-slate-300">${challenge}</p>
        </div>
    `).join('');

    // Update skills gained
    const skillsContainer = document.getElementById('skillsGained');
    skillsContainer.innerHTML = project.skills.map(skill => `
        <div class="flex items-center gap-2">
            <div class="w-2 h-2 bg-brand-500 rounded-full"></div>
            <span class="text-slate-700 dark:text-slate-300">${skill}</span>
        </div>
    `).join('');
}

function formatResearchKey(key) {
    const formatMap = {
        'accuracy': 'Test Accuracy',
        'modelSize': 'Model Size',
        'inferenceTime': 'Inference Time',
        'datasetSize': 'Dataset Size',
        'classes': 'Number of Classes',
        'validationMethod': 'Validation Method',
        'testingDevice': 'Testing Device'
    };
    return formatMap[key] || key.charAt(0).toUpperCase() + key.slice(1);
}

// Video player function
function playVideo(videoSrc) {
    window.open(videoSrc, '_blank');
}

// Handle back button
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        window.history.back();
    }
});