import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserInfo.css';

const UserInfo = ({ userInfo, readOnly }) => {

  return (
    <div className="userInfo">
      <h2>인적사항</h2>
      <div className='info'>
        <form>
          <table>
            <tbody>
              <tr>
                <th className='img_th' rowSpan="3">
                  <img 
                    alt="메인사진" 
                    src={userInfo.mainImg || "https://via.placeholder.com/300x400"} 
                  />
                </th>
                <th><label htmlFor="name">이름</label></th>
                <td>
                  <div className="name-wrapper">
                    <input
                      id="name"
                      name="name"
                      value={userInfo.name}
                      readOnly={readOnly}
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
                      readOnly={readOnly}
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
                      readOnly={readOnly}
                      placeholder="주소를 선택하세요"
                    />
                    <input
                      id="detailedAddress"
                      name="detailedAddress"
                      value={userInfo.detailedAddress}
                      readOnly={readOnly}
                      placeholder="상세 주소를 입력하세요"
                    />
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
                      readOnly={readOnly}
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
