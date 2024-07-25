import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [name, setName] = useState('');

  return (
    <div className="container mt-5">
      <div className="row">
        <form method="post" action="/signup">
          <div className="mb-3">
            <label for="email">Email:</label>
            <input
            value={email} 
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            type="text" className="form-control" id="email" name="email" />
          </div>
          <div className="mb-3">
            <label for="pwd">Password:</label>
            <input 
            value={pwd} 
            onChange={(e) => {
              setPwd(e.target.value)
            }}
            type="password" className="form-control" id="pwd" name="pwd" />
          </div>
          <div className="mb-3">
            <label for="name">Name:</label>
            <input 
            value={name} 
            onChange={(e) => {
              setName(e.target.value)
            }}
            type="text" className="form-control" id="name" name="name" />
          </div>
          <div className="d-grid gap-2">
            <button
             onClick={() => {
              async function send() {
                const url ='http://127.0.0.1:8080/signup';
                const res = await fetch(url, {
                  method: 'post',
                  headers: {
                    'content-type': 'application/json'
                    
                    
                  },
                    
                  body: JSON.stringify( {email: email, password: pwd, name: name}) 
                }); 
                const data = await res.json();
              if(data.code === 200) {
                alert(data.msg);
                navigate('/');
              }else{
                alert('complete');
              }
            }
            send();

            navigate('/');
          }}
            className="btn btn-primary" id="signup">Sign Up</button>
          </div>
        </form>
      </div>
    </div>

  );
};

export default SignUp;