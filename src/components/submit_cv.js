import React from 'react';
import '../css/formStyles.css'
import '../css/personalStyles.css'

class SubmitCV extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        this.props.onSubmit(e);
    }

    render() {
        let button_text='';
        button_text = (this.props.editMode)? "Submit CV": "Back";
        return(
            <div className="submitSection">
                <input 
                type="button" 
                value={button_text}
                onClick={this.handleSubmit}
                className="formButton"
                ></input>
            </div>
        );
    }
}

export default SubmitCV;