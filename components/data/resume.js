export const about = {
  title:'About me',
  description: [
    `I’m a full-stack developer with over 3 years of experience building and maintaining scalable web applications and database-driven systems. 
     I specialize in technologies like C#, ASP.NET, JavaScript (React, Node.js), MySQL, and Shopify—delivering solutions that improve user experience, system reliability, and business efficiency.`,
    `I’ve developed CMS platforms, healthcare certification systems, and internal tools for automating tasks like inventory tracking and database backups. My work has helped reduce support requests, eliminate service downtime, and streamline operations across teams.`,
    `I’m continuously refining my skills—especially in front-end and back-end development—and exploring how emerging technologies like AI (OpenAI's GPT-4) can enhance user interaction. While I’ve worked with services like AWS for database hosting and integrations, I’m currently focused on sharpening my full-stack capabilities and learning through hands-on projects.`,
    `When I’m not coding, you’ll probably find me on the golf driving range, playing a basketball game, or diving into a good video game. I believe a balanced life fuels creativity—and great code.`,
    `Let’s build impactful and efficient solutions together.`
  ],
  images:[
    '/assets/photo1.jpg',
    '/assets/photo2.jpg'
  ]
};

export const certifications = {
  title:'Certfications',
  description:"A collection of certifications that reflect my commitment to continuous learning in tech.",
  cert_items:[
    {
     provider:"Codecademy",
     certificate: "Learn Testing for Web Development Course",
     issueDate: "June 2025",
     url:"https://www.codecademy.com/profiles/RonvicErnestCuevas/certificates/05ded7635e6bfe1d3d1f776db3f1fa32"
    },
    {
     provider:"Codecademy",
     certificate: "Learn C# Course",
     issueDate: "May 2025",
     url:"https://www.codecademy.com/profiles/RonvicErnestCuevas/certificates/65f0ff88f4fc58e0536b3b51648dff24"
    },
    {
     provider:"Codecademy",
     certificate: "Design Databases With PostgreSQL Skill Path",
     issueDate: "April 2025",
     url:"https://www.codecademy.com/profiles/RonvicErnestCuevas/certificates/5f64e3b492de0000131ecbe0"
    },
    {
     provider:"TestDome",
     certificate: "C# and .NET",
     issueDate: "March 2025",
     url:"https://www.testdome.com/certificates/82cceb81eab04e5cae9fdcc3898da8ec"
    },
    {
     provider:"TestDome",
     certificate: "SQL",
     issueDate: "October 2024",
     url:"https://www.testdome.com/certificates/82cceb81eab04e5cae9fdcc3898da8ec"
    },
    {
     provider:"TestDome",
     certificate: "R",
     issueDate: "September 2024",
     url:"https://www.testdome.com/certificates/8eb94ededa614189bd9fe444f1da1035"
    },
    {
     provider:"TestDome",
     certificate: "JavaScript and Node.js",
     issueDate: "August 2024",
     url:"https://www.testdome.com/certificates/cf5671890a8247678f121854fe17b72c"
    }
  ]
}

export const education = {
  title:'My Education',
  description:"Education Timeline",
   education_items:[
    {
     institution:"UC Davis",
     degreeTitle:"Bachelor of Science",
     degreeField: "Computer Science",
     duration: "2020 - 2022"
    },
    {
     institution:"Woodland Community College",
     degreeTitle:"Associate of Science",
     degreeField: "Natural Science and Mathematics",
     duration: "2017 - 2020"
    }
  ]
};


export const experience = {
  title:'Professional Experience',
  description:"My Career Journey",
   job_experiences:[
    {
     company:"BZAM LLC",
     position: "Shopify Web Developer",
     duration: "January 2025 - Present",
     responsibilities: (
        <>
          Developed and customized{' '}
          <a
            href="https://playstreetgolf.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[var(--textaccent)]"
          >
            playstreetgolf.com
          </a>{' '}
          on Shopify by editing theme files and Liquid templates to create custom sections, embed unique content, and implement on-page SEO techniques to boost product visibility and drive sales.
        </>
      ), 

    impactPoints: [
      <>
      Built and designed{' '}
      <a
        href="https://streetgolf.org/"
        target="_blank"
        rel="noopener noreferrer"
        className="underline text-[var(--textaccent)]"
      >
        streetgolf.org
      </a>{' '}
      on Hostinger using pre-built templates, optimizing content with SEO best practices to educate users about street golf and generate backlink traffic to the main Shopify store.
    </>,
      "Focused on enhancing user experience and increasing brand awareness to support e-commerce sales growth."
      ]
    },
    {
     company:"Anderson Continuation Education",
     position: "Web Developer",
     duration: "April 2023 - Present",
     responsibilities:"Developed and maintained the company's healthcare certification website using C#, ASP.NET, and MySQL on a Linux VPS.",
     impactPoints: [
        "Built and deployed a Quantity Tracking System enabling the online sale of used books for the first time, with automated stock updates and real-time UI changes — increased product visibility by 100% and eliminated stock-related support issues.",
        "Resolved recurring storage and uptime issues by migrating from GoDaddy shared hosting to a Linux VPS, eliminating bi-monthly outages and doubling system reliability.",
        "Fixed a year-long password reset issue by implementing custom `message-id` headers and correcting SPF records, leading to a 90% boost in email deliverability and 85% reduction in support tickets.",
        "Automated MySQL backups from AWS RDS to a local Windows machine via batch scripting, removing the need for manual exports and reducing S3 storage costs to zero."
      ]
    },
     {
     company:"Four Wheel Campers",
     position: "Software Engineer",
     duration: "August 2022 - July 2023",
     responsibilities:"Developed full-stack web apps using NodeJS for the backend and HTML, CSS, and JavaScript for the front end. Integrates with RESTFUL API for efficient systems across company departments.",
     impactPoints: [
        "Proposed and developed a Digital Production Daily Tracker, presenting the idea to stakeholders to transition from a paper-based system. The implementation increased tracking accuracy by 50%, reduced data entry time by 70%, and saved approximately 10 hours per week for the production manager.",
        "Resolved critical data duplication and slow document generation issues in order scheduling by migrating Excel data into MySQL, which reduced manual data checks by 60% and improved document processing speed by 80%. This solution alleviated production team frustrations and saved a significant amount of time, hence enhancing overall efficiency.",
        "Generated user-friendly documentation for non-technical staff, including detailed PowerPoint guides with images and step-by-step instructions. This resource streamlined access to digital production data by clarifying file paths and processes, reducing training time by 40%, and minimizing user errors by 30%.",
        ]
    },
    {
     company:"UC Davis Language Center",
     position: "Software Engineer",
     duration: "January 2022 - March 2022",
     responsibilities:"Designed and developed the front-end of a cloud-based vocabulary learning platform (Eyevocab) using JavaScript and ReactJS, implementing mockup-based UX/UI and integrating asynchronous API calls from an ExpressNode backend with RethinkDB.",
     impactPoints: [
        "Improved routing and login verification time by 20% using JWT tokens, enhancing security and the user authentication experience.",
        "Debugged and updated the instructor view home screen by implementing new ReactJS routers and links, reducing login bugs by 50% after thorough testing and debugging.",
        "Designed and implemented reusable ReactJS course templates for instructors, increasing the speed of course creation by 20%."
      ]
    }
  ]
};


export const projects = [
    {
        num:'01',
        category:"front-end",
        title:"AI Chatbot 🤖",
        description:"A smart and responsive AI chatbot assistant built with the React framework, powered by OpenAI's ChatGPT-4 Mini for seamless conversational interactions.",
        stack:[{name: "React"},{name:"Vite"},{name:"OpenAI GPT-4 API"},{name:"Tailwind CSS"}],
        image:'/assets/projects/chatbot.jpg',
        live:"https://chat-gpt-4-mini-assistant.vercel.app/",
        github:"https://github.com/ronvic12/ChatGPT4Mini-Assistant"
    },
     {
        num:'02',
        category:"Web Development",
        title:"Food Donations Made Easy",
        description:"A web-based platform to facilitate food donations within the local community. The system allows donors to submit available food items and enables individuals in need to browse, request, and track donations in real time.",
        stack:[{name: "C#"},{name:"ASP.NET Web Forms"},{name:"MySQL"}],
        image:'/assets/projects/food.jpg',
        live:"",
        github:"https://github.com/ronvic12/Food_Donor_Management_System"
    },
     {
        num:'03',
        category:"game-development",
        title:"Earth Defender",
        description:"An adventurous and action 2D Shooter Game, where the Earth is invaded by Aliens. As a ranger in space, your duty is to fight through the galaxy and defeat all aliens to make the Earth feel safe again",
        stack:[{name: "C#"},{name:"Unity Engine"},{name:"WebGL"}],
        image:'/assets/projects/space_game.png',
        live:"https://coderedac30.itch.io/earth-defender",
        github:"https://github.com/ronvic12/2D-Shooter?tab=readme-ov-file"
    },
     {
        num:'04',
        category:"game-development",
        title:"KnightQuest",
        description:"A 2D platform gameplay with simple sword combat mechanics. The goal of the game is traverse various obstacles and enemies in order to save the royal family. Worked with 5 people, contributed by implementing User Interface, Map Level Design and Narrative Design.",
        stack:[{name: "C#"},{name:"Unity Engine"},{name:"WebGL"}],
        image:'/assets/projects/knightquest.png',
        live:"https://breliu-dv.github.io/KnightQuest/",
        github:"https://github.com/breliu-dv/KnightQuest"
    },
    {
        num:'05',
        category:"Artificial Intelligence",
        title:"Connect 4 AI",
        description:"Developed two AI agents—MinimaxAI and AlphaBetaAI—to explore and implement fundamental decision-making algorithms used in two-player adversarial games. Focused on understanding game tree evaluation, optimal move selection, and performance optimization through alpha-beta pruning.",
        stack:[{name: "Python"}],
        image:'/assets/projects/connect.png',
        live:"",
        github:"https://github.com/ronvic12/Connect4-ai-v2.0"
    }
]


