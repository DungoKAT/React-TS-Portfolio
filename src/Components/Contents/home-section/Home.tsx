import { Parallax } from "react-parallax";
import Enna from "../../../assets/Enna.jpg";
import { useEffect, useState } from "react";

const Home = () => {
    const [appElement, setAppElement] = useState<HTMLElement>();

    useEffect(() => {
        const elementById =
            (document.getElementById("app-id") as HTMLElement) || null;
        setAppElement(elementById);
    }, [appElement]);

    return (
        <Parallax
            parent={appElement}
            bgImage={Enna}
            bgImageAlt="Enna"
            blur={{ min: -2, max: 5 }}
            strength={500}
            renderLayer={(percentage) => (
                <div
                    style={{
                        position: "absolute",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                        height: "100%",
                    }}
                >
                    <h1
                        style={{
                            padding: "100px",
                            backgroundColor: "rgba(0, 0, 0, 0.8)",
                            fontSize: "5rem",
                            transform: `translateY(calc(${
                                percentage - 1
                            }*100%))`,
                        }}
                    >
                        HOME SECTION
                    </h1>
                </div>
            )}
        >
            <section className="home-section" id="home"></section>
        </Parallax>
    );
};

export default Home;
