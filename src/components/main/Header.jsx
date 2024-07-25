const Header = () => {
  return (
    <div className='Header'>
      <div className="Logo">
        <a href="/">
          Logo
        </a>
      </div>
      <span className="page">
        <a href="/3">My page</a>
      </span>
      <span className="login">
        <a href="/1">
          로그인
        </a>
      </span>
    </div>
  );
};

export default Header;