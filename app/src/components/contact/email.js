import React from 'react';
import { InputGroup, FormGroup, Form, FormControl, Container, Button } from 'react-bootstrap';

const FormStyle = {
    padding:"0 5rem"
}

const InputStyle = {
    margin:"1rem 0",
}

const sendEmail = (subject, body) =>{
    //<form action="http://formspree.io/you@email.com"><input type="email" name="_replyto"><textarea   name="body"></textarea><input type="submit" value="Send"></form>

    
}

const Email = () =>{
    let sender = "";
    let body = "";
    return (
        <Container style={FormStyle}>
            <Form style={InputStyle} action="http://formspree.io/jsong336@uwo.ca" method="POST" target="_blank">
                <FormControl
                    ref={ref => { sender = ref; }} 
                    placeholder="Your name or contact" 
                    aria-label="Name or Contact"
                    type="email"
                    name="_replyto"
                    />
                <br/>
                <FormControl 
                    ref={ref => { body = ref; }} 
                    as="textarea" 
                    placeholder="Message" 
                    aria-label="Message"
                    name="body"
                    />
                <br/>
                <Button variant={"outline-light"} type="submit">Send Email</Button>
            </Form>
            
        </Container>
        );
}   
export default Email;