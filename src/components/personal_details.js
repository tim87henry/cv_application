import React from 'react';

class PersonalDetails extends React.Component {
    constructor(props) {
        super(props)
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(e) {
        this.props.onType(e.target.name,e.target.value)
    }

    render() {
        let personal_info=[];
        if(this.props.editMode===true) {
            personal_info=<p>
                Name
                <input type="input" name="name" value={this.props.name} onChange={this.handleInput}></input><br/><br/>
                Email
                <input type="input" name="email" value={this.props.email} onChange={this.handleInput}></input><br/><br/>
                Phone No
                <input type="input" name="phone" value={this.props.phone} onChange={this.handleInput}></input><br/><br/>
                City
                <input type="input" name="city" value={this.props.city} onChange={this.handleInput}></input><br/><br/>
                County
                <input type="input" name="country" value={this.props.country} onChange={this.handleInput}></input><br/><br/>
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