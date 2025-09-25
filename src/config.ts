export const siteConfig = {
  name: "Travis Huynh",
  title: "Aspiring Software Engineer | Prev. @ BECU",
  description: "Portfolio website of Ryan Fitzgerald",
  accentColor: "#76e291ff",
  social: {
    email: "huynhtk51@gmail.com",
    linkedin: "https://www.linkedin.com/in/travis-huynh-626973221/",
    github: "https://github.com/TravisHuynh32",
  },
  aboutMe:
    "Hi, I’m Travis Huynh — a software engineer with experience in full-stack development and quality assurance. I’ve worked as a Software Developer Intern at BECU, where I built and tested reliable applications using C#, Azure DevOps, and automated testing frameworks. Previously, at A* Accelerator, I developed a full-stack mobile app using Spring Boot, Flutter, and PostgreSQL, while mentoring students on their own projects. I’ve also led and contributed to university projects like RideLink and Eventify, focusing on building scalable applications, integrating APIs, and ensuring smooth user experiences.",
  skills: ["Javascript", "Java", "Python", "C#", "SQL", "React", "Node.js", "Spring Boot", "Azure DevOps", "Git"],
  projects: [
    {
      name: "RideLink",
      description:
        "RideLink’s vision is to transform commuting by providing an efficient, environmentally friendly carpooling service that reduces carbon emissions and alleviates traffic congestion. Our goal is to create a platform that prioritizes user safety, convenience, and environmental responsibility while promoting community among riders. By offering a seamless user experience and incentives for eco-friendly choices, we aim to encourage more people to make carpooling their preferred mode of transportation.",
      link: "https://www.figma.com/proto/qsQUaiaK7DKp6Cezg6bnzm/RideLink?node-id=87-325&p=f&t=yv41SJfOzVSckCVT-1&scaling=scale-down&content-scaling=fixed&page-id=87%3A208&starting-point-node-id=87%3A339&show-proto-sidebar=1",
      skills: ["Flutter", "Firebase"],
    },
    {
      name: "Eventify",
      description:
        "UW-Bothell hosts numerous events ranging from academic seminars, student activities, workshops, and community gatherings. Managing these events can prove to be quite difficult, when currently there is no centralized way where students and staff can see all of these future events in one place. UW-Bothell Event Consolidator is a Flutter application designed to manage student-led events and provide a platform for user’s to login and register. An application like this can significantly improve the event management process by providing a centralized platform where users can easily view, register, and manage events.",
      link: "https://github.com/A-Accelerator/UWB-events-consolidator",
      skills: ["Flutter", "Java SpringBoot", "PostgreSQL"],
    },
    {
      name: "NutriPic",
      description:
        "Participated in UWB HACKS AI 2024, a hackathon focused AI, where I and two others developed NutriPic. This project utilizes computer vision and deep learning techniques to analyze food images and generate nutrition information for users.",
      link: "https://github.com/sam-dp/UWBHacks24",
      skills: ["HTML", "CSS", "JavaScript", "Python"],
    },
  ],
  experience: [
    {
      company: "BECU",
      title: "Software Developer Intern",
      dateRange: "Jun 2025 - Sept. 2025",
      bullets: [
        "Led development of microservices architecture serving 1M+ users",
        "Reduced API response times by 40% through optimization",
        "Mentored team of 5 junior developers",
      ],
    },
    {
      company: "Startup Inc",
      title: "Full Stack Developer",
      dateRange: "Jun 2020 - Dec 2021",
      bullets: [
        "Built and launched MVP product from scratch using React and Node.js",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
        "Collaborated with product team to define technical requirements",
      ],
    },
  ],
  education: [
    {
      school: "University Name",
      degree: "Bachelor of Science in Computer Science",
      dateRange: "2014 - 2018",
      achievements: [
        "Graduated Magna Cum Laude with 3.8 GPA",
        "Dean's List all semesters",
        "President of Computer Science Club",
      ],
    },
    {
      school: "Online Platform",
      degree: "Full Stack Development Certificate",
      dateRange: "2019",
      achievements: [
        "Completed 500+ hours of coursework",
        "Built 10+ portfolio projects",
        "Specialized in React and Node.js",
      ],
    },
  ],
};
