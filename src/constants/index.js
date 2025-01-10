import {
    mobile,
    game,
    web,
    computerrepair,
    javascript,
    java,
    cplusplus,
    csharp,
    python,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    threejs,
    grove,
    asurion,
    ccp,
    jefferson,

  } from "../assets";
  
  export const navLinks = [
    {
      id: "work",
      title: "Work",
    },
    {
      id: "about",
      title: "About",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Development",
      icon: web,
    },
    {
      title: "Mobile Development",
      icon: mobile,
    },
    {
      title: "Game Development",
      icon: game,
    },
    {
      title: "Computer Repair",
      icon: computerrepair,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "csharp",
      icon: csharp,
    },
    {
      name: "c++",
      icon: cplusplus,
    },
    {
      name: "java",
      icon: java,
    },
    {
      name: "python",
      icon: python,
    },
  ];
  
  const experiences = [
    {
      title: "Information Technology Specialist",
      company_name: "Jefferson Health",
      icon: jefferson,
      iconBg: "#0a2964",
      date: "July 2023 - Present",
      points: [
        "Manage 17,000 devices with secure MDM solutions, enhancing reliability and scalability.",
        "Automate tasks via Python and AHK, boosting productivity and reducing manual workload.",
        "Develop configurations, protocols, and documentation.",
        "Troubleshoot software issues efficiently, ensuring system security and performance.",
      ],
    },
    {
      title: "Store Lead / Lead Tech",
      company_name: "Asurion Tech Repair and Solutions",
      icon: asurion,
      iconBg: "#000000",
      date: "Jan 2021 - May 2023",
      points: [
        "Led a team of five talented repair technicians, assisting with and guiding on repairs and troubleshooting techniques, resulting in quicker repair turn-around-times resulting in an 87% jump in profits over a year.",
        "Performed concise and accurate tests and created documentation throughout the repair process.",
        "Provided technical support for customers, simplifying the technical aspects for better understanding.",
        "Assisted customers with setting up services such as Asurion Home+ to increase future business.",
      ],
    },
    {
      title: "Computer Science Student",
      company_name: "Community College of Philadelphia",
      icon: ccp,
      iconBg: "#000000",
      date: "Sept 2021 - Present",
      points: [
        "Learned about the fundamentals of Computer Science, Data Structures, Algorithms, and Object-oriented Programming.",
        "Created software development projects individually and in teams using languages including but not limited to C#, C++, Java, Python, Javascript, and SQL.",
      ],
    },
  ];
  
  export { services, technologies, experiences };