import React from 'react';
import '../css/personalStyles.css'

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
            personal_info=<div className="personalInfo">
                <div className="userName">
                    {this.props.name}
                </div>
                <div className="userInfo">
                    <span className="section1">
                        <ul className="userInfoList">
                            <li><b>Phone</b> {this.props.phone}</li>
                            <li><b>Email</b> {this.props.email}</li>
                        </ul>
                    </span>
                    <span className="section2">
                        <ul className="userInfoList">
                            <li><b>City</b> {this.props.city}</li>
                            <li><b>Country</b> {this.props.country}</li>
                        </ul>
                    </span>
                </div>
            </div>
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