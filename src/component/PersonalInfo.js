import React from "react";

function PersonalInfo({ personalInfo, onChange, editing, onSave, onEdit }) {
  return (
    <div className="personal-info">
      <form>
      <h2>Personal Info</h2>
      {editing ? (
        <div>
          <label>First Name:</label>
          <input
            type="text"
            value={personalInfo.firstName}
            onChange={(e) => onChange("firstName", e.target.value)}
          />
          <br />
          <label>Last Name:</label>
          <input
            type="text"
            value={personalInfo.lastName}
            onChange={(e) => onChange("lastName", e.target.value)}
          />
          <br />
          <label>Email:</label>
          <input
            type="email"
            value={personalInfo.email}
            onChange={(e) => onChange("email", e.target.value)}
          />
          <br />
          <label>Contact:</label>
          <input
            type="text"
            value={personalInfo.contact}
            onChange={(e) => onChange("contact", e.target.value)}
          />
          <br />
          <label>Avatar URL:</label>
          <input
            type="text"
            value={personalInfo.avatarUrl}
            onChange={(e) => onChange("avatarUrl", e.target.value)}
          />
          <br />
          <button onClick={onSave}>Save</button>
        </div>
      ) : (
        <div>
          <p>First Name: {personalInfo.firstName}</p>
          <p>Last Name: {personalInfo.lastName}</p>
          <p>Email: {personalInfo.email}</p>
          <p>Contact: {personalInfo.contact}</p>
          <p>Avatar URL: {personalInfo.avatarUrl}</p>
          <button onClick={onEdit}>Edit</button>
        </div>
      )}
      </form>
    </div>
  );
}

export default PersonalInfo;
