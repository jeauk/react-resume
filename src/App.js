import './App.css';
import React from 'react';
import ResumeMain from './components/ResumeMain';
import Main from './components/main/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/main/Header';
import SignIn from './components/main/SignIn';
import SignUp from './components/main/SignUp';
import MyPage from './components/main/MyPage';
import PrivateRoute from './components/PrivateRoute';



function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Header />

        <Routes>
          <Route path="/resume" element={<PrivateRoute element={ResumeMain} />} />
          <Route path="/" element={<Main />} />
          <Route path="/1" element={<SignIn />} />
          <Route path="/2" element={<SignUp />} />
          <Route path="/3" element={<PrivateRoute element={MyPage} />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;