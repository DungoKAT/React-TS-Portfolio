import { MyStateContext } from "./Services/Context";

// Components
import Navbar from "./Components/Navigations/Navbar";
import Home from "./Components/Contents/home-section/Home";
import Portfolio from "./Components/Contents/port-section/Portfolio";
import About from "./Components/Contents/about-section/About";
import Contact from "./Components/Contents/contact-section/Contact";
import Footer from "./Components/Footer";

import "./App.css";

function App() {
    const { lightTheme } = MyStateContext();
    console.log("Light Theme: ", lightTheme);

    return (
        <div className={lightTheme ? "App light-theme" : "App"} id="app-id">
            <Navbar />
            <Home />
            <div className="container">
                <About />
                <Portfolio />
                <Contact />
            </div>
            <Footer />
        </div>
    );
}

export default App;
