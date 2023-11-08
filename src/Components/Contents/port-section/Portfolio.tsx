import { useState } from "react";
import HeadTopic from "../../HeadTopic";
import { BsFileEarmarkCodeFill } from "react-icons/bs";
import ProjectData from "../../../Data/ProjectData";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

import "../../../Styles/portfolio.css";

const Portfolio = () => {
    const [modalSelect, setModalSelect] = useState(0);
    const [isOpenModal, setIsOpenModal] = useState(false);

    return (
        <section className="portfolio-section" id="portfolio">
            <HeadTopic
                class="head-topic"
                text="My Portfolio"
                icon={<BsFileEarmarkCodeFill />}
            />
            <HeadTopic id="workshops" class="sub-topic" text="Workshops" />
            <HeadTopic id="projects" class="sub-topic" text="Projects" />
            <div className="grid-con">
                {ProjectData.map((item) => {
                    return (
                        <ProjectCard
                            key={item.id}
                            {...item}
                            setIsOpenModal={setIsOpenModal}
                            setModalSelect={setModalSelect}
                        />
                    );
                })}
            </div>

            {ProjectData.map((item) => {
                if (item.id === modalSelect) {
                    return (
                        <ProjectModal
                            key={item.id}
                            {...item}
                            isOpenModal={isOpenModal}
                            setIsOpenModal={setIsOpenModal}
                        />
                    );
                }
            })}
        </section>
    );
};

export default Portfolio;
