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
                    <Project title="1D GAN" git="https://github.com/jsong336/1D-GAN" md="https://raw.githubusercontent.com/jsong336/1D-GAN/master/README.md">
                        Implementation of single dimensional Generative Adverserial Network which generates a point on a fixed graph using Tensorflows and Keras as Summer Undergraduate Research Project
                    </Project>
                </Col>
                <Col>
                    <Project title="A-Eye" git="https://github.com/hPark0811/AEye" md="https://raw.githubusercontent.com/hPark0811/AEye/master/README.md">
                        Mobile application to assists people with visual impairment with voice user interface by using Android Studio, IBM-Watson API, Avaya API, AWS, MongoDB, Node.js Express.js
                    </Project>
                </Col>
                <Col>
                    <Project title="ForMe" git="https://github.com/hPark0811/ForMe" md="https://raw.githubusercontent.com/hPark0811/ForMe/master/README.md">
                        TD mobile application to receive financial advice based on their spending habits. Winner of TD-Green Hack. Developed using Android-Studio, Sckit-Learn, AWS, TD-Davinci API. 
                    </Project>
                </Col>
                <Col>
                    <Project title="Image Classification" git="https://github.com/jsong336/Intel-Image-Classification" md="https://raw.githubusercontent.com/jsong336/Intel-Image-Classification/master/README.md">
                        Implementation of CNN Classifiers for images of 6 categories: building, forest, glacier, mountain, sea, street from Kaggle. 80 > validation accuracy. 
                    </Project>
                </Col>
            </Row>
        </Container>
        <Button variant="outline-light">View More</Button>
        </div>
    );
}

export default Projects;