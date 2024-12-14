import React, { useState, useEffect } from "react";
import PersonalInfo from "./PersonalInfo";
import Education from "./Education";

function ProfilePage() {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    avatarUrl: "",
  });

  const [education, setEducation] = useState([
    {
      collegeName: "",
      course: "",
      year: "",
    },
  ]);

  const [editingPersonalInfo, setEditingPersonalInfo] = useState(false);
  const [editingEducation, setEditingEducation] = useState(false);

  useEffect(() => {
    const savedPersonalInfo = parse(localStorage.getItem("personal_info"));
    const savedEducation = parse(localStorage.getItem("education"));

    if (savedPersonalInfo) setPersonalInfo(savedPersonalInfo);
    if (savedEducation) setEducation(savedEducation);
  }, []);

  const handlePersonalInfoChange = (field, value) => {
    setPersonalInfo({ ...personalInfo, [field]: value });
  };

  const handleEducationChange = (index, field, value) => {
    const newEducation = [...education];
    newEducation[index][field] = value;
    setEducation(newEducation);
  };

  const savePersonalInfo = () => {
    localStorage.setItem("personal_info", JSON.stringify(personalInfo));
    setEditingPersonalInfo(false);
  };

  const saveEducation = () => {
    localStorage.setItem("education", JSON.stringify(education));
    setEditingEducation(false);
  };

  return (
    <div className="profile-page">
      <PersonalInfo
        personalInfo={personalInfo}
        onChange={handlePersonalInfoChange}
        editing={editingPersonalInfo}
        onSave={savePersonalInfo}
        onEdit={() => setEditingPersonalInfo(true)}
      />
      <Education
        education={education}
        onChange={handleEducationChange}
        editing={editingEducation}
        onSave={saveEducation}
        onEdit={() => setEditingEducation(true)}
      />
    </div>
  );
}

export default ProfilePage;
