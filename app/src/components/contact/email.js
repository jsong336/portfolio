import React from 'react';
import { Form, FormControl, Button, FormLabel } from 'react-bootstrap';

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
            <Form style={ InputStyle } action="http://formspree.io/jsong336@uwo.ca" method="POST">
                <FormLabel>Email</FormLabel>
                <FormControl
                    placeholder="your email" 
                    aria-label="email"
                    type="text"
                    name="_replyto"
                    /><br/>
                <FormLabel>Message</FormLabel>
                <FormControl 
                    as="textarea" 
                    placeholder="enter message ( formspree.io pop-up page )" 
                    aria-label="Message"
                    name="body"
                    />
                <br/>
                <Button variant={"outline-light"} type="submit">Send Email</Button>
                <meta name="referrer" content="O; url=https://jsong336.github.io/portfolio"/>
            </Form>
        </div>
        );
}   
export default Email;