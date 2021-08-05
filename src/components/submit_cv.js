import React from 'react';
import '../css/formStyles.css'

class SubmitCV extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        this.props.onSubmit(e);
    }

    render() {
        return(
            <div className="submitSection">
                <input 
                type="button" 
                value="Submit CV"
                onClick={this.handleSubmit}
                className="formButton"
                ></input>
            </div>
        );
    }
}

export default SubmitCV;