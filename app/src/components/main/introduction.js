import React from 'react'
import { Container, Image, Button } from 'react-bootstrap';

const IntroductionStyle = {
    textAlign:"center",
    margin:"25vh 20%",
    paddingBottom:"1.5rem",
}

const ButtonStyle = {
    margin: "0.3rem",
    marginBottom: "0.5rem"
}

const IntroductionBox = () =>{
    return (
        <div>
                    <div style={IntroductionStyle} className="content">
        <Container>
            <h1>Welcome, I'm Jeongwon</h1>   
            <p>
            Third year in Software Engineering at Western University<br/>
            <br/>
            </p>
            <a href='https://www.linkedin.com/in/jeongwonsong/' target="_blank"><Image style={ButtonStyle} src={process.env.PUBLIC_URL+"/assets/linkin.png"} roundedCircle width="40px"/></a>
            <a href='https://github.com/jsong336' target="_blank"><Image style={ButtonStyle} src={process.env.PUBLIC_URL+"/assets/github.png"} roundedCircle width="43px"/></a>
            <a href='#contact'><Image style={ButtonStyle} src={process.env.PUBLIC_URL+"/assets/contact.png"} rounded width="40px" height="40px"/></a>
            <br/>
            <Button variant="outline-light" href="#about">View More</Button>
        </Container>
        </div>
        </div>
    );
}

export default IntroductionBox