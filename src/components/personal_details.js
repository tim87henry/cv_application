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
            personal_info=<div class="personalDataForm">
                <span>
                    <label>Name</label>
                    <input type="input" name="name" value={this.props.name} onChange={this.handleInput}></input>
                </span>
                <span>
                    <label>Email</label>
                    <input type="input" name="email" value={this.props.email} onChange={this.handleInput}></input>
                </span>
                <span>
                    <label>Phone No</label>
                    <input type="input" name="phone" value={this.props.phone} onChange={this.handleInput}></input>
                </span>
                <span>
                    <label>City</label>
                    <input type="input" name="city" value={this.props.city} onChange={this.handleInput}></input>
                </span>
                <span>
                    <label>County</label>
                    <input type="input" name="country" value={this.props.country} onChange={this.handleInput}></input>
                </span>
            </div>
        } else {
            personal_info=<div className="personalInfo">
                <div className="userName">
                    {this.props.name}
                </div>
                <div className="userInfo">
                    <table className="userInfoTable">
                        <tr>
                            <th>Phone</th>
                            <td>{this.props.phone}</td>
                            <th>City</th>
                            <td>{this.props.city}</td>
                        </tr>
                        <tr>
                            <th>Email</th>
                            <td>{this.props.email}</td>
                            <th>Country</th>
                            <td>{this.props.country}</td>
                        </tr>
                    </table>      
                </div>
                <p>
                    I am a highly competent IT professional with a proven track record in designing websites, networking and managing databases. I am eager to be challenged in order to grow and further improve my IT skills. My greatest passion is in life is using my technical know-how to benefit other people and organisations.    
                </p>  
            </div>
        }
        return(
            <div>
                {
                    this.props.editMode ? (
                        <h3 className="sectionTitle">Personal Details</h3>
                    ): null
                }
                {personal_info}
            </div>
        );
    }
} 

export default PersonalDetails;