import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

const FormStyle = {
    padding:"1% 10%",
    //border:"solid red"
}

const InputStyle = {
    //border:"solid red"    
}

const Email = () =>{
    return (
        <div style={ FormStyle }>
            <Form style={ InputStyle } action="http://formspree.io/jsong336@uwo.ca" method="POST" target="_blank">
                <FormControl
                    placeholder="Your name or contact" 
                    aria-label="Name or Contact"
                    type="email"
                    name="_replyto"
                    />
                <br/>
                <FormControl 
                    as="textarea" 
                    placeholder="Message" 
                    aria-label="Message"
                    name="body"
                    />
                <br/>
                <Button variant={"outline-light"} type="submit">Send Email</Button>
            </Form>
        </div>
        );
}   
export default Email;