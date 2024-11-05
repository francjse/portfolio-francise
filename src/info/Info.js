import React, { Component } from 'react';
import "../styles/info.css";
import { ReactComponent as InfoSVG } from '../assets/info_icon3.svg'; // Import the SVG as a React component
import sampleVideo from '../assets/skull.mp4';

export default class Info extends Component {
  render() {
    return (
      <div id="content">
        <InfoSVG className="about-svg" />
        <video 
          className="video-overlay"
          src={sampleVideo} 
          autoPlay 
          loop 
          muted 
        />
      </div>
    );
  }
}