export interface Experience {
  title: string;
  company: string;
  location: string;
  start: string;
  end: string;
  urlForTitle: string;
  description: string;
}

let technicalArchitectValuelabs: Experience = {
  title: "Technical Architect",
  company: "Valuelabs",
  location: "Hyderabad",
  start: "Mar 2024",
  end: "Present",
  urlForTitle:
    "https://abhijeet-portfolio-personal-build-bucket.s3.ap-south-1.amazonaws.com/public/Software+Architect.jpeg",
  description: `As a seasoned <span class="text-indigo-600">Technical Architect</span>, successfully architected multiple web applications, 
  including <span class="text-indigo-600">AideLnD</span> and <span class="text-indigo-600">AideSales</span>, aimed at enhancing the productivity of sales and marketing teams. 
  My designs prioritize <span class="text-indigo-600">scalability</span>, <span class="text-indigo-600">fault tolerance</span>, and <span class="text-indigo-600">high availability</span>, 
  ensuring that the systems can handle growth and maintain performance under varying loads.<br/><br/>
Significantly influenced design decisions by transitioning <span class="text-indigo-600">synchronous operations</span> to <span class="text-indigo-600">asynchronous processes</span>, which 
has markedly improved application availability and robustness. In addition to my architectural contributions, mentored a team of eight developers in <span class=">clean code principles</span> and best practices, 
while also implementing critical modules such as <span class="text-indigo-600">User Authentication</span> and <span class="text-indigo-600">Authorization</span>. By leveraging technologies 
like <span class="text-indigo-600">Redis</span>, achieved a remarkable reduction in latency from <span class="text-indigo-600">30ms</span> 
to <span class="text-indigo-600">1ms</span>, further enhancing user experience across all applications.
`,
};

let seniorAnalystValuelabs: Experience = {
  title: "Senior Analyst",
  company: "Valuelabs",
  location: "Hyderabad",
  start: "Mar 2023",
  end: "Present",
  urlForTitle:
    "https://abhijeet-portfolio-personal-build-bucket.s3.ap-south-1.amazonaws.com/public/Senior+Analyst.jpeg",
  description: `
  As a dedicated team lead with over 8 years of experience in software development and architecture, 
  the Survey Form Generator application was successfully developed under my guidance. 
  This innovative tool empowers users to design, customize, and schedule surveys seamlessly, with robust performance achieved 
  through the use of <span class="text-indigo-500">AWS RDS</span> and <span class="text-indigo-500">AWS ECS</span>. 
  An outdated application was transitioned from <span class="text-indigo-500">VueJS 2</span> and <span class="text-indigo-500">Node.js 10</span> to a modern stack utilizing <span class="text-indigo-500">Node.js 16</span> and 
  <span class="text-indigo-500">ReactJS 18</span>, incorporating function components 
  that enhanced maintainability and scalability.<br/><br/>
In addition to driving technological advancements, <span class="text-indigo-500">Redux</span> was implemented for state management, resulting in a significant 40% reduction in API 
calls through efficient data caching. 
This optimization not only improved user experience but also contributed to the successful launch of AideSales. 
Furthermore, an intelligent testing tool was introduced that streamlined the testing process by identifying 
critical endpoints post-git commits, leading to a remarkable 50% decrease in redundant testing efforts. 
My commitment to enhancing team efficiency and delivering high-quality products is demonstrated through these 
achievements as a versatile technical architect and team leader.`,
};

let qaSeniorEngineer: Experience = {
  title: "Senior Software Engineer II in Test",
  company: "Zemoso Labs",
  location: "Hyderabad",
  start: "May 2021",
  end: "Mar 2023",
  urlForTitle:
    "https://abhijeet-portfolio-personal-build-bucket.s3.ap-south-1.amazonaws.com/public/Software+Engineer.jpeg",
  description: `A user-friendly <span class="text-indigo-500">front-end</span> was developed to generate <span class="text-indigo-500">JSON</span> files for the testing tool, resulting in a 60% reduction in error rates and time taken for test case writing. The <span class="text-indigo-500">Spring framework</span> was implemented in an older project, improving the maintainability of testing scripts by 30%, while thread live time on the server was reduced by 30% through parallelization using <span class="text-indigo-500">Java concurrency APIs</span>.
Training sessions on <span class="text-indigo-500">automation tools</span>, best practices for <span class="text-indigo-500">Cucumber script</span> writing, and the <span class="text-indigo-500">testing lifecycle</span> were conducted, resulting in a 50-80% improvement in new joiners' skills. Additionally, 45% of the test cases were authored, enhancing software quality and providing a valuable reference for teammates. `,
};

let roltaSeniorSoftwareEngineer: Experience = {
  title: "Senior Software Engineer",
  company: "Rolta",
  location: "Hyderabad",
  start: "May 2015",
  end: "Jan 2018",
  urlForTitle:
    "https://abhijeet-portfolio-personal-build-bucket.s3.ap-south-1.amazonaws.com/public/Software+Engineer+Simple.jpeg",
  description: `<div class="p-4">
  <p class="mb-4">
    Introduced Spring Data JPA to the team, reducing boilerplate code and increasing time to market by 40%. 
    Implemented secondary caching with Hibernate, reducing database queries by 20%, which significantly improved 
    the response time of the application.
  </p>
  <p class="mb-4">
    Awarded performer of the quarter for completing tasks 20 days ahead of schedule, allowing for extensive module testing. 
    Developed a tasking module providing the commander with real-time operational insights, enabling 40% more accurate decision-making.
  </p>
</div>
`,
};

let elitserSoftwareEngineer: Experience = {
  title: "Software Engineer",
  company: "Elitser",
  location: "Hyderabad",
  start: "Mar 2014",
  end: "May 2015",
  urlForTitle:
    "https://abhijeet-portfolio-personal-build-bucket.s3.ap-south-1.amazonaws.com/public/Software+Engineer.jpeg",
  description: `<p>
    Developed a <span class="text-blue-600 >Visitor Management System</span>, which manages visitor data for a company, with a team of 5 developers. 
    <span class="text-green-600">Established the best coding practices</span> for libraries namely 
    <span class="text-indigo-500 ">jQuery</span> and <span class="text-indigo-500 ">JavaScript</span>, resulting in about 
    <span class="">40%</span> more maintainable code on the front end. 
    Additionally, <span class="text-green-600">established the best coding practices</span> for libraries like 
    <span class="text-indigo-500 ">Java</span> & <span class="text-indigo-500 ">Hibernate</span>, resulting in <span class="">40%</span> more maintainable code across the front end.
</p>`,
};

let amazonContentTestSoftwareEngineer: Experience = {
  title: "Software Engineer",
  company: "Amazon",
  location: "Bangalore",
  start: "Jan 2013",
  urlForTitle:
    "https://abhijeet-portfolio-personal-build-bucket.s3.ap-south-1.amazonaws.com/public/Software+Engineer+Simple.jpeg",
  end: "Dec 2013",
  description: `<p>
    Developed <span class="text-blue-600 >Automation Testing Scripts</span> in <span class="text-indigo-500 ">Java</span>, using the <span class="text-indigo-500 ">Selenium</span> tool, which assured the quality of the <span class="text-blue-600" >Amazon App Store</span>. 
    Conducted <span class="text-green-600">manual testing</span> on Amazon's new tablet devices, ensuring compatibility with the top <span class="">25%</span> of apps in the <span class="text-blue-600" >AppStore</span>.
</p>
`,
};

let allExperiences = [
  technicalArchitectValuelabs,
  seniorAnalystValuelabs,
  qaSeniorEngineer,
  roltaSeniorSoftwareEngineer,
  elitserSoftwareEngineer,
  amazonContentTestSoftwareEngineer,
];

export default allExperiences;
