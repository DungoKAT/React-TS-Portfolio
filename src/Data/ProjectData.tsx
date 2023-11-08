import Enna from "../assets/Enna.jpg";
import { BsFillHouseDoorFill } from "react-icons/bs";

export interface ProjectType {
    id: number;
    image: string;
    icon: React.ReactNode;
    title: string;
    description: string;
    url: string;
    repository: string;
    about: string;
    technology: string[];
}

const ProjectData: ProjectType[] = [
    {
        id: 1,
        image: Enna,
        icon: <BsFillHouseDoorFill />,
        title: "One piece",
        description: "Web Application for lorem issump bla bla bla...",
        url: "https://www.google.co.th/",
        repository: "https://github.com/DungoKAT/React-TS-Portfolio",
        about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        technology: ["React.js", "CSS", "Github", "FontAwesome"],
    },
    {
        id: 2,
        image: Enna,
        icon: <BsFillHouseDoorFill />,
        title: "Naruto",
        description: "Web Application for lorem issump bla bla bla...",
        url: "",
        repository: "",
        about: "This web app is for...",
        technology: ["React.js", "CSS", "JS"],
    },
    {
        id: 3,
        image: Enna,
        icon: <BsFillHouseDoorFill />,
        title: "My Hero",
        description: "Web Application for lorem issump bla bla bla...",
        url: "",
        repository: "",
        about: "This web app is for...",
        technology: ["React.js", "CSS", "JS"],
    },
    {
        id: 4,
        image: Enna,
        icon: <BsFillHouseDoorFill />,
        title: "Bleach",
        description: "Web Application for lorem issump bla bla bla...",
        url: "",
        repository: "",
        about: "This web app is for...",
        technology: ["React.js", "CSS", "JS"],
    },
    {
        id: 5,
        image: Enna,
        icon: <BsFillHouseDoorFill />,
        title: "Death Note",
        description: "Web Application for lorem issump bla bla bla...",
        url: "",
        repository: "",
        about: "This web app is for...",
        technology: ["React.js", "CSS", "JS"],
    },
    {
        id: 6,
        image: Enna,
        icon: <BsFillHouseDoorFill />,
        title: "Hunter x Hunter",
        description: "Web Application for lorem issump bla bla bla...",
        url: "",
        repository: "",
        about: "This web app is for...",
        technology: ["React.js", "CSS", "JS"],
    },
    {
        id: 7,
        image: Enna,
        icon: <BsFillHouseDoorFill />,
        title: "Boruto",
        description: "Web Application for lorem issump bla bla bla...",
        url: "",
        repository: "",
        about: "This web app is for...",
        technology: ["React.js", "CSS", "JS"],
    },
];

export default ProjectData;
