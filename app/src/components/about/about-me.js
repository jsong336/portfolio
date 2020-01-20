import React from 'react';
import { Image, Row, Col, Container } from 'react-bootstrap';

const AboutMeDivStyle = {
    margin:"1%",
    //border:"solid red",
    minWidth:"30%",
}

const AboutMeContentStyle = {
    margin:"0 5%",
    //border:"solid red"    
}
const AboutMe = () =>{
    return (
        <div style={ AboutMeDivStyle } className="content">               
            <h2>About me</h2><hr/>
            <div style={ AboutMeContentStyle }>
                <div style={{display:"flex", flexWrap:"wrap", padding:"0", justifyContent: "center" }}>
                    <div style={{margin: "0 2%"}}>
                        <Image src={ process.env.PUBLIC_URL + "/assets/me.jpg" } roundedCircle width="150px" style={{border:"dotted white 2px"}}></Image>                  
                    </div>
                    <div style={ {textAlign:"left", margin: "0 2%", maxWidth:"80%"} }>
                        <p>Hello, my name is Jeongwon</p>
                        <p>
                            I'm a third year software engineering student at Western University with a passion for machine learning and web technologies.
                            Over the past year, I worked with several projects involving different machine learning algorithms like neural network, k-mean, 
                            as well as with web technologies like React.js, Express.js and Angular. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;