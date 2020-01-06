import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';
import AboutMe from './about-me';
import Projects from './projects';
import Education from './education';


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
                <div style={ AboutDivStyle }>
                    <Row>
                        <Col xs={8}><AboutMe/></Col>
                        <Col>
                            <Education/>
                        </Col>
                    </Row>
                    <Row>
                        <Col><Projects/></Col>
                    </Row>
                </div>
            </div>
        );
      }
}
export default About;