import './App.css';
import React from 'react';
import MaxLengthInput from './components/MaxLengthInput';
import ResumeForm from './components/ResumeForm';
import CertificationForm from './components/CertificationForm';
import UserInfo from './components/UserInfo';
import EducationForm from './components/EducationForm';
import ExperienceForm from './components/ExperienceForm';



function App() {
  return (
    <div className="App">
      <MaxLengthInput />
      <ResumeForm />
      <UserInfo />
    </div>
  );
}

export default App;