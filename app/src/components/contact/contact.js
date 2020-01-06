import React, { Component } from 'react';
import Email from './email';

const ContactStyle = {
    background: `url(${process.env.PUBLIC_URL + "/assets/background2.jpg"})`,
    backgroundSize:"cover",  
    backgroundRepeat:"repeat",
    height:"60vh",
    textAlign:"center",
    //border:"solid red",
    overflow:"scroll"
}

const ContactDivStyle = {
    //border:"solid red",    
    margin:"2vh"
}

const ContactContentStyle = {
    //border:"solid red",
    margin:"5% 10%"  
}

const FooterStyle = {
    //textAlign:"left",
    padding:"1rem",
    fontSize:"1rem"
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
        let header = (
                        <div>
                            <h2>Contact</h2>
                            <hr/>
                        </div>
                    );

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
            <div style={ ContactStyle } id="contact">
                <div style={ ContactDivStyle }>
                    <div className="content" style={ ContactContentStyle }>
                        <div onMouseEnter={ this.setHoverTrue } onMouseLeave={ this.setHoverFalse }>
                            { header }
                        </div>
                        <Email/>
                    </div>      
                </div>
                <footer style={FooterStyle}>
                    <p>Email: jsong336@uwo.ca<br/>
                    Phone: 1 (647)550-3647</p>
                </footer>
            </div>
        );
    }
}

export default Contact;