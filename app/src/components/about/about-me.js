import React from 'react';
import { Image, Row, Col, Container } from 'react-bootstrap';

const AboutMeDivStyle = {
    margin:"1%",
    border:"solid red",
    minWidth:"30%",
    maxWidth:"60%",
}

const AboutMeContentStyle = {
    margin:"0 5%",
    border:"solid red"    
}
const AboutMe = () =>{
    return (
        <div style={ AboutMeDivStyle } className="content">               
            <h2>About me</h2><hr/>
            <div style={ AboutMeContentStyle }>
                <Row>
                    <Col xs={ 3 } style={{padding:"1rem"}}>
                        <Image src={ process.env.PUBLIC_URL + "/assets/me.jpg" } roundedCircle width="100%"></Image>                  
                    </Col>
                    <Col xs={ 9 } style={{textAlign:"left"}}>
                        <p>Hello, my name is Jeongwon</p>
                        <p>A diligent, ambitious, and fast learning student in Software Engineering Science at Western University, who is willing to build experiences in
                            software designing, web-development, and machine learning.</p>
                        </Col>
                </Row>
            </div>
        </div>
    );
}

export default AboutMe;