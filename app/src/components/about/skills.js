import React from 'react';
import { Image, Row, Col, Container } from 'react-bootstrap';

const SkillsDivStyle = {
    margin:"1%",
    border:"solid red"
}

const SkillsContentStyle = {
    margin:"0 5%",
    border:"solid green",
}

const Skills = () =>{
    return (
        <div style={ SkillsDivStyle } className="content">               
            <h2>Education</h2><hr/>
            <div style={ SkillsContentStyle }>
                <Row>
                    <Col style={{textAlign:"left"}}><h4>Western University</h4></Col>
                    <Col style={{textAlign:"right"}}>2017~2021</Col>
                </Row>
                <Row>
                    <Col style={{textAlign:"left"}}>
                        Bachelor of Engineering Science, Software Engineering (BESc)
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Skills;