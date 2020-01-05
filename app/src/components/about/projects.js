import React from 'react';
import { Container } from 'react-bootstrap';
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
            <Project title="1D GAN" summary="This is summary of the project blah blah blabh blahb"/>
        </Container>
        </div>
    );
}

export default Projects;