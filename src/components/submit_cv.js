import React from 'react';
import '../css/formStyles.css'
import '../css/personalStyles.css'

const SubmitCV = (props) => {

    const handleSubmit = (e) => {
        props.onSubmit(e);
    }

    let button_text='';
    button_text = (props.editMode)? "Submit CV": "Back";
    return(
        <div className="submitSection">
            <input 
            type="button" 
            value={button_text}
            onClick={handleSubmit}
            className="formButton"
            ></input>
        </div>
    );
}

export default SubmitCV;