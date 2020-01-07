import React from 'react'
import { Image, Button, Row, Col } from 'react-bootstrap';

const IntroductionDivStyle = {
    margin:"2vh",
    //border:"solid red",
}

const IntroductionContentStyle = {
    textAlign:"center",
    margin:"13% 25%",
    paddingBottom:"1rem",
    border:"solid red",
    overflow:"scroll",
}

const TextDivStyle = {
    margin:"1rem",
    //border:"solid red"
}

const ImageButtonStyle = {
    margin: "0.3rem",
    marginBottom: "0.5rem",
    //border:"solid red"
}

const IntroductionBox = () =>{
    return (
        <div style={ IntroductionDivStyle }>
            <div style={ IntroductionContentStyle } className="content">
                <h1> Welcome, I'm Jeongwon </h1>   
                <div style={ TextDivStyle }> 
                    Third year in Software Engineering at Western University
                </div>
                <div>
                    <a href='https://www.linkedin.com/in/jeongwonsong/' target="_blank">
                        <Image style={ ImageButtonStyle } src={process.env.PUBLIC_URL+"/assets/linkin.png"} roundedCircle width="40px"/>
                    </a>
                    <a href='https://github.com/jsong336' target="_blank">
                        <Image style={ ImageButtonStyle } src={ process.env.PUBLIC_URL+"/assets/github.png" } roundedCircle width="43px"/>                        </a>
                    <a href='https://devpost.com/jsong336?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav' target="_blank">
                        <Image style={ ImageButtonStyle } src={ process.env.PUBLIC_URL+"/assets/devpost.png" } roundedCircle width="40px" width="45px"/>
                    </a>
                </div>
                <Button variant="outline-light" href="#about"> View More </Button>
            </div>
        </div>
    );
}

export default IntroductionBox