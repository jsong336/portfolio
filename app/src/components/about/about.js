import React, { Component } from 'react';
import AboutMe from './about-me';
import Projects from './projects';
import Education from './education';
import Skills from './skills';


const AboutStyle = {
    fontSize:"100%",
    textAlign:"center",
    border:"solid white 0.3rem",
    //border:"solid red",
}

const AboutDivStyle = {
    margin:"2vh",
    //border:"solid blue",
}

class About extends Component{
    render(){
        return (
            <div style={AboutStyle} id="about">
                <div style={ AboutDivStyle }>
                    <div style={{display:"flex", flexWrap:"wrap", padding:"0", justifyContent: "center"}}>
                        <AboutMe/>
                        <Education/>                        
                        <Skills/>
                    </div>
                    <Projects/>
                </div>
            </div>
        );
      }
}
export default About;