import React from "react";
// import Education from "./Education";

function Education({ education, onChange, editing, onSave, onEdit }) {
  return (
    <div className="education" style={{border:"2px solid black", padding:"40px", width:"200px", height:"250px", borderRadius:"10px" }}>
      <h2>Education</h2>
      {editing ? (
        education.map((edu, index) => (
          <div key={index}>
            <label>College Name:</label>
            <input
              type="text"
              value={edu.collegeName}
              onChange={(e) => onChange(index, "collegeName", e.target.value)}
              style={{padding:"5px"}}/>
            <br />
            <label>Course:</label>
            <input
              type="text"
              value={edu.course}
              onChange={(e) => onChange(index, "course", e.target.value)}
              style={{padding:"5px"}}/>
            <br />
            <label>Year:</label>
            <input
              type="text"
              value={edu.year}
              onChange={(e) => onChange(index, "year", e.target.value)}
              style={{padding:"5px"}}/>
            <br />
            <br />
          </div>
        ))
      ) : (
        education.map((edu, index) => (
          <div key={index}>
            <p>College Name: {edu.collegeName}</p>
            <p>Course: {edu.course}</p>
            <p>Year: {edu.year}</p>
          </div>
        ))
      )}
      <button onClick={onEdit} style={{
                backgroundColor: "skyblue",
                color: "white",
                padding: "10px",
                width: "100px",
                border: "none",
                borderRadius: "5px",}}>Edit</button>
      {editing && <button onClick={onSave}
      style={{
                backgroundColor: "green",
                color: "white",
                padding: "10px",
                width: "100px",
                border: "none",
                borderRadius: "5px",}}>Save</button>}
    </div>
  );
}

export default Education;

