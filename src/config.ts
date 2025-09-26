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
        "Wrote and maintained unit tests using xUnit in C# to improve code reliability and meet SDLC quality benchmarks, targeting 70% line coverage and 80% branch coverage for the mobile services codebase.",
        "Collaborated with cross-functional teams to gather requirements and deliver features on time using Agile methodologies",
        "Utilized Azure DevOps for test management, task tracking, and continuous integration workflows.",
        "Supported the Conversational AI team (LivePerson) by automating the provisioning of roles and permissions using Azure Functions for new onboarding agents, helping reduce manual setup time and ensuring secure, consistent access control.",
        "Assisted in the GCP migration for LivePerson, validating API integrations and firewall configurations, while collaborating across teams such as Online Banking and third-party partners like MX."
      ],
    },
    {
      company: "A* Accelerator",
      title: "Software Development Intern",
      dateRange: "May 2024 - Aug. 2024",
      bullets: [
        "Designed and developed a full-stack mobile app for consolidating UW-Bothell events, leveraging Spring Boot, Flutter, and PostgreSQL. The app was deployed on DigitalOcean and used by nearly 30 students for app development learning.",
        "Created and optimized RESTful APIs in Spring Boot for handling data requests and responses.",
        "Built and refined key app features like login/registration, user authentication, and integrated CRUD operations for efficient database interactions with MSSQL and PostgreSQL.",
        "Developed UI components using Flutter and React.js, including a calendar page, search page, and admin console for event management (add, edit, delete events).",
        "Tutored students on implementing finishing touches to their personal projects, guiding them through debugging and final deployment",
      ],
    },
  ],
  education: [
    {
      school: "University of Washington - Bothell",
      degree: "Bachelor of Science in Computer Science and Software Engineering",
      dateRange: "2022 - 2025",
      achievements: [
        "Graduated with 3.8 GPA",
        "Dean's List all semesters",
      ],
    },
  ],
};
