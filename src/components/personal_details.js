import React from 'react';

class PersonalDetails extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
        <p>
            <h3>Personal Details</h3>
            Name
            <input type="input"></input><br/><br/>
            Email
            <input type="input"></input><br/><br/>
            City
            <input type="input"></input><br/><br/>
            County
            <input type="input"></input><br/><br/>
        </p>
        );
    }
} 

export default PersonalDetails;