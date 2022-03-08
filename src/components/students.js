import React, { useContext } from 'react';
import {  useNavigate } from 'react-router-dom';
import { StudentContext } from './StudentContext';
import './student.css';

function Students() {
  const navigate = useNavigate();
  const { student, control } = useContext(StudentContext);
  const [students] = student;
  const [setControler] = control;
  console.log(students);

  const clickEvent = (ind) => {
    setControler({ indexer: ind, controler: false });
    navigate(`/students-AddDec/${ind}`)
  }
  const AddClickEvent=()=>{
    setControler({ indexer:0, controler: true });
    navigate('/students-AddDec');
  }
   
  return (
    <div className="list-continer">
      <div className="title-box">
        <h1 className="title">Students Details</h1>
        <div>
          <button  onClick={AddClickEvent} className="addBtn">ADD STUDENT <i className="fa fa-plus-circle plusIcon" /></button>
        </div>
      </div>
      <div className="table-continer">
        <div className="rows-box">
          <div className="columns table-header">Name</div>
          <div className="columns table-header">Age</div>
          <div className="columns table-header">Course</div>
          <div className="columns table-header">Batch</div>
          <div className="columns table-header">Change</div>
        </div>
        <>{
          students.map((student, index) => {
            return (
              <div key={index.toString()} className="rows-box">
                <div className="columns">{student.name}</div>
                <div className="columns">{student.age}</div>
                <div className="columns">{student.course}</div>
                <div className="columns">{student.batch}</div>
                <div className="columns">
                  <button  className="change-btn" onClick={(() => clickEvent(index))}>Edit <span><i className="fa fas fa-edit"></i></span></button>
                </div>
              </div>
            )
          })
        }</>
      </div>
    </div>
  )
}

export default Students;