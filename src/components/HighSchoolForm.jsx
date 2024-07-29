import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './HighSchoolForm.css';  // CSS 파일을 임포트

const HighSchoolForm = ({ setHighSchoolForm }) => {
  const [highSchools, setHighSchools] = useState([{
    name: '',
    startDate: null,
    endDate: null,
    graduationStatus: '',
    majorField: ''
  }]);

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const newHighSchools = [...highSchools];
    newHighSchools[index][name] = value;
    setHighSchools(newHighSchools);

    // props.setHighSchoolForm를 사용하여 부모 컴포넌트의 상태 업데이트
    setHighSchoolForm(newHighSchools);
  };

  const handleDateChange = (index, date, name) => {
    const newHighSchools = [...highSchools];
    newHighSchools[index][name] = date;
    setHighSchools(newHighSchools);

    // props.setHighSchoolForm를 사용하여 부모 컴포넌트의 상태 업데이트
    setHighSchoolForm(newHighSchools);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(highSchools);
  };

  return (
    <form onSubmit={handleSubmit} className="highSchoolForm">
      <h2>학력</h2>
      {highSchools.map((highSchool, index) => (
        <table key={index}>
          <tbody>
            <tr>
              <th><label htmlFor={`name-${index}`}>고등학교명</label></th>
              <td colSpan="3">
                <input
                  id={`name-${index}`}
                  name="name"
                  type='high'
                  value={highSchool.name}
                  onChange={(e) => handleChange(index, e)}
                  placeholder="고등학교명을 입력하세요"
                  className="full-width"
                />
              </td>
            </tr>
            <tr>
              <th><label htmlFor={`majorField-${index}`}>전공 계열</label></th>
              <td>
                <input
                  id={`majorField-${index}`}
                  name="majorField"
                  value={highSchool.majorField}
                  onChange={(e) => handleChange(index, e)}
                  placeholder="전공 계열"
                  className="full-width"
                />
              </td>
              <th><label htmlFor={`startDate-${index}`}>입학일</label></th>
              <td>
                <DatePicker
                  id={`startDate-${index}`}
                  selected={highSchool.startDate}
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
                  value={highSchool.graduationStatus}
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
                  selected={highSchool.endDate}
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
      ))}
    </form>
  );
};

export default HighSchoolForm;
