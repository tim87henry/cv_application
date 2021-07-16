import React from 'react';

class PersonalDetails extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let personal_info=[];
        if(this.props.editMode===true) {
            personal_info=<p>
                Name
                <input type="input" value={this.props.name}></input><br/><br/>
                Email
                <input type="input" value={this.props.email}></input><br/><br/>
                City
                <input type="input" value={this.props.city}></input><br/><br/>
                County
                <input type="input" value={this.props.country}></input><br/><br/>
            </p>
        } else {
            personal_info=<p>
                Name {this.props.name}<br/>
                Email {this.props.email}<br/>
                City {this.props.city}<br/>
                Country {this.props.country}
            </p>
        }
        return(
            <div>
                <h3>Personal Details</h3>
                {personal_info}
            </div>
        );
    }
} 

export default PersonalDetails;