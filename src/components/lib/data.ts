 interface experienceProps  {
  img:string,
  Header:string,
  headerText:string,
  headerDate:string,
  mainText:string,
  skills:string,
}

 export const ExperienceData:experienceProps[] = [
    {
        img:"/images/GQ7yXltXwAA2JKO.jpg",
        Header:"React.js Developer",
        headerText:"DispatchaHq",
        headerDate:"March 2022 - April 2023",
        mainText:"Working alongside designers, product managers, and other developers to develop high-quality products Ensuring responsive design and cross-browser compatibility.",
        skills:"• JavaScript • Tailwind • Next Js • React Js"
    },
    {
        img:"/images/GQ7zZv4XsAANYnP.jpg",
        Header:"Wordpress Developer",
        headerText:"IP-Lady Healthcare",
        headerDate:"June 2023 - Present",
        mainText:"Creating and customizing themes and plugins for iPlady's WordPress websites to enhance functionality and appearance.Regularly updating WordPress core, themes, and plugins, troubleshooting issues, and optimizing website performance to ensure iPlady's sites are secure, efficient, and user-friendly.",
        skills:"• Wordpress • Elementor • Elementorpro • Photoshop"
    },
    {
        img:"/images/GQ8PWDQWMAAUFmD.jpg",
        Header:"Graphic Designer",
        headerText:"Alivee.co",
        headerDate:"Jan 2022 - Present",
        mainText:"Designing and producing visual content such as logos, banners, infographics, and marketing materials that align with Alivee's brand identity and objectives.",
        skills:"• Photoshop • Adobe Illustrator"
    }
]

// data.ts
export interface ProjectType {
  img: string;
  title: string;
  description: string;
  skills: string;
  liveLink: string;
  codeLink: string;
}

export const projects: ProjectType[] = [
  {
    img: "/images/cart.png",  
    title: "Project One",
    description: "A React cart Web application.",
    skills: "React, Typescript, Node.js",
    liveLink: "https://typescript-app-five.vercel.app/",
    codeLink: "https://github.com/Pogbayo/typescript-app",
  },
  {
    img: "/images/all-stars.png", 
    title: "Project Two",
    description: "A crypto presale web application",
    skills: "React, Typescript, Zod",
    liveLink: "https://www.allstarstoken.xyz/",
    codeLink: "https://github.com/Pogbayo/animation",
  },
  {
    img: "/images/theta.png",  
    title: "Project Three",
    description: "A Web3 site landing page.",
    skills: "React,zod and typescript",
    liveLink: "https://www.themaintheta.xyz/",
    codeLink: "https://github.com/Pogbayo/edge-cloud",
  },
];

export interface ContactPropsType{
  email:string;
  name:string;
  subject:string;
  message:string;
}
