import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const HighSchoolForm = () => {
  const [highSchools, setHighSchools] = useState([{
    name: '',
    startDate: null,
    endDate: null,
    graduationStatus: '',
    majorField: ''
  }]);

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const newHighSchools = highSchools.slice();
    newHighSchools[index][name] = value;
    setHighSchools(newHighSchools);
  };

  const handleDateChange = (index, date, name) => {
    const newHighSchools = highSchools.slice();
    newHighSchools[index][name] = date;
    setHighSchools(newHighSchools);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(highSchools);
  };

  const showMajorFieldInput = (index) => {
    const newHighSchools = highSchools.slice();
    newHighSchools[index].showMajorField = true;
    setHighSchools(newHighSchools);
  };

  return (
    <form onSubmit={handleSubmit}>
      {highSchools.map((highSchool, index) => (
        <div key={index}>
          <input
            name="name"
            value={highSchool.name}
            onChange={(e) => handleChange(index, e)}
            placeholder="고등학교명"
          />

          <DatePicker
            selected={highSchool.startDate}
            onChange={(date) => handleDateChange(index, date, 'startDate')}
            dateFormat="yyyy/MM/dd"
            placeholderText="입학일"
            showPopperArrow={false}
          />

          <DatePicker
            selected={highSchool.endDate}
            onChange={(date) => handleDateChange(index, date, 'endDate')}
            dateFormat="yyyy/MM/dd"
            placeholderText="졸업일"
            showPopperArrow={false}
          />

          <select
            name="graduationStatus"
            value={highSchool.graduationStatus}
            onChange={(e) => handleChange(index, e)}
          >
            <option value="">졸업여부</option>
            <option value="재학">재학</option>
            <option value="휴학">휴학</option>
            <option value="수료">수료</option>
            <option value="중퇴">중퇴</option>
            <option value="자퇴">자퇴</option>
            <option value="졸업예정">졸업예정</option>
          </select>

          {highSchool.showMajorField ? (
            <input
              name="majorField"
              value={highSchool.majorField}
              onChange={(e) => handleChange(index, e)}
              placeholder="전공 계열"
            />
          ) : (
            <button type="button" onClick={() => showMajorFieldInput(index)}>+전공계열</button>
          )}
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default HighSchoolForm;