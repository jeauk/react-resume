import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const jwt = sessionStorage.getItem('jwt')
  return (
    <div className='Header'>
      <div className="Logo">
        <a href="/">
          Logo
        </a>
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
        <a href="/3">My page</a>
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