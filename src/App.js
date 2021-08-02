import React from 'react';
import PersonalDetails from './components/personal_details';
import EducationalQual from './components/educational_quals';
import WorkExperience from './components/work_experience';
import SubmitCV from "./components/submit_cv";

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      editMode:true,
      name:'',
      email:'',
      phone:'',
      city:'',
      country:'',
      education:[],
      work:[]
    };
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleEducationInput = this.handleEducationInput.bind(this);
    this.handleWorkInput = this.handleWorkInput.bind(this);
    this.handleEducationDelete = this.handleEducationDelete.bind(this);
    this.handleEducationEdit = this.handleEducationEdit.bind(this);
    this.handleEducationUpdate = this.handleEducationUpdate.bind(this);
    this.handleWorkDelete = this.handleWorkDelete.bind(this);
    this.handleWorkEdit = this.handleWorkEdit.bind(this);
    this.handleWorkUpdate = this.handleWorkUpdate.bind(this);
  }
  
  handleSubmit(e) {
    let new_state=(this.state.editMode)?false:true;
    this.setState({
      editMode:new_state
    });
  }

  handleInput(target,value) {
    this.setState({
      [target]:value
    });
  }

  handleEducationInput(values) {
    this.setState({
      education:[...this.state.education,values]
    });
  }

  handleEducationDelete(index) {
    let education_copy = this.state.education;
    education_copy[index].deleted = true;
    this.setState({
      education: education_copy
    });
  }

  handleEducationEdit(index) {
    let education_copy = this.state.education;
    education_copy[index].editing = (education_copy[index].editing)? false : true;
    this.setState({
      education: education_copy
    });
  }

  handleEducationUpdate(index,values) {
    let education_copy = this.state.education;
    education_copy[index].degree = values.degree;
    education_copy[index].uni = values.uni;
    education_copy[index].desc = values.desc;
    education_copy[index].start = values.start;
    education_copy[index].end = values.end;
    education_copy[index].ongoing = values.ongoing;
    education_copy[index].editing = false;
    this.setState({
      education: education_copy
    });
  }

  handleWorkInput(values) {
    this.setState({
      work:[...this.state.work,values]
    });
  }

  handleWorkDelete(index) {
    let work_copy = this.state.work;
    work_copy[index].deleted = true;
    this.setState({
      work: work_copy
    });
  }

  handleWorkEdit(index) {
    let work_copy = this.state.work;
    work_copy[index].editing = (work_copy[index].editing)? false : true;
    this.setState({
      work: work_copy
    });
  }

  handleWorkUpdate(index,values) {
    let work_copy = this.state.work;
    work_copy[index].designation = values.designation;
    work_copy[index].company = values.company;
    work_copy[index].rnr = values.rnr;
    work_copy[index].from = values.from;
    work_copy[index].to = values.to;
    work_copy[index].ongoing = values.ongoing;
    work_copy[index].editing = false;
    this.setState({
      work: work_copy
    });
  }

  render() {
    return (
      <div className="App">
        <PersonalDetails 
        onType={this.handleInput}
        editMode={this.state.editMode}
        name={this.state.name}
        email={this.state.email}
        phone={this.state.phone}
        city={this.state.city}
        country={this.state.country}
        />
        <EducationalQual
        editMode={this.state.editMode}
        education={this.state.education}
        onAdd={this.handleEducationInput}
        onDelete={this.handleEducationDelete}
        onEdit={this.handleEducationEdit}
        onUpdate={this.handleEducationUpdate}
        />
        <WorkExperience
        editMode={this.state.editMode}
        work={this.state.work}
        onAdd={this.handleWorkInput}
        onDelete={this.handleWorkDelete}
        onEdit={this.handleWorkEdit}
        onUpdate={this.handleWorkUpdate}
        />
        <SubmitCV
        onSubmit={this.handleSubmit}
        editMode={this.state.editMode}
        />
      </div>
    );
  }
}

export default App;
