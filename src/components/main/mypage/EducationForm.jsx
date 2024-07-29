import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './EducationForm.css';  // CSS 파일을 임포트

// EducationForm 컴포넌트 정의
const EducationForm = ({ educationForm = [] }) => (
  <form className="educationForm">
    <h2>학력</h2>
    {educationForm.map((education) => (
      <table key={education.id}>
        <tbody>
          <tr>
            <th>대학교명</th>
            <td colSpan="3">
              <input
                value={education.school}
                className="full-width"
              />
            </td>
          </tr>
          <tr>
            <th>학위</th>
            <td>
              <select
                value={education.degree}
                className="full-width"
              >
                <option value="">학위</option>
                <option value="2-3년제">2,3년제</option>
                <option value="4년제">4년제</option>
                <option value="석사">대학원 석사</option>
                <option value="박사">대학원 박사</option>
              </select>
            </td>
            <th>입학일</th>
            <td>
              <DatePicker
                selected={education.startDate ? new Date(education.startDate) : null}
                dateFormat="yyyy/MM/dd"
                className="date-picker"
                showPopperArrow={false}
              />
            </td>
          </tr>
          <tr>
          <th>졸업여부</th>
            <td>
              <select
                value={education.graduationStatus}
                className="full-width"
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
                selected={education.endDate ? new Date(education.endDate) : null}
                dateFormat="yyyy/MM/dd"
                className="date-picker"
                showPopperArrow={false}
              />
            </td>

            
          </tr>
        </tbody>
      </table>
    ))}
  </form>
);

export default EducationForm;
