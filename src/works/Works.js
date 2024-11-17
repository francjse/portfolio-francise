import React from 'react';
import "../styles/works.css";
import { ReactComponent as InfoSVG } from '../assets/info_icon.svg';
import sampleVideo from '../assets/skull.mp4';

const Works = () => {
  return (
    <div id="content">
      <section id="svg-container">
        <video
          className="video-overlay"
          src={sampleVideo}
          autoPlay
          loop
          muted
        />
        <InfoSVG className="about-svg" />
      </section>

    
    </div>
  );
};

export default Works;