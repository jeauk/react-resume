import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './HighSchoolForm.css';  // CSS 파일을 임포트

// HighSchoolForm 컴포넌트 정의
const HighSchoolForm = ({ highSchools = [] }) => {
  return (
    <form className="highSchoolForm">
      <h2>학력</h2>
      {highSchools.map((highSchool) => (
        <table key={highSchool.id}>
          <tbody>
            <tr>
              <th>고등학교명</th>
              <td colSpan="3">
                <input
                  value={highSchool.name}
                  className="full-width" // CSS 클래스 적용
                />
              </td>
            </tr>
            <tr>
              <th>전공 계열</th>
              <td>
                <input
                  value={highSchool.majorField}
                  className="full-width" // CSS 클래스 적용
                />
              </td>
              <th>입학일</th>
              <td>
                <DatePicker
                  selected={highSchool.startDate ? new Date(highSchool.startDate) : null} // 값이 없으면 null
                  dateFormat="yyyy/MM/dd" // 날짜 포맷 설정
                  className="date-picker" // CSS 클래스 적용
                  showPopperArrow={false} // 팝업 화살표 숨김
                />
              </td>
            </tr>
            <tr>
              <th>졸업여부</th>
              <td>
                <select
                  value={highSchool.graduationStatus}
                  className="full-width" // CSS 클래스 적용
                >
                  <option value="">졸업여부</option>
                  <option value="재학">재학</option>
                  <option value="휴학">휴학</option>
                  <option value="수료">수료</option>
                  <option value="중퇴">중퇴</option>
                  <option value="자퇴">자퇴</option>
                  <option value="졸업예정">졸업예정</option>
                </select>
              </td>
              <th>졸업일</th>
              <td>
                <DatePicker
                  selected={highSchool.endDate ? new Date(highSchool.endDate) : null} // 값이 없으면 null
                  dateFormat="yyyy/MM/dd" // 날짜 포맷 설정
                  className="date-picker" // CSS 클래스 적용
                  showPopperArrow={false} // 팝업 화살표 숨김
                />
              </td>
            </tr>
          </tbody>
        </table>
      ))}
    </form>
  );
};

export default HighSchoolForm;



