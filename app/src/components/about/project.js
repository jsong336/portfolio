import React, {Component} from 'react';
import { Container } from 'react-bootstrap'
import ProjectDetail from './project-detail';
import styled from 'styled-components';

const ProjectDivStyle = styled.div`
    border: solid white;
    border-radius: 1rem;
    margin:1rem 0;
    height: 15em;
    padding: 1rem 0.5rem;
    overflow: auto;
    &:hover{
        border-color: black;
        background-color:"white";
        color:black;
    }
`;

const ProjectContentStyle = {
    //border:"solid red"
}

class Project extends Component{
    state = {
        displayDetail:false,
    }

    constructor(title){
        super();
    }

    toggleDisplayDetail = () =>{
        this.setState({
            displayDetail: !this.state.displayDetail
        });
    };

    render(){
        let projectDetail = "";
    
        if(this.state.displayDetail){
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
            <ProjectDivStyle onClick={ this.toggleDisplayDetail } onMouseLeave={ ()=>this.setState({displayDetail:false})}>
                <div style={ ProjectContentStyle }>
                    { projectDetail }
                </div> 
            </ProjectDivStyle>
           
        );
    }
}

export default Project;