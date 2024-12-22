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
        Header:"Emnet IT services",
        headerText:"NextJs Developer",
        headerDate:"February 2024 - March 2024",
        mainText:"Working alongside designers, product managers, and other developers to develop high-quality products Ensuring responsive design and cross-browser compatibility.",
        skills:"• JavaScript • Tailwind • Next Js • React Js"
    },
    {
        img:"/images/GQ7zZv4XsAANYnP.jpg",
        Header:"Apex Bee",
        headerText:"IP-Lady Healthcare",
        headerDate:"January 2023 - February 2024",
        mainText:"Creating and customizing themes and plugins for iPlady's WordPress websites to enhance functionality and appearance.Regularly updating WordPress core, themes, and plugins, troubleshooting issues, and optimizing website performance to ensure iPlady's sites are secure, efficient, and user-friendly.",
        skills:"• Wordpress • Elementor • Elementorpro • Photoshop"
    },
    {
        img:"/images/GQ8PWDQWMAAUFmD.jpg",
        Header:"Graphic Designer",
        headerText:"Alivee.co",
        headerDate:"April 2022 - August 2022",
        mainText:"Designing and producing visual content such as logos, banners, infographics, and marketing materials that align with Alivee's brand identity and objectives.",
        skills:"• NextJs and Nima Design"
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
    img: "/images/Travel.png",  
    title: "Project One",
    description: "Travel Itinerary Platfrom where users can add flight,hotels and activities to their respective itineraries.",
    skills: "ReactJs, Typescript, Node.js",
    liveLink: "https://assessment-pt6f.vercel.app/",
    codeLink: "https://github.com/Pogbayo/assessment",
  },
  {
    img: "/images/all-stars.png", 
    title: "Project Two",
    description: `A crypto presale web application landing page with a "connect wallet" functionality` ,
    skills: "ReactJs, Typescript, Zod",
    liveLink: "https://www.allstarstoken.xyz/",
    codeLink: "https://github.com/Pogbayo/animation",
  },
  {
    img: "/images/blog.png", 
    title: "Project Three",
    description: "A fully functional blog app with authentication for users to register and login and an Admin oanel to delete,add posts and also delte users",
    skills: "NextJs and Typescript",
    liveLink: "https://next-js-blog-app-g7rr.vercel.app/",
    codeLink: "https://github.com/Pogbayo/NextJsBlogApp",
  },
  {
    img: "/images/theta.png",  
    title: "Project Four",
    description: "A Cloud platform landing page utilizing the leaflet map library for geo-locations.",
    skills: "ReactJs,zod and typescript",
    liveLink: "https://www.themaintheta.xyz/",
    codeLink: "https://github.com/Pogbayo/edge-cloud",
  },
  {
    img: "/images/spotify.png",  
    title: "Project Five",
    description: "Spotify Clone App with an actual media playing functionality,next and previous ,play and a stop button",
    skills: "ReactJs and typescript",
    liveLink: "https://spotify-omega-drab.vercel.app/",
    codeLink: "https://github.com/Pogbayo/Spotify",
  },
];

export interface ContactPropsType{
  email:string;
  name:string;
  subject:string;
  message:string;
}
