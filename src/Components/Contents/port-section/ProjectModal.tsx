import { BsXLg, BsSun, BsMoon, BsLink45Deg, BsGithub } from "react-icons/bs";
import { AiOutlineProject, AiOutlineCode } from "react-icons/ai";
import { MyStateContext } from "../../../Services/Context";

type ProjectModalProps = {
    id: number;
    image: string;
    icon: React.ReactNode;
    title: string;
    description: string;
    url: string;
    repository: string;
    about: string;
    technology: string[];
    isOpenModal: boolean;
    setIsOpenModal: (bool: boolean) => void;
};

const ProjectModal = (props: ProjectModalProps) => {
    const { lightTheme, setLightTheme } = MyStateContext();

    return (
        <div
            className={
                props.isOpenModal ? "project-modal active" : "project-modal"
            }
        >
            <div
                className="bg"
                onClick={() => props.setIsOpenModal(false)}
            ></div>
            <div className="modal">
                <div className="modal-header">
                    <div>
                        <span>{props.icon}</span>
                        <p>{props.title}</p>
                    </div>
                    <button onClick={() => props.setIsOpenModal(false)}>
                        <BsXLg />
                    </button>
                </div>
                <div className="modal-content">
                    <img src={props.image} alt="" />
                    <div className="modal-sub-topic">
                        <AiOutlineProject />
                        <h4>About this project</h4>
                    </div>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Adipisci possimus quidem eligendi et, deleniti sit
                        totam pariatur facilis vero. Ipsa, natus eius. Velit
                        harum enim libero labore vitae maxime aspernatur?
                    </p>
                    <div className="modal-sub-topic">
                        <AiOutlineCode />
                        <h4>Technology Usage</h4>
                    </div>
                    <div className="technology">
                        {props.technology.map((item) => {
                            return <p>{item}</p>;
                        })}
                    </div>
                </div>
                <div className="modal-footer">
                    <div className="footer-link">
                        <a
                            href={props.url ? props.url : "#"}
                            target={props.url && "_blank"}
                        >
                            <BsLink45Deg /> <p>Website</p>
                        </a>
                        <a
                            href={props.repository ? props.repository : "#"}
                            target={props.repository && "_blank"}
                        >
                            <BsGithub /> <p>Project Repository</p>
                        </a>
                    </div>
                    <button
                        className="switch-theme"
                        onClick={() => setLightTheme(!lightTheme)}
                    >
                        {lightTheme ? <BsMoon /> : <BsSun />}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
