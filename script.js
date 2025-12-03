const NAV_LINKS = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
];

const SKILLS = {
    technical: [
        { name: 'Python', icon: 'terminal', details: 'Pandas, NumPy, Matplotlib, Seaborn' },
        { name: 'SQL', icon: 'database', details: 'Joins, Subqueries, Window Functions' },
        { name: 'Power BI', icon: 'bar-chart-2', details: 'Dashboards, DAX, Power Query' },
        { name: 'Excel', icon: 'file-text', details: 'Pivot Tables, Advanced Formulas' },
    ],
    analysis: [
        'Data Cleaning', 'EDA', 'Data Preprocessing', 'Feature Engineering', 
        'Outlier Detection', 'Data Modeling', 'Trend Analysis', 'KPI Development'
    ],
    soft: [
        'Analytical Thinking', 'Problem Solving', 'Communication', 'Documentation', 
        'Time Management', 'Team Collaboration'
    ]
};

const EXPERIENCE = [
    {
        company: 'Blend Vidya EdTech',
        role: 'Python Development Intern',
        period: '2024 – 2025',
        description: [
            'Developed Python applications using functions, loops, and file handling.',
            'Improved code reliability through unit testing and debugging.',
            'Collaborated with the team, created documentation, and gained experience with Git.'
        ]
    },
    {
        company: 'Sagi Rama Krishnam Raju Engineering College',
        role: 'B.Tech in ECE',
        period: '2021 – 2025',
        description: ['GPA: 8.06', 'Specialized in Electronics & Communication']
    },
    {
        company: 'Sri Krishna Chaitanya Junior College',
        role: 'Intermediate (MPC)',
        period: '2019 – 2021',
        description: ['GPA: 9.66']
    },
    {
        company: 'Ratnam High School',
        role: 'Secondary Education',
        period: '2018 – 2019',
        description: ['GPA: 10.0', 'Completed Secondary Education']
    }
];

const PROJECTS = [
    {
        title: 'Superbike Data Analytics Dashboard',
        tags: ['Python', 'Power BI', 'Excel', 'Power Query'],
        description: 'Cleaned and transformed a raw superbike dataset, engineered metrics like Power-to-Weight Ratio, treated outliers, and built a premium Power BI dashboard with KPIs, slicers, trend charts, and brand-level insights.',
        links: {
            github: 'https://github.com/satya-473/Global-Superbikes-Analytics-Dashboard',
            linkedin: 'https://www.linkedin.com/posts/satya-narayanda_codegnan-hashtags-powerbi-activity-7401581235858419712-6ePn'
        },
        image: './Screenshot 2025-12-02 154920.jpg',
        fallbackImage: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1000&auto=format&fit=crop'
    },
    {
        title: 'Anime Dataset BI Dashboard',
        tags: ['Power Query', 'Excel', 'Power BI'],
        description: 'Cleaned and transformed a Kaggle anime dataset, performed feature engineering, and built an interactive Power BI dashboard showing KPIs, popularity trends, genre insights, and ratings distribution.',
        links: {
            github: 'https://github.com/satya-473/Power-BI-Project-Data-Cleaning-and-Transformation-of-Anime-Dataset',
            linkedin: 'https://www.linkedin.com/posts/satya-narayanda_powerbi-powerquery-dataanalytics-activity-7388909178637094912-UPLL'
        },
        image: './Screenshot 2025-12-03 115023.png',
        fallbackImage: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=1000&auto=format&fit=crop'
    },
    {
        title: 'Multiple Disease Prediction System',
        tags: ['Machine Learning', 'Python', 'Streamlit', 'SVM'],
        description: 'Built ML models achieving 100% kidney disease accuracy and 95% lung cancer accuracy. Performed preprocessing, feature scaling, model training/testing, and created a Streamlit app for real-time predictions.',
        links: {
            github: 'https://github.com/satya-473' 
        },
        image: './Screenshot 2025-12-03 142728.jpg',
        fallbackImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop'
    }
];