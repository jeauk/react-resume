import { useNavigate } from "react-router-dom";
import s from './s.png'
const Header = () => {
  const navigate = useNavigate();
  const jwt = sessionStorage.getItem('jwt')
  return (
    <div className='Header'>
      <div className="Logo">
      <img 
            src={s} 
            alt="s" 
            onClick={() => navigate('/')} 
            className={s}
            />
      </div>
      <span className="name">
        {
          jwt ?
            <li>{sessionStorage.getItem('name')}</li>
            :
            <p></p>
        }
      </span>
      <span className="page">
        {
          jwt ?
            <a href="/3">My page</a>
            :
            <p></p>
        }
      </span>
      <span className="login">
        {
          jwt ?
            <span onClick={() => {
              sessionStorage.removeItem('jwt')
              sessionStorage.removeItem('name')
              navigate("/")
            }}>Logout</span>
            :
            <a href="/1">Login</a>
        }
      </span>
    </div>
  );
};

export default Header;