import React, { useState, useEffect } from 'react';
import MaxLengthInput from "./mypage/MaxLengthInput";
import UserInfo from "./mypage/UserInfo";
import HighSchoolForm from "./mypage/HighSchoolForm";
import EducationForm from "./mypage/EducationForm";
import ExperienceForm from "./mypage/ExperienceForm";
import CertificationForm from "./mypage/CertificationForm";

const MyPage = () => {
  const [userInfo, setUserInfo] = useState({});
  const [highSchoolForm, setHighSchoolForm] = useState([]);
  const [educationForm, setEducationForm] = useState([]);
  const [experienceForm, setExperienceForm] = useState([]);
  const [certificationForm, setCertificationForm] = useState([]);
  const [maxLengthInput, setMaxLengthInput] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const id = sessionStorage.getItem('id');
      try {
        const response = await fetch(`http://localhost:8080/resume/data/${id}`);
        const data = await response.json();
        setUserInfo(data.userInfo);
        setHighSchoolForm(data.highSchoolForm);
        setEducationForm(data.educationForm);
        setExperienceForm(data.experienceForm);
        setCertificationForm(data.certificationForm);
        setMaxLengthInput(data.maxLengthInput);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="ResumeMain">
      <UserInfo userInfo={userInfo} setUserInfo={setUserInfo} readOnly={true} />
      <HighSchoolForm highSchools={highSchoolForm} setHighSchoolForm={setHighSchoolForm} />
      <EducationForm educationForm={educationForm} setEducationForm={setEducationForm} />
      <ExperienceForm experienceForm={experienceForm} setExperienceForm={setExperienceForm} />
      <CertificationForm certificationForm={certificationForm} setCertificationForm={setCertificationForm} />
      <MaxLengthInput maxLengthInput={maxLengthInput} setMaxLengthInput={setMaxLengthInput} />
    </div>

  );
};

export default MyPage;
