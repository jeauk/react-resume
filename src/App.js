import logo from './logo.svg';
import './App.css';
import React from 'react';
import MaxLengthInput from './components/MaxLengthInput';
import ResumeForm from './components/ResumeForm';

function App() {
  return (
    <div className="App">
      <MaxLengthInput />
      <ResumeForm />
    </div>
  );
}

export default App;