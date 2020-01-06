import React from 'react';
import { Row, Col } from 'react-bootstrap';

const EducationDivStyle = {
    margin:"1%",
    //border:"solid green",
    minWidth:"20%",
}

const EducationContentStyle = {
    margin:"0 5%",
    //border:"solid green",
}

const Education = () =>{
    return (
        <div style={ EducationDivStyle } className="content">               
            <h2>Education</h2><hr/>
            <div style={ EducationContentStyle }>
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

export default Education;