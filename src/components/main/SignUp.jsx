import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [pwdcheck, setPwdcheck] = useState('');
  const [name, setName] = useState('');
  const [emailError, setEmailError] = useState('');
  const a = pwd === pwdcheck;

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const pwds = (e) => {
    setPwd(e.target.value);
  };

  const passwordch = (e) => {
    setPwdcheck(e.target.value);
  };

  const emails = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    if (!validateEmail(emailValue)) {
      setEmailError('올바른 이메일 형식을 입력하세요.');
    } else {
      setEmailError('');
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2>Sign Up</h2>
        <form method="post" action="/signup" onSubmit={(e) => {
          e.preventDefault();
        }}>

          <div className="mb-3">
            <label htmlFor="email">Email: </label>
            <input
              required
              value={email}
              onChange={emails}
              type="email"
              className="form-control"
              id="email"
              name="email"
            />
          </div>
          {emailError && <div className="text-danger">{emailError}</div>}
          <div className="mb-3">
            <label htmlFor="pwd">Password: </label>
            <input
              value={pwd}
              onChange={pwds}
              type="password"
              className="form-control"
              id="pwd"
              name="pwd"
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">PwdCheck: </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              required
              value={pwdcheck}
              onChange={passwordch}
              className="form-control"
            />
            {!a && <label id="pw-match" className="pw-match">비밀번호가 일치해야 됩니다.</label>}
          </div>

          <div className="mb-3">
            <label htmlFor="name">Name: </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="form-control"
              id="name"
              name="name"
            />
          </div>
          <div className="d-grid gap-2">
            <button
              onClick={() => {
                async function send() {
                  const url = 'http://127.0.0.1:8080/signup';
                  const res = await fetch(url, {
                    method: 'post',
                    headers: {
                      'content-type': 'application/json'
                    },
                    body: JSON.stringify({ email: email, password: pwd, name: name })
                  });
                  const data = await res.json();
                  if (data.code === 200) {
                    alert(data.msg);
                    navigate('/1');
                  } else {
                    alert('complete');
                  }
                }
                send();
              }}
              className="btn btn-primary"
              id="signup"
            >
              Sign Up
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default SignUp;
