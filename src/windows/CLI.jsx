import React from "react";
import MacWindow from "./MacWindow";
import Terminal from "react-console-emulator";
import "./cli.scss";

const CLI = () => {
  const commands = {
    about: {
      description: "About me",
      fn: () => {
        return `
Hi, I'm Dhruv Sahu 👋
MERN Stack Developer

• Full-stack web apps using MongoDB, Express, React, Node
• Java enthusiast
• Currently learning Spring Boot
• Love building scalable backend systems

Type 'skills' to explore more.
    `;
      },
    },

    skills: {
      description: "View technical skills",
      fn: () => {
        return `
Tech Stack:

Frontend:
• React.js
• JavaScript (ES6+)
• HTML5 / CSS3
• Responsive UI

Backend:
• Node.js
• Express.js
• Java (Core + OOP)
• Spring Boot (Learning)

Database:
• MongoDB
• MySQL

Core Concepts:
• OOP
• REST APIs
• Collections & Stream API
• Multithreading (Java Basics)
• MVC Architecture

Tools:
• Git & GitHub
• Postman
• VS Code
• Eclipse IDE

Type 'projects' to view my projects.
    `;
      },
    },

    projects: {
      description: "List all projects",
      fn: () => {
        return `
Projects:

1. EduConnect
2. Operating-System-Portfolio
3. Two-Good-Co
4. Modern-UI
5. k-72
6. Code-Collab
7. kaam-Worker
8. Shayrana (WIP)
9. Blog-App
10. Image-Enhancer


Type: project <name>
        `;
      },
    },

  project: {
  description: "View project details",
  usage: "project <name>",
  fn: (...args) => {

    if (!args.length) {
      return "Usage: project <name>";
    }

    const input = args.join(" ").toLowerCase().replace(/\s+/g, "-");

    const projectDetails = {

      "educonnect": {
        info: `
[ EduConnect ]

Type: Full-Stack MERN Platform
Description:
Social + academic collaboration platform for students & admins.

Highlights:
• Authentication & role-based access
• Secure DevSecOps pipeline
• CI/CD with GitHub Actions
• Deployed to AWS

Tech:
MongoDB | Express | React | Node | Docker | AWS

Available Links:
• repo
        `,
        demo: "https://your-educonnect-demo.com",
        repo: "https://github.com/Dhruvsahu1/Educonnect-D"
      },

      "operating-system-portfolio": {
        info: `
[ Operating-System-Portfolio ] 
 Type: Interactive Developer Portfolio
 Description: macOS-inspired terminal portfolio with command-based navigation. 
 Highlights: • Custom CLI commands • OS-style UI • Smooth animations • Fully responsive
 Tech: React | JavaScript | SCSS

Available Links:
• demo
• repo
        `,
        demo: "https://your-portfolio-demo.com",
        repo: "https://github.com/Dhruvsahu1/OperatingSystemPortfolio"
      },

      "two-good-co": {
        info: `
[ Two-Good-Co ]
  Type: Modern Landing Page 
  Description: High-end animated website inspired by premium brand design. 
  Highlights: • Smooth scroll animations • Modern UI/UX • Clean component structure 
  Tech: React | CSS | JavaScript

Available Links:
• demo
• repo
        `,
        demo: "https://dhruvsahu1.github.io/TwoGoodCo/",
        repo: "https://github.com/Dhruvsahu1/TwoGoodCo"
      },

      "modern-ui": {
        info: `
[ Modern-UI ] 
 Type: Frontend UI Project
 Description: A modern responsive UI design with clean layout & animations.
 Tech: Next.js | Tailwind Css | CSS | Responsive Design

Available Links:
• demo
• repo
        `,
        demo: "https://modern-4j3uub8gc-dhruvs-projects-dd20e242.vercel.app/",
        repo: "https://github.com/Dhruvsahu1/ModernUI"
      },

      "k-72": {
        info: `
[ K-72 ] 
 Type: Web Application
 Description: Dynamic frontend project focused on structured layout & UI logic.
 Tech: React | JavaScript | GSAP

Available Links:
• demo
• repo
        `,
        demo: "https://k72-ten.vercel.app/",
        repo: "https://github.com/Dhruvsahu1/K72"
      },

      "code-collab": {
        info: `
[ Code-Collab ] 
 Type: Collaboration Platform
 Description: A real-time collaboration environment concept for developers.
 Highlights: • Scalable backend-ready structure • Multi-user logic planning 
 Tech: MERN Stack

Available Links:
• repo
        `,
        demo: "https://your-codecollab-demo.com",
        repo: "https://github.com/Dhruvsahu1/CodeCollab"
      },

      "kaam-worker": {
        info: `
[ kaam-Worker ]
  Type: Service Platform
  Description: Connects local workers with customers for job-based services.
  Highlights: • Role-based access • Booking workflow logic
  Tech: MERN Stack

Available Links:
• repo
        `,
        demo: "https://your-kaam-demo.com",
        repo: "https://github.com/Dhruvsahu1/kaamWorker"
      },

      "shayarana": {
        info: `
[ Shayarana ] (WIP) 
 Type: Creative Content Platform
 Description: Platform for sharing poetry & creative writing.
 Status: Work in progress 🚧 
 Tech: MERN Stack

Available Links:
• repo
        `,
        repo: "https://github.com/Dhruvsahu1/Shayrana"
      },

      "blog-app": {
        info: `
[ Blog-App ] 
 Type: Full-Stack Blog Platform 
 Description: CRUD-based blog application with authentication & secure routing.
 Tech: MongoDB | Express | EJS | Node

Available Links:
• repo
        `,
        demo: "https://your-blog-demo.com",
        repo: "https://github.com/Dhruvsahu1/ProjectBackend"
      },

      "image-enhancer": {
        info: `
[ Image-Enhancer ]
  Type: Utility Web App
  Description: Image processing tool for improving and enhancing visuals.
  Highlights: • Real-time preview • Clean UI
  Tech: React | API Integration

Available Links:
• demo
• repo
        `,
        demo: "https://image-enhancer-theta.vercel.app/",
        repo: "https://github.com/Dhruvsahu1/Image-Enhancer"
      }
    };

    const project = projectDetails[input];

    if (!project) return "Project not found.";

    return project.info + `
Use:
open ${input} demo
open ${input} repo
    `;
  },
},


    contact: {
      description: "Contact information",
      fn: () => {
        return `
           Email: dhruvvsaahu@gmail.com
           Contact: +91-9125225751
           Location: India
        `;
      },
    },

    github: {
      description: "Open GitHub profile",
      fn: () => {
        window.open("https://github.com/DhruvSahu1", "_blank");
        return "Opening GitHub...";
      },
    },

    linkedin: {
      description: "Open LinkedIn profile",
      fn: () => {
        window.open(
          "https://www.linkedin.com/in/dhruv-sahu-aa5124247/",
          "_blank",
        );
        return "Opening LinkedIn...";
      },
    },

    echo: {
      description: "Echo a passed string",
      usage: "echo <string>",
      fn: (...args) => args.join(" "),
    },
  };
  const welcomeMessage = `
Welcome to My Portfolio CLI!

Hello! 👋 Welcome to my interactive portfolio.

You can navigate through my work using simple commands.

Type 'help' to see all available commands, or try:

  about       - Learn about me
  skills      - View my technical skills
  projects    - Check out my work
  experience  - See my career history
  contact     - Get in touch

Happy exploring! 🚀
`;

  return (
    <MacWindow>
      <div className="cli-window">
        <Terminal
          commands={commands}
          welcomeMessage={welcomeMessage}
          promptLabel={"Dhruvsahu:~$"}
        />
      </div>
    </MacWindow>
  );
};

export default CLI;
