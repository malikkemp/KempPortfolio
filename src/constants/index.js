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

  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
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
      name: "Three JS",
      icon: threejs,
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
      title: "Store Lead / Lead Tech",
      company_name: "Asurion Tech Repair and Solutions",
      icon: asurion,
      iconBg: "#000000",
      date: "Jan 2021 - Present",
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
        "Learned about the fundamentals of Computer Science and Object-oriented Programming.",
        "Created small programming projects both individually and with teams of other student developers using languages including C#, C++, Java, Python, Javascript, and SQL.",
      ],
    },
    {
      title: "Product Coordinator / General Manager",
      company_name: "The Grove Inc.",
      icon: grove,
      iconBg: "#FFFFFF",
      date: "May 2018 - Jan 2021",
      points: [
        "Protected and grew company reputation as well as built a loyal client base by working relentlessly to resolve problems and improve customer satisfaction.",
        "Provided onsite training, resulting in improved product management and customer service from employees as well as a higher rate of customer satisfaction while performing day-to-day operations.",
      ],
    },
  ];
  
  export { services, technologies, experiences };