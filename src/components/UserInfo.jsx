import React, { useState, useRef } from 'react';
import './UserInfo.css';
import PopupDom from './PopupDom';
import PopupPostCode from './PopupPostCode';

const UserInfo = ({ setUserInfo }) => {
  const [userInfo, setUserInfoLocal] = useState({
    name: '', 
    phone: '', 
    address: '', 
    detailedAddress: '', 
    email: '',
    profileImagePath: '' // 추가: 프로필 이미지 경로
  });

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [mainImg, setMainImg] = useState("https://via.placeholder.com/300x400"); // 기본 이미지 설정
  const fileInputRef = useRef(null);

  const openPostCode = () => {
    setIsPopupOpen(true);
  };

  const closePostCode = () => {
    setIsPopupOpen(false);
  };

  const setPreviewImg = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setMainImg(event.target.result);
      };
      reader.readAsDataURL(file);
      uploadImage(file);
    }
  };

  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('http://localhost:8080/resume/upload', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const filePath = await response.text();
      console.log(filePath); // 파일 경로 출력

      setUserInfoLocal({ ...userInfo, profileImagePath: filePath });
      setUserInfo({ ...userInfo, profileImagePath: filePath });
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  const handlePhoneInput = (event) => {
    let input = event.target.value.replace(/\D/g, '');
    let formattedPhone = '';

    if (input.length <= 3) {
      formattedPhone = input;
    } else if (input.length <= 7) {
      formattedPhone = input.slice(0, 3) + '-' + input.slice(3);
    } else {
      formattedPhone = input.slice(0, 3) + '-' + input.slice(3, 7) + '-' + input.slice(7, 11);
    }

    setUserInfoLocal({ ...userInfo, phone: formattedPhone });
    setUserInfo({ ...userInfo, phone: formattedPhone });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  const handleAddress = (data) => {
    const fullAddress = data.fullAddress;
    setUserInfoLocal({ ...userInfo, address: fullAddress });
    setUserInfo({ ...userInfo, address: fullAddress });
    closePostCode();
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="userInfo">
      <h2>인적사항</h2>
      <div className='info'>
        <form onSubmit={handleSubmit}>
          <table>
            <tbody>
              <tr>
                <th className='img_th' rowSpan="3" style={{height:'100%'}}>
                  <img 
                    alt="메인사진" 
                    src={mainImg} 
                    onClick={handleImageClick}
                    style={{
                      maxWidth:'100%',
                      maxHeight:'100%',
                      }
                    }
                  />
                  <input 
                    type="file" 
                    accept="image/*" 
                    style={{ display: "none" }} 
                    ref={fileInputRef} 
                    onChange={setPreviewImg}
                  />
                </th>
                <th><label htmlFor="name">이름</label></th>
                <td>
                  <div className="name-wrapper">
                    <input
                      id="name"
                      name="name"
                      type="name"
                      value={userInfo.name}
                      onChange={(e) => {
                        const newName = e.target.value;
                        setUserInfoLocal({ ...userInfo, name: newName });
                        setUserInfo({ ...userInfo, name: newName });
                      }}
                      placeholder="이름을 입력하세요"
                    />
                  </div>
                </td>
                <th><label htmlFor="phone">전화번호</label></th>
                <td>
                  <div className="phone-wrapper">
                    <input
                      id="phone"
                      name="phone"
                      value={userInfo.phone}
                      onChange={handlePhoneInput}
                      placeholder="전화번호를 입력하세요"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th><label htmlFor="address">주소</label></th>
                <td colSpan="3">
                  <div className="address-wrapper">
                    <input
                      id="address"
                      name="address"
                      value={userInfo.address}
                      readOnly
                      placeholder="주소를 선택하세요"
                      onClick={openPostCode}
                      style={{ cursor: 'pointer' }}
                    />
                    <input
                      id="detailedAddress"
                      name="detailedAddress"
                      value={userInfo.detailedAddress}
                      onChange={(e) => {
                        const newDetailedAddress = e.target.value;
                        setUserInfoLocal({ ...userInfo, detailedAddress: newDetailedAddress });
                        setUserInfo({ ...userInfo, detailedAddress: newDetailedAddress });
                      }}
                      placeholder="상세 주소를 입력하세요"
                    />
                  </div>
                  <div id='popupDom'>
                    {isPopupOpen && (
                      <PopupDom>
                        <PopupPostCode onClose={closePostCode} onAddressSelect={handleAddress} />
                      </PopupDom>
                    )}
                  </div>
                </td>
              </tr>
              <tr>
                <th><label htmlFor="email">이메일</label></th>
                <td colSpan="3">
                  <div className="email-wrapper">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={userInfo.email}
                      onChange={(e) => {
                        const newEmail = e.target.value;
                        setUserInfoLocal({ ...userInfo, email: newEmail });
                        setUserInfo({ ...userInfo, email: newEmail });
                      }}
                      placeholder="이메일을 입력하세요"
                      style={{ width: "auto" }}
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
};

export default UserInfo;
