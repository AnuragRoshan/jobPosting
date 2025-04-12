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
    companyLogo: "/api/placeholder/64/64",
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
    companyLogo: "/api/placeholder/64/64",
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
    companyLogo: "/api/placeholder/64/64",
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
    companyLogo: "/api/placeholder/64/64",
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
    companyLogo: "/api/placeholder/64/64",
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
