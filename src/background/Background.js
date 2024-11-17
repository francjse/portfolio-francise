import React from "react";
import "../styles/background.css";
import bgImg from "../assets/bg.png";

const Background = () => {
    return (
        <>
            <div
                id="black-screen"
                style={{
                    backgroundImage: `url(${bgImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            ></div>

            <div className="shadow-overlay"></div>
        </>
    );
};

export default Background;