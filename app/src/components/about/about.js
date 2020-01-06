import React, { Component } from 'react';
import AboutMe from './about-me';
import Projects from './projects';

const AboutStyle = {
    padding:"0 8rem 1rem 8rem",
    fontSize:"1.5rem",
    textAlign:"center",
    border:"solid white",
    borderWidth:"0.3rem 0.3rem"
}

class About extends Component{
    render(){
        return (
            <div style={AboutStyle} id="about">
                <AboutMe/>
                <Projects/>
            </div>
        );
      }
}
export default About;