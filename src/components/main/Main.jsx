import { useState, useEffect } from 'react';
import styles from './Main.module.css';
import { useNavigate } from 'react-router-dom';
import logo from './logo.png'

const Main = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const jwt = sessionStorage.getItem('jwt')

  useEffect(() => {
    // Main 컴포넌트가 마운트될 때 body의 overflow를 hidden으로 설정
    document.body.style.overflow = 'hidden';

    // Main 컴포넌트가 언마운트될 때 원래 overflow로 복구
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className={styles['page-container']}>
      <div className={styles.search}>
        <div className={styles.title}>
          {
            jwt
            ?
            <img 
            src={logo} 
            alt="Logo" 
            onClick={() => navigate('/resume')} 
            className={styles.logo}
            />
            :
            <img 
            src={logo} 
            alt="Logo" 
            onClick={() => navigate('/1')} 
            className={styles.logo}
            />
          }
        </div>
        <div className={styles.search_box}>
          <input
            type="text"
            placeholder="기업 검색"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={() => {
            window.open(`https://www.nicebizinfo.com/ep/EP0100M001GE.nice?itgSrch=${searchTerm}`, '', 'width=1500px,height=1500px');
          }}>
            검색
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;