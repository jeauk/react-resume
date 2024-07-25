import './App.css';
import React from 'react';
import ResumeMain from './components/ResumeMain';
import Main from './components/main/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <BrowserRouter> 
        <Routes>
          <Route path="/resume" element={<ResumeMain />} />
          
        </Routes>

        <Routes>
          <Route path="/" element={<Main />} />
          
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;