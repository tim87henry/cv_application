import React from 'react';

class AddWork extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            showNewForm: false,
            new_designation: '',
            new_company: '',
            new_from: '',
            new_to: ''
        };
        this.displayForm = this.displayForm.bind(this);
        this.onType = this.onType.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    displayForm() {
        let currentNewForm;
        currentNewForm = this.state.showNewForm? false: true;
        this.setState({
            showNewForm: currentNewForm,
            new_designation: '',
            new_company: '',
            new_from: '',
            new_to: ''
          });
    }

    submitForm() {
        let values={
            designation: this.state.new_designation,
            company: this.state.new_company,
            from: this.state.new_from,
            to: this.state.new_to
        }
        this.props.onAdd(values)
        this.displayForm()
    }

    onType(target,value) {
        this.setState({
            [target]:value
        });
    }

    handleInput(e) {
        this.onType(e.target.name,e.target.value)
    }

    render() {
        return(
            <div>
                <input type="button" value="Add" onClick={this.displayForm}></input><br/><br/>
                {
                    this.state.showNewForm ?
                    <p>
                        Designation
                        <input type="input" onChange={this.handleInput} name="new_designation" value={this.state.new_designation}></input><br/><br/>
                        Company
                        <input type="input" onChange={this.handleInput} name="new_company" value={this.state.new_company}></input><br/><br/>
                        From
                        <input type="input" onChange={this.handleInput} name="new_from" value={this.state.new_from}></input><br/><br/>
                        To
                        <input type="input" onChange={this.handleInput} name="new_to" value={this.state.new_to}></input><br/><br/>
                        <input type="button" value="Submit" onClick={this.submitForm}></input>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="button" value="Cancel" onClick={this.displayForm}></input><br/><br/>
                    </p>
                    : null
                }
            </div>
        );
    }
}

class WorkExperience extends React.Component {

    render() {
        let work_exp=[];
                for (let i=0;i<this.props.work.length;i++) {
                    work_exp.push(<p>
                        Designation {this.props.work[i].designation}<br/>
                        Company {this.props.work[i].company}<br/>
                        From {this.props.work[i].from}<br/>
                        To {this.props.work[i].to}
                        </p>)
                }
        return(
            <div>
                <h3>Work Experience</h3>
                {work_exp}
                <AddWork
                work={this.props.work}
                onAdd={this.props.onAdd}
                />
            </div>
        );
    }
} 

export default WorkExperience;