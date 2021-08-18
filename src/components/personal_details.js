import React from 'react';
import '../css/personalStyles.css'

const PersonalDetails = (props) =>  {

    const handleInput = (e) => {
        props.onType(e.target.name,e.target.value)
    }
    let personal_info=[];
    if(props.editMode===true) {
        personal_info=<div class="personalDataForm">
            <span>
                <label>Name</label>
                <input type="input" name="name" value={props.name} onChange={handleInput}></input>
            </span>
            <span>
                <label>Email</label>
                <input type="input" name="email" value={props.email} onChange={handleInput}></input>
            </span>
            <span>
                <label>Phone No</label>
                <input type="input" name="phone" value={props.phone} onChange={handleInput}></input>
            </span>
            <span>
                <label>City</label>
                <input type="input" name="city" value={props.city} onChange={handleInput}></input>
            </span>
            <span>
                <label>County</label>
                <input type="input" name="country" value={props.country} onChange={handleInput}></input>
            </span>
        </div>
    } else {
        personal_info=<div className="personalInfo">
            <div className="userName">
                {props.name}
            </div>
            <div className="userInfo">
                <table className="userInfoTable">
                    <tr>
                        <th>Phone</th>
                        <td>{props.phone}</td>
                        <th>City</th>
                        <td>{props.city}</td>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td>{props.email}</td>
                        <th>Country</th>
                        <td>{props.country}</td>
                    </tr>
                </table>      
            </div>
            <p>
                I am a highly competent IT professional with a proven track record in designing websites, networking and managing databases. I am eager to be challenged in order to grow and further improve my IT skills. My greatest passion is in life is using my technical know-how to benefit other people and organisations.    
            </p>  
        </div>
    }
    return(
        <div className="section">
            {
                props.editMode ? (
                    <div className="sectionTitle">Personal Details</div>
                ): null
            }
            {personal_info}
        </div>
    );
} 

export default PersonalDetails;