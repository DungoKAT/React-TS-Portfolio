import { useState } from "react";
import { Link } from "react-scroll";
import { MyStateContext } from "../../Services/Context";
import {
    BsHouseDoor,
    BsFileEarmarkCode,
    BsInfoSquare,
    BsSun,
    BsMoon,
    BsList,
    BsXLg,
} from "react-icons/bs";
import { BiSolidChevronDown, BiMessage } from "react-icons/bi";
import ToTopButton from "./ToTopButton";

// CSS
import "../../Styles/navigation.css";

const Navbar = () => {
    const { lightTheme, setLightTheme } = MyStateContext();

    const [closeNav, setCloseNav] = useState(true);
    const [closeSubmenu, setCloseSubmenu] = useState(true);

    const [darklightHover, setDarklightHover] = useState(false);

    const [isHomeSection, setIsHomeSection] = useState(false);

    const mouseOverLink = (
        event: React.MouseEvent<HTMLButtonElement>
    ): void => {
        event.currentTarget.classList.toggle("nav-hover");
    };

    const mouseOutLink = (event: React.MouseEvent<HTMLButtonElement>): void => {
        event.currentTarget.classList.remove("nav-hover");
    };

    const navClassName = () => {
        let className: string = "";
        isHomeSection
            ? closeNav
                ? (className += "hide-nav close-nav ")
                : (className += "")
            : closeNav
            ? (className += "close-nav ")
            : (className += "");
        return className;
    };

    // const activeLink = (event: React.MouseEvent<HTMLButtonElement>): void => {
    //     event.currentTarget.classList.toggle("nav-active");
    // };

    return (
        <>
            <nav className={navClassName()}>
                <div className="nav-top">
                    <span className="nav-top-logo">P</span>
                    <div className="nav-top-text">
                        <h2 className="nav-top-text">Punnaphat</h2>
                        <p className="nav-top-text">Web Developer</p>
                    </div>
                    <button
                        className={navClassName()}
                        onClick={() => {
                            setCloseNav(!closeNav);
                        }}
                    >
                        {closeNav ? <BsList /> : <BsXLg />}
                    </button>
                </div>
                <Link
                    id="home-link"
                    className="navlink"
                    onClick={() => setCloseSubmenu(true)}
                    containerId="app-id"
                    onMouseOver={mouseOverLink}
                    onMouseOut={mouseOutLink}
                    activeClass="active"
                    spy={true}
                    to="home"
                    smooth={true}
                    offset={0}
                    duration={750}
                    onSetActive={() => setIsHomeSection(true)}
                    onSetInactive={() => setIsHomeSection(false)}
                >
                    <BsHouseDoor />
                    <p>Home</p>
                    <div className="link-tooltip">
                        <p>Home</p>
                    </div>
                </Link>
                <Link
                    id="about-link"
                    className="navlink"
                    onClick={() => setCloseSubmenu(true)}
                    containerId="app-id"
                    onMouseOver={mouseOverLink}
                    onMouseOut={mouseOutLink}
                    activeClass="active"
                    spy={true}
                    to="about"
                    smooth={true}
                    offset={0}
                    duration={750}
                    onSetActive={(event) => console.log("About: ", event)}
                >
                    <BsInfoSquare />
                    <p>About</p>
                    <div className="link-tooltip">
                        <p>About</p>
                    </div>
                </Link>
                <Link
                    id="portfolio-link"
                    className={
                        closeSubmenu
                            ? "navlink port-link close-sub-menu"
                            : "navlink port-link"
                    }
                    containerId="app-id"
                    onMouseOver={mouseOverLink}
                    onMouseOut={mouseOutLink}
                    onClick={() => {
                        !closeNav && setCloseSubmenu(!closeSubmenu);
                    }}
                    activeClass="active"
                    spy={true}
                    to="portfolio"
                    smooth={true}
                    offset={0}
                    duration={750}
                >
                    <div>
                        <BsFileEarmarkCode />
                        <p>Portfolio</p>
                        <BiSolidChevronDown className="arrow-down-icon" />
                    </div>
                    <ul
                        className={
                            closeSubmenu
                                ? "port-sub-menu close-sub-menu"
                                : "port-sub-menu"
                        }
                    >
                        {closeNav && <li className="sub-topic">Portfolio</li>}
                        <li>
                            <Link
                                id="portfolio-link"
                                containerId="app-id"
                                activeClass="active"
                                spy={true}
                                to="workshops"
                                smooth={true}
                                offset={0}
                                duration={750}
                            >
                                <p>Workshops</p>
                            </Link>
                        </li>
                        <li>
                            <Link
                                id="portfolio-link"
                                containerId="app-id"
                                activeClass="active"
                                spy={true}
                                to="projects"
                                smooth={true}
                                offset={0}
                                duration={750}
                            >
                                <p>Projects</p>
                            </Link>
                        </li>
                    </ul>
                </Link>
                <Link
                    id="contact-link"
                    className="navlink"
                    onClick={() => setCloseSubmenu(true)}
                    containerId="app-id"
                    onMouseOver={mouseOverLink}
                    onMouseOut={mouseOutLink}
                    activeClass="active"
                    spy={true}
                    to="contact"
                    smooth={true}
                    offset={0}
                    duration={750}
                >
                    <BiMessage />
                    <p>Contact</p>
                    <div className="link-tooltip">
                        <p>Contact</p>
                    </div>
                </Link>
                <div
                    className={
                        darklightHover
                            ? "dark-light-mode button-hover"
                            : "dark-light-mode"
                    }
                >
                    <button
                        onClick={() => setLightTheme(!lightTheme)}
                        onMouseOver={() => setDarklightHover(true)}
                        onMouseOut={() => setDarklightHover(false)}
                    >
                        {lightTheme ? <BsMoon /> : <BsSun />}
                    </button>
                    <p>{lightTheme ? "Light mode" : "Dark mode"}</p>
                    <div className="link-tooltip">
                        {lightTheme ? "Switch to Dark" : "Switch to Light"}
                    </div>
                </div>
            </nav>
            <ToTopButton isHomeSection={isHomeSection} />
        </>
    );
};

export default Navbar;
