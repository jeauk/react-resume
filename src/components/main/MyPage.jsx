import React, { useEffect, useState } from 'react';

const MyPage = () => {
  const [resumeData, setResumeData] = useState(null);
  const userId = 1; // 사용자의 ID를 여기에 설정

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/resume/data/${userId}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setResumeData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [userId]);

  if (!resumeData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>User Information</h1>
      <div>
        <h2>User Info</h2>
        <p>Name: {resumeData.userInfo?.name}</p>
        <p>Phone: {resumeData.userInfo?.phone}</p>
        <p>Address: {resumeData.userInfo?.address}</p>
        <p>Detailed Address: {resumeData.userInfo?.detailedAddress}</p>
        <p>Email: {resumeData.userInfo?.email}</p>
      </div>

      <div>
        <h2>High School Information</h2>
        {resumeData.highSchoolForm?.map((form, index) => (
          <div key={index}>
            <p>Name: {form.name}</p>
            <p>Start Date: {form.startDate}</p>
            <p>End Date: {form.endDate}</p>
            <p>Graduation Status: {form.graduationStatus}</p>
            <p>Major Field: {form.majorField}</p>
          </div>
        ))}
      </div>

      <div>
        <h2>Education Information</h2>
        {resumeData.educationForm?.map((form, index) => (
          <div key={index}>
            <p>School: {form.school}</p>
            <p>Degree: {form.degree}</p>
            <p>Start Date: {form.startDate}</p>
            <p>End Date: {form.endDate}</p>
            <p>Graduation Status: {form.graduationStatus}</p>
          </div>
        ))}
      </div>

      <div>
        <h2>Experience Information</h2>
        {resumeData.experienceForm?.map((form, index) => (
          <div key={index}>
            <p>Company: {form.company}</p>
            <p>Position: {form.position}</p>
            <p>Role: {form.role}</p>
            <p>Start Date: {form.startDate}</p>
            <p>End Date: {form.endDate}</p>
            <p>Employment Status: {form.employmentStatus}</p>
            <p>Description: {form.description}</p>
          </div>
        ))}
      </div>

      <div>
        <h2>Certification Information</h2>
        {resumeData.certificationForm?.map((form, index) => (
          <div key={index}>
            <p>Name: {form.name}</p>
            <p>Issuing Organization: {form.issuingOrganization}</p>
            <p>Issue Date: {form.issueDate}</p>
          </div>
        ))}
      </div>

      <div>
        <h2>Max Length Inputs</h2>
        {resumeData.maxLengthInput?.map((input, index) => (
          <div key={index}>
            <p>Title: {input.title}</p>
            <p>Text: {input.text}</p>
            <p>Max Chars: {input.maxChars}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyPage;
