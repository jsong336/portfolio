import React, {Component} from 'react';
import { Container } from 'react-bootstrap'
import ProjectDetail from './project-detail';

const ProjectStyle = {
    border:"solid white",
    borderRadius:"1rem",
    margin:"1rem 0",
    height: "20rem",
    padding: "1rem 0.5rem"
}

class Project extends Component{
    state = {
        isHover:false,
        //markdown: undefined
    }

    constructor(title){
        super();
    }

    IsHover = () =>{
        this.setState({
            isHover: true
        });
    }

    NoIsHover = () =>{
        this.setState(
            {
                isHover: false
            }
        )
    }

    render(){
        let projectDetail = "";
        
        const hoverStyle = {
            ...ProjectStyle,
            padding:"35% 0"
            //background:"rgb(255, 255, 255, 0.4)",
        }

        if(this.state.isHover){
            projectDetail = (
                <ProjectDetail title={this.props.title} git={this.props.git} md={this.props.md}/>
            );
        }

        else{
            projectDetail = (
                <div>
                    <h3>{this.props.title}</h3>
                    <Container>
                        {this.props.children}
                    </Container>
                </div>
            )
        }
        return (
            <Container onMouseOver={this.IsHover} onMouseLeave={this.NoIsHover} style={this.state.isHover?hoverStyle:ProjectStyle}>
                { projectDetail }
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