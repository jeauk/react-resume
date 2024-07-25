  import React, { useState, useEffect, useRef } from 'react';
  import './UserInfo.css';
  import PopupDom from './PopupDom';
  import PopupPostCode from './PopupPostCode';

  const UserInfo = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [detailedAddress, setDetailedAddress] = useState('');
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [mainImg, setMainImg] = useState("");
    const fileInputRef = useRef(null);

    const openPostCode = () => {
      setIsPopupOpen(true);
    };

    const closePostCode = () => {
      setIsPopupOpen(false);
    };

    const setPreviewImg = (event) => {
      var reader = new FileReader();
      reader.onload = function(event) {
        setMainImg(event.target.result);
      };
      reader.readAsDataURL(event.target.files[0]);
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

      setPhone(formattedPhone);
    };

    const handleSubmit = async (event) => {
      event.preventDefault();
      setIsSubmitting(true);
    };

    useEffect(() => {
      const sendData = async () => {
        if (isSubmitting) {
          const userInfo = { name, phone, address, detailedAddress, email };
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
              setName('');
              setPhone('');
              setAddress('');
              setDetailedAddress('');
              setEmail('');
              setMainImg('');
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
    }, [isSubmitting, name, phone, address, detailedAddress, email]);

    const handleAddress = (data) => {
      setAddress(data.fullAddress);
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
                  <th className='img_th' rowSpan="3">
                    <img 
                      alt="메인사진" 
                      src={mainImg || "https://via.placeholder.com/300x400"} 
                      onClick={handleImageClick}
                    />
                    <input 
                      type="file" 
                      accept="image/*" 
                      style={{display: "none"}} 
                      ref={fileInputRef} 
                      onChange={setPreviewImg}
                    />
                  </th>
                  <th><label htmlFor="name">이름</label></th>
                  <td>
                  <div className="name-wrapper">
                    <input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="이름을 입력하세요"
                    />
                    </div>
                  </td>
                  <th><label htmlFor="phone">전화번호</label></th>
                  <td>
                  <div className="phone-wrapper">
                    <input
                      id="phone"
                      type="text"
                      value={phone}
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
                        type="text"
                        value={address}
                        readOnly
                        placeholder="주소를 선택하세요"
                        onClick={openPostCode}
                        style={{ cursor: 'pointer' }}
                      />
                      <input
                        id="detailedAddress"
                        type="text"
                        value={detailedAddress}
                        onChange={(e) => setDetailedAddress(e.target.value)}
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
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
