import React, {useState} from 'react';
import PersonalDetails from './components/personal_details';
import EducationalQual from './components/educational_quals';
import WorkExperience from './components/work_experience';
import SubmitCV from "./components/submit_cv";
import './css/personalStyles.css';

const App = () => {

  const [editMode, setEditMode] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [education, setEducation] = useState([]);
  const [work, setWork] = useState([]);
  
  const handleSubmit = (e) => {
    let new_state=(editMode)?false:true;
    setEditMode(new_state)
  }

  const handleInput = (target,value) => {
    let setOfVariables = {
      "name": setName,
      "email": setEmail,
      "phone": setPhone,
      "city": setCity,
      "country": setCountry
    }
    setOfVariables[target](value);
  }

  const handleEducationInput = (values) => {
    setEducation([...education,values])
  }

  const handleEducationDelete = (index) => {
    let education_copy = education;
    education_copy[index].deleted = true;
    setEducation(education_copy)
  }

  const handleEducationEdit = (index) => {
    console.log("HERESSSS")
    let education_copy = education;
    education_copy[index].editing = (education_copy[index].editing)? false : true;
    setEducation(education_copy)
    console.log("IT's "+education[index].editing)
  }

  const handleEducationUpdate = (index,values) => {
    let education_copy = education;
    education_copy[index].degree = values.degree;
    education_copy[index].uni = values.uni;
    education_copy[index].desc = values.desc;
    education_copy[index].start = values.start;
    education_copy[index].end = values.end;
    education_copy[index].ongoing = values.ongoing;
    education_copy[index].editing = false;
    setEducation(education_copy)
  }

  const handleWorkInput = (values) => {
    setWork([...work,values])
  }

  const handleWorkDelete = (index) => {
    let work_copy = work;
    work_copy[index].deleted = true;
    setWork(work_copy)
  }

  const handleWorkEdit = (index) => {
    let work_copy = work;
    work_copy[index].editing = (work_copy[index].editing)? false : true;
    setWork(work_copy)
  }

  const handleWorkUpdate = (index,values) => {
    let work_copy = work;
    work_copy[index].designation = values.designation;
    work_copy[index].company = values.company;
    work_copy[index].rnr = values.rnr;
    work_copy[index].from = values.from;
    work_copy[index].to = values.to;
    work_copy[index].ongoing = values.ongoing;
    work_copy[index].editing = false;
    setWork(work_copy)
  }

  return (
    <div className="App" className="cv_section">
      <PersonalDetails 
      onType={handleInput}
      editMode={editMode}
      name={name}
      email={email}
      phone={phone}
      city={city}
      country={country}
      />
      <EducationalQual
      editMode={editMode}
      education={education}
      onAdd={handleEducationInput}
      onDelete={handleEducationDelete}
      onEdit={handleEducationEdit}
      onUpdate={handleEducationUpdate}
      />
      <WorkExperience
      editMode={editMode}
      work={work}
      onAdd={handleWorkInput}
      onDelete={handleWorkDelete}
      onEdit={handleWorkEdit}
      onUpdate={handleWorkUpdate}
      />
      <SubmitCV
      onSubmit={handleSubmit}
      editMode={editMode}
      />
    </div>
  );

}

export default App;
