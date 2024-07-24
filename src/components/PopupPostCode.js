import React from 'react';
import DaumPostcode from "react-daum-postcode";
import './PopupPostCode.css';

const PopupPostCode = (props) => {
  // 우편번호 검색 후 주소 클릭 시 실행될 함수, data callback 용
  const handlePostCode = (data) => {
    let fullAddress = data.address;
    let extraAddress = ''; 
    
    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
      }
      fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
    }
    props.onAddressSelect({ fullAddress, zonecode: data.zonecode });
  }
 
  const postCodeStyle = {
    display: "block",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    maxWidth: "600px",
    height: "70%",
    padding: "7px",
    background: "white",
    border: "1px solid #ddd",
    boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
    zIndex: 1000,
    overflow: "hidden",
  };
 
  return(
    <div style={postCodeStyle}>
      {/* 닫기 버튼 생성 */}
      <button type='button' onClick={props.onClose} className='postCode_btn'>닫기</button>
      <DaumPostcode onComplete={handlePostCode} style={{ width: "100%", height: "calc(100% - 40px)" }} />
    </div>
  )
}

export default PopupPostCode;
