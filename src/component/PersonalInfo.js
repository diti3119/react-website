import React, { useState } from "react";

function PersonalInfo({ personalInfo, onChange, editing, onSave, onEdit }) {
  const [profilePic, setProfilePic] = useState(null);

 

  return (
    <div
      className="personal-info"
      style={{
        border: "2px solid black",
        padding: "15px",
        width: "350px",
        height: "500px",
        borderRadius: "10px",
      }}
    >
      <h2 style={{ color: "skyblue" }}>Personal Info</h2>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <div
          style={{
            width: "100px",
            height: "100px",
           padding:"20px",
            overflow: "hidden",
            border: "2px solid skyblue",
            margin: "auto",
          }}
        >
          {profilePic ? (
            <img
              src={profilePic}
              alt="Profile"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          ) : (
            <p style={{ lineHeight: "100px", color: "skyblue" }}>No Image</p>
          )}
        </div>
        
      </div>
      {editing ? (
        <div>
          <label style={{ padding: "10px" }}>First Name:</label>
          <input
            type="text"
            value={personalInfo.firstName}
            onChange={(e) => onChange("firstName", e.target.value)}
            style={{ padding: "5px" }}
          />
          <br />
          <label style={{ padding: "10px" }}>Last Name:</label>
          <input
            type="text"
            value={personalInfo.lastName}
            onChange={(e) => onChange("lastName", e.target.value)}
            style={{ padding: "5px" }}
          />
          <br />
          <label style={{ padding: "10px" }}>Email:</label>
          <input
            type="email"
            value={personalInfo.email}
            onChange={(e) => onChange("email", e.target.value)}
            style={{ padding: "5px" }}
          />
          <br />
          <label style={{ padding: "10px" }}>Contact:</label>
          <input
            type="text"
            value={personalInfo.contact}
            onChange={(e) => onChange("contact", e.target.value)}
            style={{ padding: "5px" }}
          />
          <br />
          <label style={{ padding: "10px" }}>Password:</label>
          <input
            type="text"
            value={personalInfo.password}
            onChange={(e) => onChange("password", e.target.value)}
            style={{ padding: "5px" }}
          />
          <br />
          <br />
          <button
            onClick={onSave}
            style={{ backgroundColor: "green", padding: "10px", width: "100px" }}
          >
            Save
          </button>
        </div>
      ) : (
        <div>
          <p>First Name: {personalInfo.firstName}</p>
          <p>Last Name: {personalInfo.lastName}</p>
          <p>Email: {personalInfo.email}</p>
          <p>Contact: {personalInfo.contact}</p>
          <p>Password: {personalInfo.password}</p>
          <button
            onClick={onEdit}
            style={{
              backgroundColor: "skyblue",
              padding: "10px",
              width: "100px",
            }}
          >
            Edit
          </button>
        </div>
      )}
    </div>
  );
}

export default PersonalInfo;
