import React from 'react';

class AddDegree extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            showNewForm: false,
            new_degree: '',
            new_uni: '',
            new_desc: '',
            new_start: '',
            new_end: '',
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
            new_degree: '',
            new_uni: '',
            new_desc: '',
            new_start: '',
            new_end: '',
            ongoing: false,
            deleted: false,
            editing: false
          });
    }

    submitForm() {
        let values={
            degree: this.state.new_degree,
            uni: this.state.new_uni,
            desc: this.state.new_desc,
            start: this.state.new_start,
            end: this.state.new_end,
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
            new_end: "Ongoing",
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
                        Degree
                        <input type="input" onChange={this.handleInput} name="new_degree" value={this.state.new_degree}></input><br/><br/>
                        University/School
                        <input type="input" onChange={this.handleInput} name="new_uni" value={this.state.new_uni}></input><br/><br/>
                        Description
                        <textarea onChange={this.handleInput} name="new_desc" value={this.state.new_desc}></textarea><br/><br/>
                        Year Started
                        <input type="date" onChange={this.handleInput} name="new_start" value={this.state.new_start}></input><br/><br/>
                        Year Completed
                        <input type="date" onChange={this.handleInput} name="new_end" value={this.state.new_end} disabled={this.state.ongoing}></input>
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

class EditDegree extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            new_degree: this.props.degree,
            new_uni: this.props.uni,
            new_desc: this.props.desc,
            new_start: this.props.start,
            new_end: this.props.end,
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
            degree: this.state.new_degree,
            uni: this.state.new_uni,
            desc: this.state.new_desc,
            start: this.state.new_start,
            end: this.state.new_end,
            ongoing: this.state.new_ongoing
        };
        this.props.onUpdate(this.props.index,values)
    }

    handleOngoing(e) {
        let new_ongoing;
        new_ongoing = this.state.new_ongoing? false : true;
        this.setState({
            new_end: "Ongoing",
            new_ongoing: new_ongoing
        });
    }

    render() {
        let check_box;
        if(this.state.new_end === "Ongoing") {
            console.log("HEREEE")
            check_box = <span><input type="checkbox" onChange={this.handleOngoing} name="ongoing" value={this.state.ongoing} checked></input>Ongoing<br/><br/></span>
        } else {
            console.log("SORRY")
            check_box = <span><input type="checkbox" onChange={this.handleOngoing} name="ongoing" value={this.state.ongoing}></input>Ongoing<br/><br/></span>
        }
        return(
            <div>
                <p>
                    Degree
                    <input type="input" onChange={this.handleInput} name="new_degree" value={this.state.new_degree}></input><br/><br/>
                    University/School
                    <input type="input" onChange={this.handleInput} name="new_uni" value={this.state.new_uni}></input><br/><br/>
                    Description
                    <textarea onChange={this.handleInput} name="new_desc" value={this.state.new_desc}></textarea><br/><br/>
                    Year Started
                    <input type="date" onChange={this.handleInput} name="new_start" value={this.state.new_start}></input><br/><br/>
                    Year Completed
                    <input type="date" onChange={this.handleInput} name="new_end" value={this.state.new_end} disabled={this.state.ongoing}></input>
                    { check_box }
                    <input type="button" value="Submit" onClick={this.handleUpdate}></input>&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="button" value="Cancel" onClick={() => this.props.onEdit(this.props.index)}></input><br/><br/>
                </p>
            </div>
        );
    }
}

class EducationalQual extends React.Component {

    render() {
        let educational_quals=[];
                for (let i=0;i<this.props.education.length;i++) {
                    if (!this.props.education[i].deleted) {
                        if (this.props.education[i].editing) {
                            educational_quals.push(<p>
                                <EditDegree
                                degree={this.props.education[i].degree}
                                uni={this.props.education[i].uni}
                                desc={this.props.education[i].desc}
                                start={this.props.education[i].start}
                                end={this.props.education[i].end}
                                index={i}
                                onEdit={this.props.onEdit}
                                onUpdate={this.props.onUpdate}
                                />
                            </p>)
                        } else {
                            educational_quals.push(<p>
                                Degree {this.props.education[i].degree}<br/>
                                University/School {this.props.education[i].uni}<br/>
                                Description {this.props.education[i].desc}<br/>
                                From {this.props.education[i].start}<br/>
                                To {(this.props.education[i].ongoing)? "Ongoing": this.props.education[i].end}<br/>
                                <input type="button" value="Edit" onClick={() => this.props.onEdit(i)}></input>&nbsp;&nbsp;&nbsp;
                                <input type="button" value="Del" onClick={() => this.props.onDelete(i)}></input><br/><br/>
                                </p>)
                        }
                    }
                }
        return(
            <div>
                <h3>Educational Qualifications</h3>
                {educational_quals}
                {
                    this.props.editMode ? (
                        <AddDegree
                        education={this.props.education}
                        onAdd={this.props.onAdd}
                        />
                    ): null
                }
            </div>
        );
    }
} 

export default EducationalQual;