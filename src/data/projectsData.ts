export interface ProjectDetails {
  name: string;
  description: string;
  technologies: string[];
  url: string | null;
  img: string | null;
  type: string;
}

let aideLndProject: ProjectDetails = {
  name: "Aide Academy/Aide Lnd",
  description: `This project aims to make remove hassles of Content creation, creating assessments on Content, and grading the assessments on Admin's behalf. 
    We generate the transcript of the video and feed the data to the VectorDB and learning assistant bot assists users in their Queries.
    It is also a CMS which tracks the enrolled users progress in the course, serves analystics to the admin among various other options like course approval workflow.`,
  technologies: [
    "ReactJS",
    "Redux",
    "Typescript",
    "HTML",
    "CSS",
    "SQL",
    "SpringBoot",
    "Docker",
    "AWS",
    "Java",
    "Typescript",
    "RabbitMQ",
    "Redis",
    "VectorDB",
    "qDrant",
  ],
  url: "https://theaideplatform.com/products/operations/aide-academy.html",
  img: "https://abhijeet-portfolio-personal-build-bucket.s3.ap-south-1.amazonaws.com/public/thisisengineering-Hjez0AY_c4k-unsplash.jpg",
  type: "Professional",
};

let aideSalesProject: ProjectDetails = {
  name: "Aide Sales",
  description: `This project Empoweres the sales teams by providing them information of Success stories of the company on their finger tips. The success stories are stored in postgres as well a Vector database, which is refactored by the LLM to fit the client prompt. It guarentees day one productivity of the Sales rep with this feature.
  
  <br/> <br/>The App also features a Dashboard on technologies providing real time insights on improvement areas or achievements of the company.
  We are using Spring Boot, Netflix Eureka Server to register Microservices, Llama3, Java, ReactJs Nginx and Redis to store File's and folder information stored on the site.`,
  technologies: [
    "ReactJS",
    "Redux",
    "Typescript",
    "HTML",
    "CSS",
    "SQL",
    "SpringBoot",
    "Docker",
    "AWS",
    "Java",
    "Typescript",
    "RabbitMQ",
    "Redis",
    "VectorDB",
    "qDrant",
  ],
  url: "https://theaideplatform.com/products/operations/aide-academy.html",
  img: "https://abhijeet-portfolio-personal-build-bucket.s3.ap-south-1.amazonaws.com/public/thisisengineering-hoivM01c-vg-unsplash.jpg",
  type: "Professional",
};

let zemosoFrontEndProject: ProjectDetails = {
  name: "Cyborg Test Files Generator",
  description: `Developed a User-Friendly Front-end which would produce Cyborg Test Files. The front-end is built using ReactJS, Redux, Typescript, HTML & CSS.
  This would help Test Engineers generate files for their API testing, E2E testing and would mainly remove manual errors possible in writing those files in for the tool Cyborg to consume`,
  technologies: [
    "ReactJS",
    "Redux",
    "Typescript",
    "HTML",
    "CSS",
    "Docker",
    "Java",
    "Typescript",
  ],
  url: "https://www.bakerhughes.com/cordant/platform",
  img: "https://abhijeet-portfolio-personal-build-bucket.s3.ap-south-1.amazonaws.com/public/thisisengineering-Hjez0AY_c4k-unsplash.jpg",
  type: "Professional",
};

let zemosoTestProject: ProjectDetails = {
  name: "GE Test Files Generator",
  description: `Developed a User-Friendly Front-end which would produce Zemoso Test Files. The front-end is built using ReactJS, Redux, Typescript, HTML & CSS.
    This would help Test Engineers generate files for their API testing, E2E testing and would mainly remove manual errors possible in writing those files in for the tool Zemoso to consume`,
  technologies: [
    "ReactJS",
    "Redux",
    "Typescript",
    "HTML",
    "CSS",
    "Docker",
    "Java",
    "Typescript",
  ],
  url: "https://www.bakerhughes.com/cordant/platform",
  img: "https://abhijeet-portfolio-personal-build-bucket.s3.ap-south-1.amazonaws.com/public/thisisengineering-hoivM01c-vg-unsplash.jpg",
  type: "Professional",
};

let zemosoTestBDDProject: ProjectDetails = {
  name: "GE Cordant App BDD Test Project",
  description: `Developed around 40% of test cases of the Project using BDD testing with Cucumber Framework. Laid ground for best practices in BDD test case development. 
  Mentored juniors on many concepts in UI Testing and Api Testing.
  Using When Then statements developed API test cases using RestAssured Framework and Cyborg(Selenium Wrapper FW)`,
  technologies: [
    "BDD",
    "Selenium",
    "RestAssured",
    "Cucumber",
    "Jira",
    "HTML",
    "CSS",
    "Java",
  ],
  url: "https://www.bakerhughes.com/cordant/platform",
  img: "https://abhijeet-portfolio-personal-build-bucket.s3.ap-south-1.amazonaws.com/public/thisisengineering-Hjez0AY_c4k-unsplash.jpg",
  type: "Professional",
};
let roltaBMSProject: ProjectDetails = {
  name: "Rolta BMS",
  description: `It was a Battle Field Management Software which would allow the Commander to add inventory for a war, manage the battle, 
  and track the real time status of a war. Taksing Module was a feature which would allow the Commander to add inventory,plan the strategy for a war. 
  Role in this project was to facilitate the commander to add inventory to a task/strategy and prepare for a war. Java Swing UI was used for the front End`,
  technologies: [
    "ReactJS",
    "Redux",
    "Typescript",
    "HTML",
    "CSS",
    "Docker",
    "Java",
    "Typescript",
  ],
  url: "https://rolta.com",
  img: "https://abhijeet-portfolio-personal-build-bucket.s3.ap-south-1.amazonaws.com/public/thisisengineering-Hjez0AY_c4k-unsplash.jpg",
  type: "Professional",
};

let visitorManagementSystemElitser: ProjectDetails = {
  name: "Visitor Management System",
  description: `This is a Visitor Management System that tracks the visitors visiting the organization and issues passes and tracks their luggage and visit timings. 
  It also allows the admin to have a Dashboard which serves the statistics of the viewers, passes and their timings. 
  It also notifies the attendants about the visitors, if the timings have elapsed helping them manage visitors easily. <br/><br/> 
  It was built using HTML5, CSS3, JavaScript, and J2EE, using JSP technology`,
  technologies: ["HTML5", "CSS3", "JavaScript", "J2EE", "JSP"],
  url: "http://elitser.com/",
  img: "https://abhijeet-portfolio-personal-build-bucket.s3.ap-south-1.amazonaws.com/public/thisisengineering-hoivM01c-vg-unsplash.jpg",
  type: "Professional",
};

let portfolioProject: ProjectDetails = {
  name: "Portfolio Project",
  description:
    "This project is made with ♥ using TailwindCSS, ReactJS, Typescript, HTML, CSS technologies. For animations in this project, framer motion was used. It is the project you are looking at right now.",
  technologies: ["TailwindCSS", "ReactJS", "Typescript", "HTML", "CSS"],
  url: "",
  img: "https://abhijeet-portfolio-personal-build-bucket.s3.ap-south-1.amazonaws.com/public/thisisengineering-Hjez0AY_c4k-unsplash.jpg",
  type: "Personal",
};

let projects = [
  aideLndProject,
  aideSalesProject,
  zemosoFrontEndProject,
  zemosoTestProject,
  zemosoTestBDDProject,
  roltaBMSProject,
  visitorManagementSystemElitser,
  portfolioProject,
];
export default projects;
