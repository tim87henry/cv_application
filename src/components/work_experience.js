import React from 'react';

class AddWork extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            showNewForm: false,
            new_designation: '',
            new_company: '',
            new_from: '',
            new_to: '',
            ongoing:false,
            deleted: false
        };
        this.displayForm = this.displayForm.bind(this);
        this.onType = this.onType.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.handleOngoing = this.handleOngoing.bind(this);
    }

    displayForm() {
        let currentNewForm;
        currentNewForm = this.state.showNewForm? false: true;
        this.setState({
            showNewForm: currentNewForm,
            new_designation: '',
            new_company: '',
            new_from: '',
            new_to: '',
            ongoing: false,
            deleted: false,
            editing: false
          });
    }

    submitForm() {
        let values={
            designation: this.state.new_designation,
            company: this.state.new_company,
            from: this.state.new_from,
            to: this.state.new_to,
            ongoing: this.state.ongoing,
            deleted: this.state.deleted,
            editing: this.state.editing
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

    handleOngoing(e) {
        let new_ongoing;
        new_ongoing = this.state.ongoing? false : true;
        this.setState({
            new_to: "Ongoing",
            ongoing: new_ongoing
        });
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
                        <input type="date" onChange={this.handleInput} name="new_from" value={this.state.new_from}></input><br/><br/>
                        To
                        <input type="date" onChange={this.handleInput} name="new_to" value={this.state.new_to} disabled={this.state.ongoing}></input>
                        <input type="checkbox" onChange={this.handleOngoing} name="ongoing" value={this.state.ongoing}></input>Ongoing<br/><br/>
                        <input type="button" value="Submit" onClick={this.submitForm}></input>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="button" value="Cancel" onClick={this.displayForm}></input><br/><br/>
                    </p>
                    : null
                }
            </div>
        );
    }
}

class EditWork extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            new_designation: this.props.designation,
            new_company: this.props.company,
            new_from: this.props.from,
            new_to: this.props.to,
            new_ongoing: this.props.ongoing
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleOngoing = this.handleOngoing.bind(this);
    }

    handleInput(e) {
        this.setState({
            [e.target.name]:e.target.value
        });
    }

    handleUpdate() {
        let values = {
            designation: this.state.new_designation,
            company: this.state.new_company,
            from: this.state.new_from,
            to: this.state.new_to,
            ongoing: this.state.new_ongoing
        };
        this.props.onUpdate(this.props.index,values)
    }

    handleOngoing(e) {
        let new_ongoing;
        new_ongoing = this.state.new_ongoing? false : true;
        this.setState({
            new_to: "Ongoing",
            new_ongoing: new_ongoing
        });
    }

    render() {
        let check_box;
        if(this.state.new_to === "Ongoing") {
            check_box = <span><input type="checkbox" onChange={this.handleOngoing} name="ongoing" value={this.state.ongoing} checked></input>Ongoing<br/><br/></span>
        } else {
            check_box = <span><input type="checkbox" onChange={this.handleOngoing} name="ongoing" value={this.state.ongoing}></input>Ongoing<br/><br/></span>
        }
        return(
            <div>
                <p>
                    Designation
                    <input type="input" onChange={this.handleInput} name="new_designation" value={this.state.new_designation}></input><br/><br/>
                    Company
                    <input type="input" onChange={this.handleInput} name="new_company" value={this.state.new_company}></input><br/><br/>
                    Year Started
                    <input type="date" onChange={this.handleInput} name="new_from" value={this.state.new_from}></input><br/><br/>
                    Year Completed
                    <input type="date" onChange={this.handleInput} name="new_to" value={this.state.new_to} disabled={this.state.ongoing}></input>
                    { check_box }
                    <input type="button" value="Submit" onClick={this.handleUpdate}></input>&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="button" value="Cancel" onClick={() => this.props.onEdit(this.props.index)}></input><br/><br/>
                </p>
            </div>
        );
    }
}

class WorkExperience extends React.Component {

    render() {
        let work_exp=[];
                for (let i=0;i<this.props.work.length;i++) {
                    if (!this.props.work[i].deleted) {
                        if (this.props.work[i].editing) {
                            work_exp.push(<p>
                                <EditWork
                                designation={this.props.work[i].designation}
                                company={this.props.work[i].company}
                                from={this.props.work[i].from}
                                to={this.props.work[i].to}
                                index={i}
                                onEdit={this.props.onEdit}
                                onUpdate={this.props.onUpdate}
                                />
                            </p>)
                        } else {
                            work_exp.push(<p>
                                Designation {this.props.work[i].designation}<br/>
                                Company {this.props.work[i].company}<br/>
                                From {this.props.work[i].from}<br/>
                                To {(this.props.work[i].ongoing)? "Ongoing": this.props.work[i].to}<br/>
                                <input type="button" value="Edit" onClick={() => this.props.onEdit(i)}></input>&nbsp;&nbsp;&nbsp;
                                <input type="button" value="Del" onClick={() => this.props.onDelete(i)}></input><br/><br/>
                                </p>)
                        }
                    }
                }
        return(
            <div>
                <h3>Work Experience</h3>
                {work_exp}
                {
                    this.props.editMode ? (
                        <AddWork
                        work={this.props.work}
                        onAdd={this.props.onAdd}
                        />
                    ): null
                }
            </div>
        );
    }
} 

export default WorkExperience;
