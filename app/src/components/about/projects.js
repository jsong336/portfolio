import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import Project from './project';

const ProjectsStyle = {
    margin:"0.5rem",
    //border:"solid red"
}

const ProjectsDivStyle = {
    margin:"0 5%",
    //border:"solid red" 
}

const Projects = () =>{
    return (
        <div style={ProjectsStyle} className="content">       
            <h3>Projects</h3><hr/>
            <div style={ProjectsDivStyle}>  
                <Row>
                    <Col>
                        <Project title="1D GAN" git="https://github.com/jsong336/1D-GAN" md="https://raw.githubusercontent.com/jsong336/README/master/1D-GAN.md">
                            Implementation of single dimensional Generative Adverserial Network which generates a point on a fixed graph using Tensorflows and Keras as Summer Undergraduate Research Project
                        </Project>
                    </Col>
                    <Col>
                        <Project title="A-Eye" git="https://github.com/hPark0811/AEye" md="https://raw.githubusercontent.com/jsong336/README/master/A-Eye.md">
                            Mobile application to assists people with visual impairment with voice user interface by using Android Studio, IBM-Watson API, Avaya API, AWS, MongoDB, Node.js Express.js
                        </Project>
                    </Col>
                    <Col>
                        <Project title="ForMe" git="https://github.com/hPark0811/ForMe" md="https://raw.githubusercontent.com/jsong336/README/master/ForMe.md">
                            TD mobile application to receive financial advice based on their spending habits. Winner of TD-Green Hack. Developed using Android-Studio, Sckit-Learn, AWS, TD-Davinci API. 
                        </Project>
                    </Col>
                    <Col>
                        <Project title="Image Classification" git="https://github.com/jsong336/Intel-Image-Classification" md="https://raw.githubusercontent.com/jsong336/README/master/Intel-Image-Classification.md">
                            Implementation of CNN Classifiers for images of 6 categories: building, forest, glacier, mountain, sea, street from Kaggle. 80 > validation accuracy. 
                        </Project>
                    </Col>
                </Row>
            </div>
            <Button variant="outline-light" href="https://github.com/jsong336?tab=repositories" target = "_blank">View More</Button>
        </div>
    );
}

export default Projects;