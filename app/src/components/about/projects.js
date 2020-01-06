import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Project from './project';

const ProjectsStyle = {
    //height:"60%",
    //backgroundColor:"lightskyblue",
    //padding:"1rem"
}

const Projects = () =>{
    return (
        <div style={ProjectsStyle} className="content">       
        <Container>
            <h3>Projects</h3><hr/>
            <Row>
                <Col>
                <Project title="1D GAN" git="https://github.com/jsong336/1D-GAN">This is summary of the project blah blah blabh blahb e project blah blah blabh blah e project </Project>
                </Col>
                <Col>
                    <Project title="A-Eye" git="https://github.com/hPark0811/AEye">This is summary of the project blah blah blabh blahb</Project>
                </Col>
                <Col>
                    <Project title="ForMe" git="https://github.com/hPark0811/">"This is summary of the project blah blah blabh blahb"</Project>
                </Col>
                <Col>
                    <Project title="ImageScene" git="https://github.com/jsong336/ImageScene">This is summary of the project blah blah blabh blahb</Project>
                </Col>
            </Row>
        </Container>
        <Button variant="outline-light">View More</Button>
        </div>
    );
}

export default Projects;