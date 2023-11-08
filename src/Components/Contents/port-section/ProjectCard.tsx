import { BsLink45Deg, BsGithub } from "react-icons/bs";
// import { useState } from "react";

type ProjectCardProps = {
    id: number;
    image: string;
    icon: React.ReactNode;
    title: string;
    description: string;
    url: string;
    repository: string;
    about: string;
    technology: string[];
    setIsOpenModal: (isModalOpen: boolean) => void;
    setModalSelect: (selectedModal: number) => void;
};

const ProjectCard = (props: ProjectCardProps) => {
    return (
        <>
            <div className="project-card" id={"project-" + props.id}>
                <img src={props.image} alt="logo" />
                <div className="card-topic">
                    <h5>{props.title}</h5>
                    {props.icon}
                </div>
                <p>{props.description}</p>
                <div className="link">
                    <a
                        href={props.url ? props.url : "#"}
                        target={props.url && "_blank"}
                    >
                        <BsLink45Deg />
                        Demo
                    </a>
                    <a
                        href={props.repository ? props.repository : "#"}
                        target={props.repository && "_blank"}
                    >
                        <BsGithub />
                        Repo
                    </a>
                </div>
                <button
                    onClick={() => {
                        props.setIsOpenModal(true);
                        props.setModalSelect(props.id);
                    }}
                >
                    More Details . . .
                </button>
            </div>
        </>
    );
};

export default ProjectCard;
