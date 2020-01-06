import React, { Component } from 'react';
import AboutMe from './about-me';
import Projects from './projects';

const AboutStyle = {
    fontSize:"1.2rem",
    textAlign:"center",
    border:"solid white 0.3rem",
    border:"solid red",
}

const AboutDivStyle = {
    margin:"2vh",
    border:"solid blue",
}

class About extends Component{
    render(){
        return (
            <div style={AboutStyle} id="about">
                <div style={AboutDivStyle}>
                    <AboutMe/>
                    <Projects/>
                </div>
            </div>
        );
      }
}
export default About;