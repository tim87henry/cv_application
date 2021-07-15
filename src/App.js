import React from 'react';
import PersonalDetails from './components/personal_details';
import EducationalQual from './components/educational_quals';
import WorkExperience from './components/work_experience';

function App() {
  return (
    <div className="App">
      <PersonalDetails/>
      <EducationalQual/>
      <WorkExperience/>
    </div>
  );
}

export default App;
