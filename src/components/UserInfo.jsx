import React, { useState } from 'react';
import './UserInfo.css';  // 추가한 CSS 파일을 import

const UserInfo = () => {
  // 각 입력 필드에 대한 상태 정의
  const [name, setName] = useState(''); // 이름
  const [phone, setPhone] = useState(''); // 전화번호
  const [address, setAddress] = useState(''); // 주소
  const [email, setEmail] = useState(''); // 이메일
  const [isSubmitting, setIsSubmitting] = useState(false); // 제출 상태

  // 이미지 미리보기 상태 정의
  let [mainImg, setMainImg] = useState("");

  // 이미지 파일을 선택하면 미리보기를 설정하는 함수
  const setPreviewImg = (event) => {
    var reader = new FileReader(); // 파일 리더 생성

    // 파일 읽기가 완료되면 미리보기 이미지 설정
    reader.onload = function(event) {
      setMainImg(event.target.result);
    };

    reader.readAsDataURL(event.target.files[0]); // 파일을 데이터 URL로 읽기
  }

  // 전화번호 입력 시 자동으로 하이픈을 추가하는 함수
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

    setPhone(formattedPhone); // 포맷된 전화번호 설정
  };

  // 폼 제출 시 데이터베이스에 데이터를 저장하는 함수
  const handleSubmit = async (event) => {
    event.preventDefault(); // 기본 제출 동작 방지
    setIsSubmitting(true); // 제출 상태 설정
  };

  // 데이터 전송을 위한 useEffect 훅
  React.useEffect(() => {
    const sendData = async () => {
      if (isSubmitting) { // 제출 상태일 때만 실행
        const userInfo = { name, phone, address, email }; // 사용자 정보 객체 생성
        try {
          const response = await fetch('http://localhost:8080/api/userinfo', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(userInfo), // 사용자 정보 JSON으로 변환하여 전송
          });

          if (response.ok) {
            alert('정보가 성공적으로 저장되었습니다.'); // 성공 메시지
            // 폼 초기화
            setName('');
            setPhone('');
            setAddress('');
            setEmail('');
          } else {
            alert('정보 저장에 실패했습니다.'); // 실패 메시지
          }
        } catch (error) {
          console.error('Error:', error);
          alert('정보 저장 중 오류가 발생했습니다.'); // 오류 메시지
        } finally {
          setIsSubmitting(false); // 제출 상태 해제
        }
      }
    };

    sendData();
  }, [isSubmitting, name, phone, address, email]); // isSubmitting, name, phone, address, email이 변경될 때마다 실행

  return (
    <div className="userInfo">
      <h2>인적사항</h2>
      <div className='info'>
        {/* 이미지 파일 선택 및 미리보기 */}
        <input type="file" id="image" accept="image/*" 
          style={{border: "solid 1px lightgray", borderRadius: "5px"}}
          onChange={setPreviewImg}/>
        <img alt="메인사진" src={mainImg} style={{maxWidth:"100px"}}></img>
        {/* 사용자 정보 입력 폼 */}
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
