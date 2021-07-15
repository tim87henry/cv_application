import React from 'react';

class EducationalQual extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
        <p>
            <h3>Educational Qualifications</h3>
            Degree
            <input type="input"></input><br/><br/>
            University/School
            <input type="input"></input><br/><br/>
            Year Started
            <input type="input"></input><br/><br/>
            Year Completed
            <input type="input"></input><br/><br/>
        </p>
        );
    }
} 

export default EducationalQual;