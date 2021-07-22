import React from 'react';

class AddDegree extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            showNewForm: false,
            new_degree: '',
            new_uni: '',
            new_start: '',
            new_end: ''
        };
        this.displayForm = this.displayForm.bind(this);
        this.onType = this.onType.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    displayForm() {
        let currentNewForm;
        currentNewForm = this.state.showNewForm? false: true;
        this.setState({
            showNewForm: currentNewForm
          });
    }

    onType(target,value) {
        this.setState({
          //education[length].{target}:value
        });
    }

    handleInput(e) {
        this.onType(e.target.name,e.target.value)
    }

    render() {
        console.log("EDUTCATION IS "+this.props.education[0])
        return(
            <div>
                <input type="button" value="Add" onClick={this.displayForm}></input><br/><br/>
                {
                    this.state.showNewForm ?
                    <p>
                        Degree
                        <input type="input" onChange={this.handleInput} name="degree"></input><br/><br/>
                        University/School
                        <input type="input"></input><br/><br/>
                        Year Started
                        <input type="input"></input><br/><br/>
                        Year Completed
                        <input type="input"></input><br/><br/>
                        <input type="button" value="Submit" onClick={this.displayForm}></input>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="button" value="Cancel" onClick={this.displayForm}></input><br/><br/>
                    </p>
                    : null
                }
            </div>
        );
    }
}

class EducationalQual extends React.Component {

    render() {
        let educational_quals=[];
                for (let i=0;i<this.props.education.length;i++) {
                    educational_quals.push(<p>
                        Degree {this.props.education[i].degree}<br/>
                        University/School {this.props.education[i].uni}<br/>
                        Year Started {this.props.education[i].start}<br/>
                        Year Completed {this.props.education[i].end}
                        </p>)
                }
        return(
            <div>
                <h3>Educational Qualifications</h3>
                {educational_quals}
                <AddDegree
                education={this.props.education}/>
            </div>
        );
    }
} 

export default EducationalQual;