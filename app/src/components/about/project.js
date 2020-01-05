import React, {Component} from 'react';
import marked from "marked";
import {Button, Container} from 'react-bootstrap'

const ButtonStyle = {
    margin:"1rem"
}

const ProjectStyle = {
    border:"solid white",
    borderRadius:"1rem",
}

class Project extends Component{
    state = {
        isHover:false,
        //markdown: undefined
    }

    constructor(title){
        super();
    }

    toggleIsHover = () =>{
        this.setState({
            isHover: !this.state.isHover 
        });
    }

    render(){
        let projectDetail = "";
        if(this.state.isHover){
            projectDetail = (
                <div>
                    <Button variant="outline-light" style={ButtonStyle}>View Detail</Button>
                    <Button variant="outline-light">Go to Github</Button>
                </div>
            );
        }
        else{
            projectDetail = (
                <div>
                    <Container>
                        {this.props.summary}
                    </Container>
                </div>
            )
        }
        return (
            <Container onMouseEnter={this.toggleIsHover} onMouseLeave={this.toggleIsHover} style={ProjectStyle}>
                <h3>{this.props.title}</h3>
                {projectDetail}
            </Container>
            
        );
    }
    /*
    componentDidMount() {
        const readmePath = require("../../markdown/test.md");
        fetch(readmePath)
          .then(response => {
            return response.text()
          })
          .then(text => {
            this.setState({
              markdown: marked(text)
            })
          })
    }

    render() {
        const { markdown } = this.state;
      
        return (
          <section>
            <article dangerouslySetInnerHTML={{__html: markdown}}></article>
          </section>
        )
      }
      */
}

export default Project;