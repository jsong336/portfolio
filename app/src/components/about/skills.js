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
                    <p>Python, SQL, JavaScript, Java/C#, C++, R</p>
                </div>
                <h4>Framework/Library</h4>
                <div style={ SkillContentDivStyle }>
                    <p>TensorFlow, Numpy, Matplotlib, Scikit-learn, Express.js, React.js/Angular 8, Unity, JavaFX, MySQL, Mongoose</p>
                </div>
            </div>
        </div>
    );
}

export default Skills;