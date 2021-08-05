import React from 'react';

class AddWork extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            showNewForm: false,
            new_designation: '',
            new_company: '',
            new_rnr: '',
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
            new_rnr: '',
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
            rnr: this.state.new_rnr,
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
                <input type="button" value="Add" onClick={this.displayForm} className="formButton"></input><br/><br/>
                {
                    this.state.showNewForm ?
                    <div className="addEditForm">
                        <span>
                            <label>Designation</label>
                            <input type="input" onChange={this.handleInput} name="new_designation" value={this.state.new_designation}></input>
                        </span>
                        <span>
                            <label>Company</label>
                            <input type="input" onChange={this.handleInput} name="new_company" value={this.state.new_company}></input>
                        </span>
                        <span>
                            <label>Roles and Responsibilites</label>
                            <textarea onChange={this.handleInput} name="new_rnr" value={this.state.new_rnr}></textarea>
                        </span>
                        <span>
                            <label>From</label>
                            <input type="date" onChange={this.handleInput} name="new_from" value={this.state.new_from}></input>
                        </span>
                        <span>
                        <label>To</label>
                        <input type="date" onChange={this.handleInput} name="new_to" value={this.state.new_to} disabled={this.state.ongoing}></input>&nbsp;&nbsp;
                        <input type="checkbox" onChange={this.handleOngoing} name="ongoing" value={this.state.ongoing}></input>Ongoing
                        </span>
                        <span>
                        <input type="button" value="Submit" onClick={this.submitForm} className="formButton"></input>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="button" value="Cancel" onClick={this.displayForm} className="formButton"></input><br/><br/>
                        </span>
                    </div>
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
            new_rnr: this.props.rnr,
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
            rnr: this.state.new_rnr,
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
            check_box = <span><input type="checkbox" onChange={this.handleOngoing} name="ongoing" value={this.state.ongoing} checked></input>Ongoing</span>
        } else {
            check_box = <span><input type="checkbox" onChange={this.handleOngoing} name="ongoing" value={this.state.ongoing}></input>Ongoing</span>
        }
        return(
            <div className="addEditForm">
                <span>
                    <label>Designation</label>
                    <input type="input" onChange={this.handleInput} name="new_designation" value={this.state.new_designation}></input>
                </span>
                <span>
                    <label>Company</label>
                    <input type="input" onChange={this.handleInput} name="new_company" value={this.state.new_company}></input>
                </span>
                <span>
                    <label>Roles and Responsibilites</label>
                    <textarea onChange={this.handleInput} name="new_rnr" value={this.state.new_rnr}></textarea>
                </span>
                <span>
                    <label>Year Started</label>
                    <input type="date" onChange={this.handleInput} name="new_from" value={this.state.new_from}></input>
                </span>
                <span>
                    <label>Year Completed</label>
                    <input type="date" onChange={this.handleInput} name="new_to" value={this.state.new_to} disabled={this.state.ongoing}></input>&nbsp;&nbsp;
                    { check_box }
                </span>
                <span>
                    <input type="button" value="Submit" onClick={this.handleUpdate} className="formButton"></input>&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="button" value="Cancel" onClick={() => this.props.onEdit(this.props.index)} className="formButton"></input><br/><br/>
                </span>
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
                                rnr={this.props.work[i].rnr}
                                from={this.props.work[i].from}
                                to={this.props.work[i].to}
                                index={i}
                                onEdit={this.props.onEdit}
                                onUpdate={this.props.onUpdate}
                                />
                            </p>)
                        } else {
                            work_exp.push(
                                <div className="infoSection">
                                    <table>
                                        <tr>
                                            <th>{this.props.work[i].from} - {(this.props.work[i].ongoing)? "Ongoing": this.props.work[i].to}</th>
                                            <td className="infoDetails">
                                                <div><b>{this.props.work[i].designation}</b></div>
                                                <div><b>{this.props.work[i].company}</b></div>
                                                <div className="infoDescr">{this.props.work[i].rnr}</div>
                                            </td>
                                        </tr>
                                    </table>
                                    {
                                        this.props.editMode ? (
                                            <span>
                                                <input type="button" value="Edit" onClick={() => this.props.onEdit(i)} className="formButton"></input>&nbsp;&nbsp;&nbsp;
                                                <input type="button" value="Del" onClick={() => this.props.onDelete(i)} className="formButton"></input><br/><br/>
                                            </span>
                                        ): null
                                    }
                                    
                                </div>)
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
