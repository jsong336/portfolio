import React, { Component } from 'react'
import {Button, Modal} from 'react-bootstrap'
import marked from "marked";

const ButtonBoxStyle = {
    padding: "1rem"
}

const ButtonStyle = {
    margin:"0.5rem"
}

class ProjectDetail extends Component{
    state = {
        showDetail:false,
        markdown: undefined,
    }

    componentDidMount() {

        const mdPath = require("../../markdown/test.md");
        fetch(mdPath)
          .then(response => {
            return response.text()
          })
          .then(text => {
            this.setState({
              markdown: marked(text)
            })
          })
    }

    viewDetailHandler = () =>{
        this.setState(
            {
                showDetail:true
            }
        )
    }

    closeDetailHandler = () =>{
        this.setState(
            {
                showDetail:false
            }
        )
    }

    render(){
        const { markdown } = this.state;
        return (
            <div>
                <div style = {ButtonBoxStyle}>
                    <Button variant="outline-light" style={ButtonStyle} onClick={this.viewDetailHandler}>View Detail</Button>
                    <Button variant="outline-light" style={ButtonStyle} href={this.props.git} target="_blank">Go to Github</Button>
                </div>
                <Modal show={this.state.showDetail} onHide={this.closeDetailHandler}>
                    <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h1>etst</h1>
                        <section style={{color:"black"}}>
                            <article dangerouslySetInnerHTML={{__html: markdown}}></article>
                        </section>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={this.closeDetailHandler}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={this.closeDetailHandler}>
                        Save Changes
                    </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

  
export default ProjectDetail;