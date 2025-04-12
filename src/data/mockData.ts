export interface Profile {
  id: string;
  name: string;
  avatar: string;
  title: string;
  company: string;
  location: string;
  bio: string;
  skills: string[];
  experience: Experience[];
  education: Education[];
  connections: string[];
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | null;
  description: string;
}

export interface Education {
  id: string;
  school: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string | null;
  description: string;
}

export interface Job {
  id: string;
  title: string;
  company: string;
  companyLogo: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract" | "Internship" | "Remote";
  salary: string;
  description: string;
  requirements: string[];
  postedDate: string;
  postedBy: string;
  applicants: number;
}

export interface Post {
  id: string;
  content: string;
  images: string[];
  author: string;
  authorAvatar: string;
  authorTitle: string;
  createdAt: string;
  likes: number;
  comments: number;
  shares: number;
  liked: boolean;
}

export const profilesData: Profile[] = [
  {
    id: "1",
    name: "John Doe",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    title: "Senior Software Engineer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    bio: "Passionate software engineer with over 8 years of experience in building scalable web applications. Specialized in React, Node.js and cloud infrastructure.",
    skills: ["React", "TypeScript", "Node.js", "AWS", "Docker", "GraphQL"],
    experience: [
      {
        id: "exp1",
        title: "Senior Software Engineer",
        company: "TechCorp Inc.",
        location: "San Francisco, CA",
        startDate: "2020-03",
        endDate: null,
        description:
          "Leading the frontend team in developing a modern React-based application. Implemented CI/CD pipelines and improved performance by 40%.",
      },
      {
        id: "exp2",
        title: "Software Engineer",
        company: "InnovateSoft",
        location: "Seattle, WA",
        startDate: "2017-06",
        endDate: "2020-02",
        description:
          "Developed and maintained multiple web applications using React and Node.js. Collaborated with UX designers to implement responsive interfaces.",
      },
    ],
    education: [
      {
        id: "edu1",
        school: "University of Washington",
        degree: "Master of Science",
        field: "Computer Science",
        startDate: "2015-09",
        endDate: "2017-05",
        description: "Focused on web technologies and distributed systems.",
      },
      {
        id: "edu2",
        school: "State University",
        degree: "Bachelor of Science",
        field: "Computer Science",
        startDate: "2011-09",
        endDate: "2015-05",
        description:
          "Graduated with honors. Participated in ACM programming competitions.",
      },
    ],
    connections: ["2", "3", "4", "5"],
  },
  {
    id: "2",
    name: "Jane Smith",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    title: "Product Manager",
    company: "GlobalTech",
    location: "New York, NY",
    bio: "Product manager with a passion for creating user-centric solutions. Experienced in agile methodologies and team leadership.",
    skills: [
      "Product Management",
      "Agile",
      "User Research",
      "Roadmapping",
      "Data Analysis",
    ],
    experience: [
      {
        id: "exp1",
        title: "Product Manager",
        company: "GlobalTech",
        location: "New York, NY",
        startDate: "2019-01",
        endDate: null,
        description:
          "Managing the product lifecycle for a SaaS platform with 200K+ users. Increased user engagement by 35% through targeted feature development.",
      },
    ],
    education: [
      {
        id: "edu1",
        school: "Columbia University",
        degree: "MBA",
        field: "Business Administration",
        startDate: "2016-09",
        endDate: "2018-05",
        description: "Specialized in product management and entrepreneurship.",
      },
    ],
    connections: ["1", "3", "5"],
  },
  {
    id: "3",
    name: "Michael Johnson",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    title: "UX Designer",
    company: "DesignLab",
    location: "Austin, TX",
    bio: "Creative UX designer with a focus on creating accessible and intuitive user experiences. Advocate for user-centered design processes.",
    skills: [
      "User Research",
      "Wireframing",
      "Prototyping",
      "UI Design",
      "Accessibility",
    ],
    experience: [
      {
        id: "exp1",
        title: "UX Designer",
        company: "DesignLab",
        location: "Austin, TX",
        startDate: "2018-05",
        endDate: null,
        description:
          "Leading UX design for enterprise applications. Conduct user research and usability testing to create intuitive interfaces.",
      },
    ],
    education: [
      {
        id: "edu1",
        school: "Rhode Island School of Design",
        degree: "Bachelor of Fine Arts",
        field: "Graphic Design",
        startDate: "2014-09",
        endDate: "2018-05",
        description: "Focused on digital design and interactive experiences.",
      },
    ],
    connections: ["1", "2", "4"],
  },
  {
    id: "4",
    name: "Emily Chen",
    avatar: "https://randomuser.me/api/portraits/women/33.jpg",
    title: "Data Scientist",
    company: "DataCorp",
    location: "Boston, MA",
    bio: "Data scientist with expertise in machine learning and AI. Passionate about solving complex problems with data-driven approaches.",
    skills: [
      "Python",
      "Machine Learning",
      "Data Analysis",
      "SQL",
      "TensorFlow",
    ],
    experience: [
      {
        id: "exp1",
        title: "Data Scientist",
        company: "DataCorp",
        location: "Boston, MA",
        startDate: "2020-01",
        endDate: null,
        description:
          "Developing predictive models for customer behavior analysis. Implemented ML pipelines that increased conversion rates by 25%.",
      },
    ],
    education: [
      {
        id: "edu1",
        school: "MIT",
        degree: "Master of Science",
        field: "Data Science",
        startDate: "2018-09",
        endDate: "2019-12",
        description:
          "Specialized in machine learning algorithms and statistical analysis.",
      },
    ],
    connections: ["1", "3", "5"],
  },
  {
    id: "5",
    name: "David Wilson",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    title: "Marketing Director",
    company: "GrowthMedia",
    location: "Chicago, IL",
    bio: "Marketing professional specializing in digital marketing strategies and brand development. Experience in both B2B and B2C environments.",
    skills: [
      "Digital Marketing",
      "SEO",
      "Content Strategy",
      "Analytics",
      "Social Media",
    ],
    experience: [
      {
        id: "exp1",
        title: "Marketing Director",
        company: "GrowthMedia",
        location: "Chicago, IL",
        startDate: "2019-06",
        endDate: null,
        description:
          "Leading marketing initiatives across digital channels. Developed campaigns that resulted in 40% YoY growth.",
      },
    ],
    education: [
      {
        id: "edu1",
        school: "Northwestern University",
        degree: "Bachelor of Science",
        field: "Marketing",
        startDate: "2015-09",
        endDate: "2019-05",
        description: "Specialized in digital marketing and analytics.",
      },
    ],
    connections: ["1", "2", "4"],
  },
];

export const jobsData: Job[] = [
  {
    id: "job1",
    title: "Senior React Developer",
    company: "TechCorp Inc.",
    companyLogo:
      "https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?semt=ais_hybrid&w=740",
    location: "San Francisco, CA (Remote)",
    type: "Full-time",
    salary: "$120,000 - $150,000",
    description:
      "We are looking for a senior React developer to join our team. You will be responsible for developing high-quality web applications, collaborating with cross-functional teams, and mentoring junior developers.",
    requirements: [
      "5+ years of experience with React",
      "Strong understanding of TypeScript",
      "Experience with state management solutions",
      "Knowledge of modern frontend build tools",
      "Strong communication skills",
    ],
    postedDate: "2025-04-01",
    postedBy: "1",
    applicants: 45,
  },
  {
    id: "job2",
    title: "Product Manager",
    company: "InnovateSoft",
    companyLogo:
      "https://img.freepik.com/premium-vector/eh-calligraphic-signature-vector-logo-design-with-circle-gold-color-leaf-flower_1119385-142.jpg?semt=ais_hybrid&w=740",
    location: "New York, NY",
    type: "Full-time",
    salary: "$110,000 - $140,000",
    description:
      "We are seeking an experienced product manager to lead our product development efforts. You will work closely with engineering, design, and marketing teams to define product strategy and roadmap.",
    requirements: [
      "3+ years of experience in product management",
      "Experience with agile methodologies",
      "Strong analytical and problem-solving skills",
      "Excellent communication and leadership abilities",
      "Technical background is a plus",
    ],
    postedDate: "2025-04-03",
    postedBy: "2",
    applicants: 32,
  },
  {
    id: "job3",
    title: "UX/UI Designer",
    company: "DesignLab",
    companyLogo:
      "https://img.freepik.com/free-psd/gold-logo-mockup-grey-wall_511564-1489.jpg?semt=ais_hybrid&w=740",
    location: "Remote",
    type: "Full-time",
    salary: "$90,000 - $120,000",
    description:
      "We are looking for a talented UX/UI designer to create amazing user experiences. You will collaborate with product managers and developers to design intuitive interfaces for web and mobile applications.",
    requirements: [
      "Portfolio demonstrating UI/UX projects",
      "Proficiency with design tools (Figma, Sketch, etc.)",
      "Experience with user research and usability testing",
      "Understanding of design systems",
      "Knowledge of HTML/CSS is a plus",
    ],
    postedDate: "2025-04-05",
    postedBy: "3",
    applicants: 28,
  },
  {
    id: "job4",
    title: "Data Scientist",
    company: "DataCorp",
    companyLogo:
      "https://img.freepik.com/free-vector/gradient-quill-pen-design-template_23-2149837194.jpg?semt=ais_hybrid&w=740",
    location: "Boston, MA (Hybrid)",
    type: "Full-time",
    salary: "$130,000 - $160,000",
    description:
      "Join our data science team to develop machine learning models and analyze complex datasets. You will work on challenging problems and deliver insights that drive business decisions.",
    requirements: [
      "Master's or PhD in a quantitative field",
      "Strong programming skills in Python",
      "Experience with machine learning frameworks",
      "Knowledge of statistical analysis",
      "Excellent problem-solving abilities",
    ],
    postedDate: "2025-04-07",
    postedBy: "4",
    applicants: 19,
  },
  {
    id: "job5",
    title: "Digital Marketing Specialist",
    company: "GrowthMedia",
    companyLogo:
      "https://img.freepik.com/premium-vector/luxury-leh-logo-design-elegant-letter-leh-monogram-logo-minimalist-polygon-leh-logo-design-template_1101554-79962.jpg?semt=ais_hybrid&w=740",
    location: "Chicago, IL",
    type: "Full-time",
    salary: "$70,000 - $90,000",
    description:
      "We are seeking a digital marketing specialist to develop and implement marketing strategies. You will be responsible for managing campaigns across various digital channels and analyzing their performance.",
    requirements: [
      "2+ years of experience in digital marketing",
      "Knowledge of SEO, SEM, and social media marketing",
      "Experience with marketing analytics tools",
      "Strong communication and creative skills",
      "Ability to work in a fast-paced environment",
    ],
    postedDate: "2025-04-08",
    postedBy: "5",
    applicants: 24,
  },
];

export const postsData: Post[] = [
  {
    id: "post1",
    content:
      "Excited to announce that we are hiring React developers at TechCorp! Check out the job posting on our profile. #hiring #reactjs #developers",
    images: [
      "https://images.unsplash.com/photo-1741851374674-e4b7e573a9e7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
      "https://images.unsplash.com/photo-1741866987680-5e3d7f052b87?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8",
    ],
    author: "John Doe",
    authorAvatar: "https://randomuser.me/api/portraits/men/32.jpg",
    authorTitle: "Senior Software Engineer at TechCorp Inc.",
    createdAt: "2025-04-10T14:30:00Z",
    likes: 154,
    comments: 32,
    shares: 18,
    liked: false,
  },
  {
    id: "post2",
    content:
      "Just published a new article on product management best practices. What strategies have you found most effective for prioritizing features? Would love to hear your thoughts! #productmanagement #agile",
    images: [
      "https://plus.unsplash.com/premium_photo-1686090447453-b94678ab6377?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    author: "Jane Smith",
    authorAvatar: "https://randomuser.me/api/portraits/women/44.jpg",
    authorTitle: "Product Manager at GlobalTech",
    createdAt: "2025-04-09T09:15:00Z",
    likes: 87,
    comments: 25,
    shares: 14,
    liked: true,
  },
  {
    id: "post3",
    content:
      "I'm speaking at the UX Design Conference next month on \"Designing for Accessibility\". If you're attending, let's connect! #uxdesign #accessibility #conference",
    images: [
      "https://images.unsplash.com/photo-1742995186561-38d69a6d4f99?q=80&w=2900&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1742564386354-adb1a9dd4654?q=80&w=2920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    author: "Michael Johnson",
    authorAvatar: "https://randomuser.me/api/portraits/men/45.jpg",
    authorTitle: "UX Designer at DesignLab",
    createdAt: "2025-04-08T16:45:00Z",
    likes: 112,
    comments: 19,
    shares: 22,
    liked: false,
  },
  {
    id: "post4",
    content:
      "Our team just released a new machine learning model that predicts customer churn with 92% accuracy. Proud of what we've accomplished! #machinelearning #datascience #ai",
    images: [
      "https://images.unsplash.com/photo-1742944085736-65d142cef76d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1487528278747-ba99ed528ebc?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    author: "Emily Chen",
    authorAvatar: "https://randomuser.me/api/portraits/women/33.jpg",
    authorTitle: "Data Scientist at DataCorp",
    createdAt: "2025-04-07T11:20:00Z",
    likes: 198,
    comments: 42,
    shares: 35,
    liked: true,
  },
  {
    id: "post5",
    content:
      "Digital marketing trends to watch in 2025: 1) AI-generated content, 2) Voice search optimization, 3) Immersive AR experiences, 4) Sustainability messaging. What would you add to this list? #digitalmarketing #trends2025",
    images: [],
    author: "David Wilson",
    authorAvatar: "https://randomuser.me/api/portraits/men/22.jpg",
    authorTitle: "Marketing Director at GrowthMedia",
    createdAt: "2025-04-06T13:10:00Z",
    likes: 143,
    comments: 38,
    shares: 27,
    liked: false,
  },
];

export interface Company {
  id: string;
  name: string;
  logo: string;
  location: string;
  founded: number;
  website: string;
  description: string;
  industry: string;
  size: string;
  revenue: string;
  socialMedia: {
    linkedin?: string;
    twitter?: string;
    facebook?: string;
    instagram?: string;
  };
  benefits: string[];
  culture: string;
  values: string[];
  awards: {
    year: number;
    title: string;
    issuer: string;
  }[];
  officeImages: string[];
  team: {
    name: string;
    role: string;
    avatar: string;
    bio?: string;
    linkedin?: string;
  }[];
  openPositions: number;
  products: {
    name: string;
    description: string;
    image?: string;
    link?: string;
  }[];
}

export const companiesData: Company[] = [
  {
    id: "techcorp",
    name: "TechCorp Inc.",
    logo: "https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg",
    location: "San Francisco, CA",
    founded: 2015,
    website: "https://techcorp.com",
    description:
      "TechCorp Inc. is a leading software company building modern web applications and cloud infrastructure for enterprise clients. Our team of passionate engineers and designers work together to create innovative solutions that transform businesses and enhance user experiences.",
    industry: "Software Development",
    size: "50-200 employees",
    revenue: "$10-50 million",
    socialMedia: {
      linkedin: "https://linkedin.com/company/techcorp",
      twitter: "https://twitter.com/techcorp",
      facebook: "https://facebook.com/techcorp",
      instagram: "https://instagram.com/techcorp",
    },
    benefits: [
      "Competitive salary and equity",
      "Health, dental, and vision insurance",
      "Unlimited PTO",
      "Remote-first culture",
      "Professional development budget",
      "401(k) matching",
      "Wellness programs",
    ],
    culture:
      "At TechCorp, we believe in fostering a collaborative, inclusive environment where innovation thrives. Our team members are encouraged to take ownership of their work, experiment with new ideas, and continuously learn and grow.",
    values: [
      "Innovation",
      "Collaboration",
      "Excellence",
      "Integrity",
      "Customer-centricity",
    ],
    awards: [
      {
        year: 2023,
        title: "Best Places to Work in Tech",
        issuer: "TechAwards",
      },
      {
        year: 2022,
        title: "Most Innovative Cloud Solution",
        issuer: "Cloud Computing Magazine",
      },
    ],
    officeImages: [
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    team: [
      {
        name: "John Doe",
        role: "Senior Software Engineer",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        bio: "John has over 8 years of experience in full-stack development with expertise in React and Node.js.",
        linkedin: "https://linkedin.com/in/johndoe",
      },
      {
        name: "Sarah Johnson",
        role: "CTO & Co-founder",
        avatar: "https://randomuser.me/api/portraits/women/68.jpg",
        bio: "Sarah leads our technical strategy and has 15+ years of experience in software architecture.",
        linkedin: "https://linkedin.com/in/sarahjohnson",
      },
      {
        name: "Michael Chen",
        role: "Product Designer",
        avatar: "https://randomuser.me/api/portraits/men/75.jpg",
        bio: "Michael creates intuitive user experiences and has worked with Fortune 500 companies.",
        linkedin: "https://linkedin.com/in/michaelchen",
      },
      {
        name: "Lisa Rodriguez",
        role: "Engineering Manager",
        avatar: "https://randomuser.me/api/portraits/women/42.jpg",
        bio: "Lisa manages our frontend team and specializes in building scalable applications.",
        linkedin: "https://linkedin.com/in/lisarodriguez",
      },
    ],
    openPositions: 8,
    products: [
      {
        name: "TechCloud",
        description:
          "A scalable cloud infrastructure solution for enterprise applications.",
        image:
          "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "https://techcorp.com/techcloud",
      },
      {
        name: "DevFlow",
        description:
          "An integrated development environment for modern web applications.",
        image:
          "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "https://techcorp.com/devflow",
      },
    ],
  },
  {
    id: "innovatesoft",
    name: "InnovateSoft",
    logo: "https://img.freepik.com/premium-vector/eh-calligraphic-signature-vector-logo-design-with-circle-gold-color-leaf-flower_1119385-142.jpg",
    location: "New York, NY",
    founded: 2012,
    website: "https://innovatesoft.com",
    description:
      "InnovateSoft drives innovation through product-focused agile development and cutting-edge business platforms. We partner with startups and established enterprises to build scalable, user-friendly software solutions that solve complex business challenges.",
    industry: "Software Development & Consulting",
    size: "200-500 employees",
    revenue: "$50-100 million",
    socialMedia: {
      linkedin: "https://linkedin.com/company/innovatesoft",
      twitter: "https://twitter.com/innovatesoft",
      facebook: "https://facebook.com/innovatesoft",
    },
    benefits: [
      "Competitive compensation",
      "Comprehensive healthcare",
      "Flexible work arrangements",
      "Generous parental leave",
      "Learning & development stipend",
      "Company retreats",
      "Stock options",
    ],
    culture:
      "InnovateSoft fosters a dynamic, fast-paced environment where creativity and problem-solving are valued. We embrace diversity of thought and background, believing that our differences make us stronger as a team.",
    values: [
      "Innovation",
      "Client Success",
      "Continuous Learning",
      "Transparency",
      "Work-Life Balance",
    ],
    awards: [
      {
        year: 2024,
        title: "Top Software Development Company",
        issuer: "Business Insider",
      },
      {
        year: 2023,
        title: "Best Workplace Culture",
        issuer: "Inc. Magazine",
      },
      {
        year: 2022,
        title: "Innovation Award",
        issuer: "Tech Excellence Awards",
      },
    ],
    officeImages: [
      "https://images.unsplash.com/photo-1604328471151-b82ffbfdc82a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1572025442646-866d16c84a54?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    team: [
      {
        name: "Robert Williams",
        role: "CEO & Founder",
        avatar: "https://randomuser.me/api/portraits/men/41.jpg",
        bio: "Robert founded InnovateSoft with a vision to transform how businesses leverage technology.",
        linkedin: "https://linkedin.com/in/robertwilliams",
      },
      {
        name: "Jane Smith",
        role: "Product Manager",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        bio: "Jane leads product strategy and has a keen eye for user-centered design.",
        linkedin: "https://linkedin.com/in/janesmith",
      },
      {
        name: "David Chen",
        role: "CTO",
        avatar: "https://randomuser.me/api/portraits/men/62.jpg",
        bio: "David oversees all technical aspects of our products and infrastructure.",
        linkedin: "https://linkedin.com/in/davidchen",
      },
      {
        name: "Priya Patel",
        role: "Head of Design",
        avatar: "https://randomuser.me/api/portraits/women/63.jpg",
        bio: "Priya ensures our products are both beautiful and functional.",
        linkedin: "https://linkedin.com/in/priyapatel",
      },
    ],
    openPositions: 12,
    products: [
      {
        name: "InnovateERP",
        description:
          "Enterprise resource planning solution for mid-size businesses.",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "https://innovatesoft.com/erp",
      },
      {
        name: "DataSync",
        description:
          "Real-time data synchronization platform for distributed teams.",
        image:
          "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "https://innovatesoft.com/datasync",
      },
    ],
  },
  {
    id: "designlab",
    name: "DesignLab",
    logo: "https://img.freepik.com/free-psd/gold-logo-mockup-grey-wall_511564-1489.jpg",
    location: "Austin, TX",
    founded: 2016,
    website: "https://designlab.com",
    description:
      "DesignLab is a UX/UI design powerhouse helping businesses craft beautiful, user-first digital products. Our team combines creativity with data-driven insights to create interfaces that delight users and drive business results.",
    industry: "Design & Creative Services",
    size: "20-50 employees",
    revenue: "$5-10 million",
    socialMedia: {
      linkedin: "https://linkedin.com/company/designlab",
      twitter: "https://twitter.com/designlab",
      instagram: "https://instagram.com/designlab",
    },
    benefits: [
      "Competitive salary",
      "Health and wellness benefits",
      "Flexible work hours",
      "Remote work options",
      "Creative development fund",
      "Design conference stipends",
      "Team building events",
    ],
    culture:
      "DesignLab cultivates a creative, collaborative atmosphere where designers can thrive. We believe in the power of design thinking to solve complex problems and create meaningful experiences.",
    values: [
      "Creativity",
      "User-Centricity",
      "Collaboration",
      "Continuous Improvement",
      "Inclusivity",
    ],
    awards: [
      {
        year: 2024,
        title: "Best Design Agency",
        issuer: "Design Awards",
      },
      {
        year: 2023,
        title: "UX Design Excellence",
        issuer: "Interactive Media Awards",
      },
    ],
    officeImages: [
      "https://images.unsplash.com/photo-1600508774634-4e11d34730e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1600494603989-9650cf6dad51?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    team: [
      {
        name: "Michael Johnson",
        role: "UX Designer",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg",
        bio: "Michael specializes in creating accessible and intuitive user experiences.",
        linkedin: "https://linkedin.com/in/michaeljohnson",
      },
      {
        name: "Emma Wilson",
        role: "Creative Director",
        avatar: "https://randomuser.me/api/portraits/women/23.jpg",
        bio: "Emma leads our creative vision and has worked with top global brands.",
        linkedin: "https://linkedin.com/in/emmawilson",
      },
      {
        name: "Jason Lee",
        role: "UI Designer",
        avatar: "https://randomuser.me/api/portraits/men/36.jpg",
        bio: "Jason creates visually stunning interfaces that engage and delight users.",
        linkedin: "https://linkedin.com/in/jasonlee",
      },
    ],
    openPositions: 5,
    products: [
      {
        name: "DesignSystem Pro",
        description:
          "A comprehensive design system toolkit for enterprise teams.",
        image:
          "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "https://designlab.com/designsystem",
      },
    ],
  },
  {
    id: "datacorp",
    name: "DataCorp",
    logo: "https://img.freepik.com/free-vector/gradient-quill-pen-design-template_23-2149837194.jpg",
    location: "Boston, MA",
    founded: 2018,
    website: "https://datacorp.com",
    description:
      "DataCorp is a data science and AI company transforming industries with predictive analytics and ML-driven insights. We help organizations harness the power of their data to make better decisions, optimize operations, and create new opportunities.",
    industry: "Data Science & AI",
    size: "50-100 employees",
    revenue: "$15-30 million",
    socialMedia: {
      linkedin: "https://linkedin.com/company/datacorp",
      twitter: "https://twitter.com/datacorp",
    },
    benefits: [
      "Competitive compensation",
      "Comprehensive healthcare",
      "Flexible work arrangements",
      "Continuing education support",
      "Research publication incentives",
      "Conference attendance",
      "Mentorship programs",
    ],
    culture:
      "DataCorp fosters an environment of intellectual curiosity and rigorous analysis. We encourage our team to explore new ideas, challenge assumptions, and push the boundaries of what's possible with data science.",
    values: [
      "Innovation",
      "Integrity",
      "Excellence",
      "Collaboration",
      "Ethical AI",
    ],
    awards: [
      {
        year: 2024,
        title: "AI Innovation Award",
        issuer: "Tech Innovators",
      },
      {
        year: 2023,
        title: "Best Data Science Company",
        issuer: "Data Science Awards",
      },
    ],
    officeImages: [
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    team: [
      {
        name: "Emily Chen",
        role: "Data Scientist",
        avatar: "https://randomuser.me/api/portraits/women/33.jpg",
        bio: "Emily specializes in machine learning models for predictive analytics.",
        linkedin: "https://linkedin.com/in/emilychen",
      },
      {
        name: "Dr. James Wilson",
        role: "Chief Data Scientist",
        avatar: "https://randomuser.me/api/portraits/men/52.jpg",
        bio: "Dr. Wilson leads our research initiatives and has published numerous papers on AI.",
        linkedin: "https://linkedin.com/in/jameswilson",
      },
      {
        name: "Sophia Martinez",
        role: "ML Engineer",
        avatar: "https://randomuser.me/api/portraits/women/57.jpg",
        bio: "Sophia builds scalable machine learning systems for production environments.",
        linkedin: "https://linkedin.com/in/sophiamartinez",
      },
      {
        name: "Alex Thompson",
        role: "Data Engineer",
        avatar: "https://randomuser.me/api/portraits/men/64.jpg",
        bio: "Alex designs robust data pipelines that power our analytics solutions.",
        linkedin: "https://linkedin.com/in/alexthompson",
      },
    ],
    openPositions: 7,
    products: [
      {
        name: "PredictIQ",
        description:
          "Advanced predictive analytics platform for business intelligence.",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "https://datacorp.com/predictiq",
      },
      {
        name: "DataInsight",
        description:
          "Data visualization and reporting tool for non-technical users.",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "https://datacorp.com/datainsight",
      },
    ],
  },
  {
    id: "growthmedia",
    name: "GrowthMedia",
    logo: "https://img.freepik.com/premium-vector/luxury-leh-logo-design-elegant-letter-leh-monogram-logo-minimalist-polygon-leh-logo-design-template_1101554-79962.jpg",
    location: "Chicago, IL",
    founded: 2014,
    website: "https://growthmedia.com",
    description:
      "GrowthMedia is a marketing agency known for delivering outstanding brand growth through digital campaigns and creative content. We combine data-driven strategies with creative excellence to help brands connect with their audiences and achieve measurable results.",
    industry: "Digital Marketing",
    size: "20-50 employees",
    revenue: "$5-15 million",
    socialMedia: {
      linkedin: "https://linkedin.com/company/growthmedia",
      twitter: "https://twitter.com/growthmedia",
      facebook: "https://facebook.com/growthmedia",
      instagram: "https://instagram.com/growthmedia",
    },
    benefits: [
      "Competitive salary",
      "Health and wellness benefits",
      "Flexible work arrangements",
      "Professional development",
      "Creative workshops",
      "Team outings",
      "Performance bonuses",
    ],
    culture:
      "GrowthMedia cultivates a creative, results-oriented environment where marketers can thrive. We celebrate diverse perspectives and encourage bold thinking to develop innovative marketing solutions.",
    values: [
      "Creativity",
      "Data-Driven",
      "Client Success",
      "Adaptability",
      "Collaboration",
    ],
    awards: [
      {
        year: 2024,
        title: "Best Digital Marketing Campaign",
        issuer: "Marketing Excellence Awards",
      },
      {
        year: 2023,
        title: "Social Media Agency of the Year",
        issuer: "Digital Marketing Awards",
      },
    ],
    officeImages: [
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    team: [
      {
        name: "David Wilson",
        role: "Marketing Director",
        avatar: "https://randomuser.me/api/portraits/men/22.jpg",
        bio: "David leads our marketing strategies with over 10 years of experience in digital marketing.",
        linkedin: "https://linkedin.com/in/davidwilson",
      },
      {
        name: "Rachel Kim",
        role: "Creative Director",
        avatar: "https://randomuser.me/api/portraits/women/28.jpg",
        bio: "Rachel oversees all creative output and has won numerous industry awards.",
        linkedin: "https://linkedin.com/in/rachelkim",
      },
      {
        name: "Marcus Johnson",
        role: "SEO Specialist",
        avatar: "https://randomuser.me/api/portraits/men/33.jpg",
        bio: "Marcus develops SEO strategies that consistently increase organic traffic for clients.",
        linkedin: "https://linkedin.com/in/marcusjohnson",
      },
    ],
    openPositions: 4,
    products: [
      {
        name: "GrowthAnalytics",
        description:
          "Marketing analytics platform for campaign performance tracking.",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "https://growthmedia.com/analytics",
      },
    ],
  },
];
