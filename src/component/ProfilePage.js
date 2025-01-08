// import React, { useState, useEffect } from "react";

// import PersonalInfo from "./PersonalInfo";
// import Education from "./Education";


// function ProfilePage() {
//   const [personalInfo, setPersonalInfo] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     contact: "",
//     avatarUrl: "",
//   });

//   const [education, setEducation] = useState([
//     {
//       collegeName: "",
//       course: "",
//       year: "",
//     },
//   ]);

//   const [editingPersonalInfo, setEditingPersonalInfo] = useState(false);
//   const [editingEducation, setEditingEducation] = useState(false);

//   useEffect(() => {
//     const savedPersonalInfo = JSON.parse(localStorage.getItem("personal_info"));
//     const savedEducation = JSON.parse(localStorage.getItem("education"));

//     if (savedPersonalInfo) setPersonalInfo(savedPersonalInfo);
//     if (savedEducation) setEducation(savedEducation);
//   }, []);

//   const handlePersonalInfoChange = (field, value) => {
//     setPersonalInfo({ ...personalInfo, [field]: value });
//   };

//   const handleEducationChange = (index, field, value) => {
//     const newEducation = [...education];
//     newEducation[index][field] = value;
//     setEducation(newEducation);
//   };

//   const savePersonalInfo = () => {
//     localStorage.setItem("personal_info", JSON.stringify(personalInfo));
//     setEditingPersonalInfo(false);
//   };

//   const saveEducation = () => {
//     localStorage.setItem("education", JSON.stringify(education));
//     setEditingEducation(false);
//   };
  

//   return (
//     <div className="profile-page">
//       <PersonalInfo
//         personalInfo={personalInfo}
//         onChange={handlePersonalInfoChange}
//         editing={editingPersonalInfo}
//         onSave={savePersonalInfo}
//         onEdit={() => setEditingPersonalInfo(true)}
//       />
//       <Education
//         education={education}
//         onChange={handleEducationChange}
//         editing={editingEducation}
//         onSave={saveEducation}
//         onEdit={() => setEditingEducation(true)}
//       />
//     </div>
//   );
// }

// export default ProfilePage;


// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Modal from 'react-bootstrap/Modal';
// import PersonalInfo from './PersonalInfo';
// import Education from './Education';

// const users = JSON.parse(localStorage.getItem('users'));

// function profilePage() {
//   const [show, setShow] = useState(false);
//   const [userData, setUserData] = useState({
//     fristname:"",
//     lastname:"",
//     email: "",

//   });

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   const handleSubmit = (e) => {
//     console.log(userData)
//     const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
//     const payload = [...existingUsers, userData];
//     localStorage.setItem("users", JSON.stringify(payload));
//     setUserData({name: '', email: '', });
//     handleClose()
//   }

//   return (
//       <>
//         <Button variant="primary" onClick={handleShow}>
//           Launch demo modal
//         </Button>

//         <Modal show={show} onHide={handleClose}>
//           <Modal.Header closeButton>
//             <Modal.Title>Modal heading</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <Form>


//               <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//                 <Form.Label> frist Name</Form.Label>
//                 <Form.Control
//                     type="text"
//                     value={userData.fristname}
//                     onChange={(e) => setUserData({...userData, fristname: e.target.value}) }
//                     autoFocus
//                 />
//               </Form.Group>


//               <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//                 <Form.Label>last name</Form.Label>
//                 <Form.Control
//                     type=""
//                     value={userData.lastname}
//                     onChange={(e) => setUserData({...userData, lastname: e.target.value}) }
//                     autoFocus
//                 />
//               </Form.Group>


              
//               <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//                 <Form.Label>Email address</Form.Label>
//                 <Form.Control
//                     type="email"
//                     value={userData.email}
//                     onChange={(e) => setUserData({...userData, email: e.target.value}) }
//                     autoFocus
//                 />
//               </Form.Group>



//             </Form>
//           </Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={handleClose}>
//               Close
//             </Button>
//             <Button variant="primary" onClick={handleSubmit}>
//               Save Changes
//             </Button>
//           </Modal.Footer>
//         </Modal>

//         <div>
//           <ul>
//             {users.map((user) => {
//               return (
//                   <li>{user.fristname} - {user.lastname} -{user.email}</li>
//               )
//             })}
//           </ul>
//         </div>
//       </>
//   );
// }

// export default profilePage;

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import PersonalInfo from './PersonalInfo';
import Education from './Education';

const users = JSON.parse(localStorage.getItem('users')) || [];

function ProfilePage() {
  const [show, setShow] = useState(false);
  const [userData, setUserData] = useState({
    fristname: "",
    lastname: "",
    email: "",
    password:"",
    contect:"",
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = () => {
    console.log(userData);
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const payload = [...existingUsers, userData];
    localStorage.setItem("users", JSON.stringify(payload));
    setUserData({ fristname: "", lastname: "", email: "" });
    handleClose();
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                value={userData.fristname}
                onChange={(e) =>
                  setUserData({ ...userData, fristname: e.target.value })
                }
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                value={userData.lastname}
                onChange={(e) =>
                  setUserData({ ...userData, lastname: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={userData.email}
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>password</Form.Label>
              <Form.Control
                type="email"
                value={userData.password}
                onChange={(e) =>
                  setUserData({ ...userData, password: e.target.value })
                }
              />
            </Form.Group>


            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>contect</Form.Label>
              <Form.Control
                type="email"
                value={userData.contect}
                onChange={(e) =>
                  setUserData({ ...userData, contect: e.target.value })
                }
              />
            </Form.Group>







          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <div>
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              {user.fristname} - {user.lastname} - {user.email} -{user.password} -{user.contect}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ProfilePage;
