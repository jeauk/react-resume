import './App.css';
import React from 'react';
import MaxLengthInput from './components/MaxLengthInput';
import ResumeForm from './components/ResumeForm';
import UserInfo from './components/UserInfo';



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