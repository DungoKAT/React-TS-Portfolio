import { useState } from "react";
import { BsInfoSquareFill } from "react-icons/bs";
import HeadTopic from "../../HeadTopic";

import "../../../Styles/about.css";

const About = () => {
    const AboutInfo = {
        Skills: [
            {
                title: "UX/UI",
                shortDescription: "Desiging Web/App interfaces",
            },
            {
                title: "Web Development",
                shortDescription: "Web app Development",
            },
            {
                title: "App Development",
                shortDescription: "Building Adroid/iOS apps",
            },
        ],
        Education: [
            {
                title: "2016",
                shortDescription: "Visuttharansri Kanchanaburi",
            },
            {
                title: "2019",
                shortDescription: "Information Technology at KMITL",
            },
        ],
        Experience: [
            {
                title: "HTML",
                shortDescription: "Intermediate",
            },
            {
                title: "CSS",
                shortDescription: "Intermediate",
            },
            {
                title: "JavaScript",
                shortDescription: "Basic - Intermediate",
            },
            {
                title: "TypeScript",
                shortDescription: "Learning",
            },
            {
                title: "ReactJS",
                shortDescription: "Basic",
            },
            {
                title: "Tailwind CSS",
                shortDescription: "Learning",
            },
        ],
    };

    const [infoNavActive, setInfoNavActive] = useState<string>("skills");
    const [infoTextActive, setInfoTextActive] = useState(AboutInfo.Skills);

    return (
        <section className="about-section" id="about">
            <HeadTopic
                class="head-topic"
                text="About me"
                icon={<BsInfoSquareFill />}
            />
            <div className="content">
                <div className="profile-image"></div>
                <div className="profile-text">
                    <div className="profile-introduce">
                        <h2>Punnaphat Phiamwanapuwanon</h2>
                        <h4>Web Developer</h4>
                        <p>
                            I am a web developer with a passion for developing
                            web applications. I have a background in information
                            technology and a passion for web development.
                        </p>
                    </div>
                    <div className="profile-info">
                        <div className="info-nav">
                            <button
                                className={
                                    infoNavActive === "skills" ? "active" : ""
                                }
                                onClick={() => {
                                    setInfoNavActive("skills");
                                    setInfoTextActive(AboutInfo.Skills);
                                }}
                            >
                                Skills
                            </button>
                            <button
                                className={
                                    infoNavActive === "education"
                                        ? "active"
                                        : ""
                                }
                                onClick={() => {
                                    setInfoNavActive("education");
                                    setInfoTextActive(AboutInfo.Education);
                                }}
                            >
                                Educaton
                            </button>
                            <button
                                className={
                                    infoNavActive === "experience"
                                        ? "active"
                                        : ""
                                }
                                onClick={() => {
                                    setInfoNavActive("experience");
                                    setInfoTextActive(AboutInfo.Experience);
                                }}
                            >
                                Experience
                            </button>
                        </div>
                        <div className="info-text">
                            {infoTextActive.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <h3>{item.title}</h3>
                                        <p>{item.shortDescription}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
