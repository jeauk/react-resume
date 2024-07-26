import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './SignIn.css'

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleSignIn = async () => {
    const url = 'http://127.0.0.1:8080/signin';
    const res = await fetch(url, {
      method: 'post',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ email: email, password: pwd })
    });
    const data = await res.json();
    if (data.code === 200) {
      alert(data.msg);
      sessionStorage.setItem("jwt", data.jwt);  // JWT 토큰 저장
      sessionStorage.setItem("name", data.name);
      sessionStorage.setItem("id", data.id);  // 사용자 ID 저장
      navigate('/');
    } else {
      alert(data.msg);
    }
  };
  

  return (
    <div className="container">
      <div className="form-container">
        <h2>Sign In</h2>
        <form method="post" action="/signin" onSubmit={(e) => e.preventDefault()}>
          <div className="mb-3 input-group flex-nowrap">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text" className="form-control" name="email" placeholder="Email" />
          </div>
          <div className="mb-3 input-group flex-nowrap">
            <input
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
              type="password" className="form-control" name="pwd" placeholder="Password" />
          </div>
          <button
            onClick={handleSignIn}
            className="btn btn-primary">Sign In
          </button>
          <a href="/2" className="link">Sign Up</a>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
