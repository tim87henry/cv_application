import React from 'react';

class WorkExperience extends React.Component {

    render() {
        return(
            <div>
                <h3>Work Experience</h3>
                <p>
                    Designation
                    <input type="input"></input><br/><br/>
                    Company
                    <input type="input"></input><br/><br/>
                    From
                    <input type="input"></input><br/><br/>
                    To
                    <input type="input"></input><br/><br/>
                </p>
            </div>
        );
    }
} 

export default WorkExperience;