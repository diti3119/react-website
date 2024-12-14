import React from "react";

function Education({ education, onChange, editing, onSave, onEdit }) {
  return (
    <div className="education">
      <h2>Education</h2>
      {editing ? (
        education.map((edu, index) => (
          <div key={index}>
            <label>College Name:</label>
            <input
              type="text"
              value={edu.collegeName}
              onChange={(e) => onChange(index, "collegeName", e.target.value)}
            />
            <br />
            <label>Course:</label>
            <input
              type="text"
              value={edu.course}
              onChange={(e) => onChange(index, "course", e.target.value)}
            />
            <br />
            <label>Year:</label>
            <input
              type="text"
              value={edu.year}
              onChange={(e) => onChange(index, "year", e.target.value)}
            />
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
      <button onClick={onEdit}>Edit</button>
      {editing && <button onClick={onSave}>Save</button>}
    </div>
  );
}

export default Education;
