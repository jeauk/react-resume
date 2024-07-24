import React, { useState } from 'react';
import './UserInfo.css';  // 추가한 CSS 파일을 import

const UserInfo = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 전화번호 입력 시 자동으로 하이픈 추가하는 함수
  const handlePhoneInput = (event) => {
    let input = event.target.value.replace(/\D/g, ''); // 숫자만 남김
    let formattedPhone = '';

    if (input.length <= 3) {
      formattedPhone = input;
    } else if (input.length <= 7) {
      formattedPhone = input.slice(0, 3) + '-' + input.slice(3);
    } else {
      formattedPhone = input.slice(0, 3) + '-' + input.slice(3, 7) + '-' + input.slice(7, 11);
    }

    setPhone(formattedPhone);
  };

  // 폼 제출 시 데이터베이스에 데이터 저장
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
  };

  // 데이터 전송 useEffect 훅
  React.useEffect(() => {
    const sendData = async () => {
      if (isSubmitting) {
        const userInfo = { name, phone, address, email };
        try {
          const response = await fetch('http://localhost:8080/api/userinfo', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(userInfo),
          });

          if (response.ok) {
            alert('정보가 성공적으로 저장되었습니다.');
            // 폼 초기화
            setName('');
            setPhone('');
            setAddress('');
            setEmail('');
          } else {
            alert('정보 저장에 실패했습니다.');
          }
        } catch (error) {
          console.error('Error:', error);
          alert('정보 저장 중 오류가 발생했습니다.');
          } finally {
            setIsSubmitting(false);
          }
      }
    };

    sendData();
  }, [isSubmitting, name, phone, address, email]);

  return (
    <div className="userInfo">
      <h2>인적사항</h2>
      <div className='info'>
        <input type="file" multiple="multiple" name="image" />
        <form onSubmit={handleSubmit}>
          <table>
            <tbody>
              <tr>
                <th><label htmlFor="name">이름</label></th>
                <td>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="이름을 입력하세요"
                  />
                </td>
                <th><label htmlFor="phone">전화번호</label></th>
                <td>
                  <input
                    id="phone"
                    type="text"
                    value={phone}
                    onInput={handlePhoneInput}
                    placeholder="전화번호를 입력하세요"
                  />
                </td>
              </tr>
              <tr>
                <th><label htmlFor="address">주소</label></th>
                <td>
                  <textarea
                    id="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="주소를 입력하세요"
                  ></textarea>
                </td>
                <th><label htmlFor="email">이메일</label></th>
                <td>
                  <textarea
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="이메일을 입력하세요"
                  ></textarea>
                </td>
              </tr>
            </tbody>
          </table>
          <button type="submit">저장</button>
        </form>
      </div>
    </div>
  );
};

export default UserInfo;
