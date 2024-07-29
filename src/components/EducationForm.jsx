import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './EducationForm.css';  // CSS 파일을 임포트

// 개별 대학교 입력 필드 컴포넌트
const UniversityInput = ({ education, index, handleChange, handleDateChange }) => (
  <table key={index}>
    <tbody>
      <h2>학력</h2>
      <tr>
        <th><label htmlFor={`school-${index}`}>대학교명</label></th>
        <td colSpan="3">
          <input
            id={`school-${index}`}
            name="school"
            value={education.school}
            onChange={(e) => handleChange(index, e)}
            placeholder="대학교명을 입력하세요"
            className="full-width"
          />
        </td>
      </tr>
      <tr>
        <th><label htmlFor={`degree-${index}`}>학위</label></th>
        <td>
          <select
            id={`degree-${index}`}
            name="degree"
            value={education.degree}
            onChange={(e) => handleChange(index, e)}
            className="full-width"
          >
            <option value="">학위</option>
            <option value="2-3년제">2,3년제</option>
            <option value="4년제">4년제</option>
            <option value="석사">대학원 석사</option>
            <option value="박사">대학원 박사</option>
          </select>
        </td>
        <th><label htmlFor={`startDate-${index}`}>입학일</label></th>
        <td>
          <DatePicker
            id={`startDate-${index}`}
            selected={education.startDate}
            onChange={(date) => handleDateChange(index, date, 'startDate')}
            dateFormat="yyyy/MM/dd"
            placeholderText="입학일"
            className="date-picker"
            showPopperArrow={false}
          />
        </td>
      </tr>
      <tr>
        <th><label htmlFor={`graduationStatus-${index}`}>졸업여부</label></th>
        <td>
          <select
            id={`graduationStatus-${index}`}
            name="graduationStatus"
            value={education.graduationStatus}
            onChange={(e) => handleChange(index, e)}
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
        <th><label htmlFor={`endDate-${index}`}>졸업일</label></th>
        <td>
          <DatePicker
            id={`endDate-${index}`}
            selected={education.endDate}
            onChange={(date) => handleDateChange(index, date, 'endDate')}
            dateFormat="yyyy/MM/dd"
            placeholderText="졸업일"
            className="date-picker"
            showPopperArrow={false}
          />
        </td>
      </tr>
    </tbody>
  </table>
);

const EducationForm = (props) => {
  const [educations, setEducations] = useState([{
    school: '',
    degree: '',
    startDate: null,
    endDate: null,
    graduationStatus: ''
  }]);

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const newEducations = [...educations];
    newEducations[index][name] = value;
    setEducations(newEducations);

    // props.setEducationForm를 사용하여 부모 컴포넌트의 상태 업데이트
    props.setEducationForm(newEducations);
  };

  const handleDateChange = (index, date, name) => {
    const newEducations = [...educations];
    newEducations[index][name] = date;
    setEducations(newEducations);

    // props.setEducationForm를 사용하여 부모 컴포넌트의 상태 업데이트
    props.setEducationForm(newEducations);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(educations);
  };

  return (
    <form onSubmit={handleSubmit} className="educationForm">
      {educations.map((education, index) => (
        <UniversityInput
          key={index}
          index={index}
          education={education}
          handleChange={handleChange}
          handleDateChange={handleDateChange}
        />
      ))}
    </form>
  );
};

export default EducationForm;
