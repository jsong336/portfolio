import React, { Component } from 'react'
import {Button, Modal, Container} from 'react-bootstrap'
import marked from "marked";

const ButtonBoxStyle = {
    padding: "1rem"
}

const ButtonStyle = {
    margin:"0.5rem"
}

const ModalStyle = {
    backgroundColor:"gainsboro",
    color:"black"
}

const BodyStyle = {
    backgroundColor:"white",
    borderRadius:"1rem",
    padding:"1rem"
}

class ProjectDetail extends Component{
    state = {
        showDetail:false,
        markdown: undefined,
    }

    componentDidMount() {
        const mdPath = this.props.md;
        fetch(mdPath)
          .then(response => {
            return response.text();
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
                <Modal show={this.state.showDetail} onHide={this.closeDetailHandler}
                    size="xl">
                    <Container style={ ModalStyle }>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Container style={BodyStyle}>
                                <section style={{color:"black"}}>
                                    <article dangerouslySetInnerHTML={{__html: markdown}}></article>
                                </section>
                            </Container>
                        </Modal.Body>
                    </Container>
                </Modal>
            </div>
            //                        <Modal.Footer></Modal.Footer>
        );
    }
}

  
export default ProjectDetail;