import { useState } from "react";
import MaxLengthInput from "./MaxLengthInput";
import UserInfo from "./UserInfo";
import HighSchoolForm from "./HighSchoolForm";
import EducationForm from "./EducationForm";
import ExperienceForm from "./ExperienceForm";
import CertificationForm from "./CertificationForm";

const ResumeMain = () => {
  const [userInfo, setUserInfo] = useState({
    name: '', 
    phone: '', 
    address: '', 
    detailedAddress: '', 
    email: ''
  });

  const [highSchoolForm, setHighSchoolForm] = useState([{
    name: '',
    startDate: null,
    endDate: null,
    graduationStatus: '',
    majorField: ''
  }]);

  const [educationForm, setEducationForm] = useState([{
    school: '',
    degree: '',
    startDate: null,
    endDate: null,
    graduationStatus: ''
  }]);

  const [experienceForm, setExperienceForm] = useState([{
    company: '',
    position: '',
    role: '',
    startDate: null,
    endDate: null,
    employmentStatus: '',
    description: ''
  }]);

  const [certificationForm, setCertificationForm] = useState([{
    name: '',
    issuingOrganization: '',
    issueDate: ''
  }]);

  const [maxLengthInput, setMaxLengthInput] = useState([{
    title: '',
    text: '',
    maxChars: 1000
  }]);

  const handleSubmit = async () => {
    const id = sessionStorage.getItem('id');
    const data = {
      id,
      userInfo,
      highSchoolForm,
      educationForm,
      experienceForm,
      certificationForm,
      maxLengthInput
    };
  
    console.log("Sending data:", JSON.stringify(data, null, 2)); // 데이터 콘솔에 출력
  
    try {
      const response = await fetch('http://localhost:8080/resume/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  return (
    <div className="ResumeMain">
      <UserInfo setUserInfo={setUserInfo} />
      <HighSchoolForm setHighSchoolForm={setHighSchoolForm} />
      <EducationForm setEducationForm={setEducationForm} />
      <ExperienceForm setExperienceForm={setExperienceForm} />
      <CertificationForm setCertificationForm={setCertificationForm} />
      <MaxLengthInput setMaxLengthInput={setMaxLengthInput} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default ResumeMain;
