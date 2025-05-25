import Work1 from "../../assets/work-1.png";
import Work2 from "../../assets/work-2.png";
import Work3 from "../../assets/work-3.png";
import Work4 from "../../assets/work-4.png";
import Work5 from "../../assets/work-5.png";

const Menu = [
  {
    id: 1,
    image: Work1,
    title: "Portfolio Website",
    category: ["Frontend"],
    github: "https://github.com/mehulkumar22/portfolio",
    live: "https://mehulkumar22.github.io/portfolio",
    description: "A personal portfolio website showcasing projects, skills, and contact information.",
    techStack: ["/icons/react.png", "/icons/css.svg"],
  },
  {
    id: 2,
    image: Work2,
    title: "Calculator App",
    category: ["Frontend"],
    github: "https://github.com/mehulkumar22/calculator",
    live: "https://mehulkumar22.github.io/Calculator",
    description: "A basic calculator web app that performs arithmetic operations.",
    techStack: ["/icons/html.svg", "/icons/css.svg", "/icons/javascript.svg"],
  },
  {
    id: 3,
    image: Work3,
    title: "Stopwatch App",
    category: ["Frontend"],
    github: "https://github.com/mehulkumar22/stopwatch",
    live: "https://mehulkumar22.github.io/StopWatch",
    description: "A simple stopwatch to track time intervals with start, stop, and reset features.",
    techStack: ["/icons/html.svg", "/icons/css.svg", "/icons/javascript.svg"],
  },
  {
    id: 4,
    image: Work4,
    title: "GameVault App",
    category: ["Fullstack"],
    github: "https://github.com/mehulkumar22/GameVault",
    live: "https://github.com/mehulkumar22/GameVault",
    description: "A full-fledged e-commerce platform with cart, authentication, and product management.",
    techStack: ["/icons/react.png", "/icons/node.svg", "/icons/mongodb.png"],
  },
  {
    id: 5,
    image: Work5,
    title: "Nudity Detection in Images",
    category: ["Fullstack"],
    github: "https://github.com/mehulkumar22/Nudity-Detection-In-Images",
    live: "https://nudity-detection.vercel.app/",
    description: "AI-powered web app that detects nudity in images using a hybrid CNN and Swin V2-T model for high accuracy",
    techStack: ["/icons/react.png", "/icons/node.svg", "/icons/mongodb.png"],
  },
];

export default Menu;
