import { Link } from 'react-scroll';
import { BsArrowUpShort } from 'react-icons/bs'

// CSS
import "../../Styles/navigation.css";

const ToTopButton = ({ isHomeSection } : { isHomeSection: boolean }) => {

    return (
        <Link 
            className={isHomeSection ? "to-top-link" : "to-top-link to-top-visible"} 
            containerId="app-id"
            to="home" 
            smooth={true} 
            offset={0} 
            duration={750}
        >
            <BsArrowUpShort/>
        </Link>
    );
};

export default ToTopButton;