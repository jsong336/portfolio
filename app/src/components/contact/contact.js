import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Email from './email';

const ContactStyle = {
    height:"60vh",
    textAlign:"center",
    padding: "2rem",
}

class Contact extends Component{
    state = {
        isHover: false
    }

    constructor(){
        super();
    }

    setHoverTrue = () =>{
        this.state = this.setState(
            {
                isHover:true
            }
        )
    }

    setHoverFalse = () => {
        this.state = this.setState(
            {
                isHover:false
            }
        )
    }

    render(){
        let header = (<h2>Contact</h2>)
        if(this.state.isHover){
            header = (  
                    <div>
                        <b>
                        1 (647) 550-3647<br/>
                        jsong336@uwo.ca
                        </b>
                        <hr/>
                    </div>
                    );
        }
        return (
            <Container style={ContactStyle} id="contact">
                <Container className="content">
                    <div onMouseEnter={this.setHoverTrue} onMouseLeave={this.setHoverFalse}>{header}</div>
                    <Email/>
                </Container>  
            </Container>
        );
    }
}

export default Contact;