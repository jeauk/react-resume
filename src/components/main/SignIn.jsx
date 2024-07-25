import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const s = () =>{
    navigate('/2')
  }
  return (
    <div className="container mt-5">
      <div className="row">
        <form method="post" action="/signin" onSubmit={(e) => {
          e.preventDefault();
        }}>
          <div className="mb-3 input-group flex-nowrap">
            <span className="input-group-text">💻</span>
            <input 
            value={email} 
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            type="text" className="form-control" name="email" placeholder="email" />
          </div>
          <div className="mb-3 input-group flex-nowrap">
            <span className="input-group-text">🔒</span>
            <input 
            value={pwd} 
            onChange={(e) => {
              setPwd(e.target.value)
            }}
            type="password" className="form-control" name="pwd" placeholder="password" />
          </div>
          <div className="d-grid gap-2">
            <button 
            onClick={() => {
              async function send() {
                const url ='http://127.0.0.1:8080/signin';
                const res = await fetch(url, {
                  method: 'post',
                  headers: {
                    'content-type': 'application/json'
                  },
                  body: JSON.stringify( {email: email, password: pwd}) 
                }); 
                const data = await res.json();
              if(data.code === 200) {
                alert(data.msg);
                navigate('/');
                sessionStorage.setItem("jwt", data.result);
              }else{
                alert(data.msg);
              }
            }
            send();

          }}
            className="btn btn-primary" id="signin">Sign In</button>
          </div>
        </form>
            <button onClick={s} className="btn btn-primary" id="signup">Sign Up</button>
      </div>
    </div>
  );
};

export default SignIn;