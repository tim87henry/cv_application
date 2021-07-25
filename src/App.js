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
      city:'',
      country:'',
      education:[],
      work:[]
    };
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleEducationInput = this.handleEducationInput.bind(this);
    this.handleWorkInput = this.handleWorkInput.bind(this);
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

  handleWorkInput(values) {
    this.setState({
      work:[...this.state.work,values]
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
        city={this.state.city}
        country={this.state.country}
        />
        <EducationalQual
        editMode={this.state.editMode}
        education={this.state.education}
        onAdd={this.handleEducationInput}
        />
        <WorkExperience
        editMode={this.state.editMode}
        work={this.state.work}
        onAdd={this.handleWorkInput}
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
