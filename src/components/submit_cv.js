import React from 'react';

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
            <div>
                <input 
                type="button" 
                value="Submit CV"
                onClick={this.handleSubmit}
                ></input>
            </div>
        );
    }
}

export default SubmitCV;