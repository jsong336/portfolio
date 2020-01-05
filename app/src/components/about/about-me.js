import React from 'react';
import { Image, Row, Col, Container } from 'react-bootstrap';

const AboutMeStyle = {
    height:"35vh",
    //backgroundColor: "rgb(250, 240, 227)"
}

const AboutMe = () =>{
    return (
        <div style={AboutMeStyle} className="content">               
            <Container>
            <h2>About me</h2><hr/>
            <Row style={{padding:"2rem"}}>
                <Col xs={ 3 }>
                    <Image src={process.env.PUBLIC_URL + "/assets/me.jpg"} roundedCircle className="w-50"></Image>                  
                </Col>
                <Col></Col>
                <Col xs={8} style={{textAlign:"left"}}>
                    <p>Hello, my name is Jeongwon</p>
                </Col>
            </Row>
            </Container>

        </div>
    );
}

export default AboutMe;