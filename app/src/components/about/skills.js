import React from 'react';

const SkillsDivStyle = {
    margin:"1%",
    //border:"solid red",
    minWidth:"40%",
}

const SkillsContentStyle = {
    margin:"0 1%",
    //border:"solid green",
    textAlign:"left"
}

const SkillContentDivStyle = {
    padding: "0 0.5rem"
}

const Skills = () =>{
    return (
        <div style={ SkillsDivStyle } className="content">             
            <h2>Skills</h2><hr/>
            <div style={ SkillsContentStyle }>
                <h4>Language</h4>
                <div style={ SkillContentDivStyle }>
                    <p>Python, JavaScript, SQL, C/C++, Java, R</p>
                </div>
                <h4>Framework/Library/Platform</h4>
                <div style={ SkillContentDivStyle }>
                    <p>Angular 8, React.js, Express.js, AWS, TensorFlow, Keras, Scikit-learn, Matplotlib, Unity, JavaFX, MongoDB, MySQL</p>
                </div>
            </div>
        </div>
    );
}

export default Skills;