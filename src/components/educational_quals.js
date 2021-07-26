import React from 'react';

class AddDegree extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            showNewForm: false,
            new_degree: '',
            new_uni: '',
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
            new_start: '',
            new_end: '',
            ongoing: false,
            deleted: false
          });
    }

    submitForm() {
        let values={
            degree: this.state.new_degree,
            uni: this.state.new_uni,
            start: this.state.new_start,
            end: this.state.new_end,
            ongoing: this.state.ongoing,
            deleted: this.state.deleted
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
            new_end: "ongoing",
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

class EducationalQual extends React.Component {

    render() {
        let educational_quals=[];
                for (let i=0;i<this.props.education.length;i++) {
                    educational_quals.push(<p>
                        Degree {this.props.education[i].degree}<br/>
                        University/School {this.props.education[i].uni}<br/>
                        From {this.props.education[i].start}<br/>
                        To {this.props.education[i].end}<br/>
                        <input type="button" value="Del" onClick={this.props.onDelete("3")}></input><br/><br/>
                        </p>)
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