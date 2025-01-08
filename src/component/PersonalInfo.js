import React, { useState } from "react";



// PersonalInfo Component
function PersonalInfo() {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    password: "",
    gender: "",
    state: "",
    city: "",
    country: "",
  });

  const [editing, setEditing] = useState(false);
  const [profilePic, setProfilePic] = useState(null);

  // Function to handle the save operation
  const handleSave = () => {
    setEditing(false);
    alert("Changes saved!");
  };

  // Function to handle the edit operation
  const handleEdit = () => {
    setEditing(true);
  };

  // Function to handle the change in form fields
  const handleChange = (field, value) => {
    setPersonalInfo((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      

      <div
        className="personal-info"
        style={{
          border: "2px solid black",
          padding: "px",
          width: "550px",
          height: "690x",
          borderRadius: "10px",
          objectFit:"contain"
        }}
      >
        <h2 style={{ color: "black" }}>Personal Info</h2>

        {/* Profile Picture Section */}
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <div
            style={{
              width: "100px",
              height: "100px",
              padding: "10px",
              overflow: "hidden",
              border: "2px solid skyblue",
              margin: "auto",
            }}
          >
            {profilePic ? (
              <img
                src={profilePic}
                alt="Profile"
                style={{ width: "100%", height: "70px", objectFit: "cover" }}
              />
            ) : (
              <p style={{  color: "skyblue"}}></p>
            )}
          </div>

          {/* Profile Picture Upload */}
          {editing && (
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  const reader = new FileReader();
                  reader.onload = () => setProfilePic(reader.result);
                  reader.readAsDataURL(file);
                }
              }}
              style={{ marginTop: "10px" }}
            />
          )}
        </div>

        {/* Form Fields */}
        {editing ? (
          <div> 
            <label style={{ padding: "10px" }}>First Name:</label>
            <input
              type="text"
              value={personalInfo.firstName}
              onChange={(e) => handleChange("firstName", e.target.value)}
              style={{ padding: "5px" }}
            />
            <br />
            <br />
            <label style={{ padding: "10px" }}>Last Name:</label>
            <input
              type="text"
              value={personalInfo.lastName }
              onChange={(e) => handleChange("lastName", e.target.value)}
              style={{ padding: "5px" }}
            />
            <br />
            <br />
            <label style={{ padding: "10px" }}>Email:</label>
            <input
              type="email"
              value={personalInfo.email}
              onChange={(e) => handleChange("email", e.target.value)}
              style={{ padding: "5px" }}
            />
            <br />
            <br />
            <label style={{ padding: "10px" }}>Contact:</label>
            <input
              type="text"
              value={personalInfo.contact }
              onChange={(e) => handleChange("contact", e.target.value)}
              style={{ padding: "5px" }}
            />
            <br />
            <br />
            <label style={{ padding: "10px" }}>Password:</label>
            <input
              type="password"
              value={personalInfo.password}
              onChange={(e) => handleChange("password", e.target.value)}
              style={{ padding: "5px" }}
            />
            <br />
            <br />
            <label style={{ padding: "10px" }}>Gender:</label>
            <select
              value={personalInfo.gender}
              onChange={(e) => handleChange("gender", e.target.value)}
              style={{ padding: "5px" }}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <br />
            <br />
            <label style={{ padding: "10px" }}>State:</label>
            <input
              type="text"
              value={personalInfo.state }
              onChange={(e) => handleChange("state", e.target.value)}
              style={{ padding: "5px" }}
            />
            <br />
            <br />
            <label style={{ padding: "10px" }}>City:</label>
            <input
              type="text"
              value={personalInfo.city}
              onChange={(e) => handleChange("city", e.target.value)}
              style={{ padding: "5px" }}
            />
            <br />
            <br />
            <label style={{ padding: "10px" }}>Country:</label>
            <input
              type="text"
              value={personalInfo.country}
              onChange={(e) => handleChange("country", e.target.value)}
              style={{ padding: "5px" }}
            />
            <br />
             <br />
             
            <button
              onClick={handleSave}
              style={{
                backgroundColor: "green",
                color: "white",
                padding: "10px",
                width: "100px",
                border: "none",
                borderRadius: "5px",
              }}
            >
              Save
            </button>
          </div>
        ) : (
          <div>
            <p>First Name: {personalInfo.firstName }</p>
            <p>Last Name: {personalInfo.lastName }</p>
            <p>Email: {personalInfo.email}</p>
            <p>Contact: {personalInfo.contact }</p>
            <p>Password: {personalInfo.password }</p>
            <p>Gender: {personalInfo.gender }</p>
            <p>State: {personalInfo.state }</p>
            <p>City: {personalInfo.city }</p>
            <p>Country: {personalInfo.country }</p>
            <button
              onClick={handleEdit}
              style={{
                backgroundColor: "skyblue",
                color: "white",
                padding: "10px",
                width: "100px",
                border: "none",
                borderRadius: "5px",
              }}
            >
              Edit
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default PersonalInfo;


