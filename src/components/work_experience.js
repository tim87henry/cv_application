import React from 'react';

class WorkExperience extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
        <p>
            <h3>Work Experience</h3>
            Designation
            <input type="input"></input><br/><br/>
            Company
            <input type="input"></input><br/><br/>
            From
            <input type="input"></input><br/><br/>
            To
            <input type="input"></input><br/><br/>
        </p>
        );
    }
} 

export default WorkExperience;