import React, { useState, useContext } from 'react';
import {  useNavigate } from 'react-router-dom';
import { StudentContext } from './StudentContext';
import './addStudent.css';

const AddStudent = () => {
    const navigate = useNavigate();
    const {student, control } = useContext(StudentContext);
    const [students, setStudents] = student;
    const [controler,setControler] = control;
    const ind = controler.indexer;

    const [newStudent, setNewStudent] = useState({ id: students.length,name: '', age: '', course: '', batch: ''});
    const [editStudent, setEditStudent] = useState({ name: students[ind].name, age: students[ind].age, course: students[ind].course, batch: students[ind].batch }); // error
    
    const submitHandler = () => {
        for(const [key, value] of Object.entries(newStudent)){
            if(!value)
            newStudent[key]='N/A';
        }
        setStudents([...students, newStudent]);
        setControler({ ...controler,controler: true });
        navigate('/students');
    }


    const deleteHandler = () => {
        students.splice(ind, 1);
        setStudents(students);
        console.log(students);
        setControler({ ...controler,controler: true });
        navigate('/students');
    }
    const updatetHandler = () => {
        students[ind].name=editStudent.name;
        students[ind].age=editStudent.age;
        students[ind].course=editStudent.course;
        students[ind].batch=editStudent.batch;
        setStudents(students);
        setControler({ ...controler,controler: true });
        navigate('/students');
    }
    const backBtnHandler=()=>{
        setControler({ ...controler,controler: true });
        navigate('/students');
    }
    
    if (controler.controler) {
        return (
            <div className="continer">
                <h1>NEW STUDENT</h1>
                <form>
                    <div className="new_control">
                        <input type="text" id="name" placeholder="Name" value={newStudent.name} onChange={(event) => setNewStudent({ ...newStudent, name: event.target.value })} ></input>
                    </div>
                    <div className="new_control">
                        <input type="number" id="age" placeholder="Age" value={newStudent.age} onChange={(event) => setNewStudent({ ...newStudent, age: event.target.value })} ></input>
                    </div>
                    <div className="new_control">
                        <input type="text" id="course" placeholder="Course" value={newStudent.course} onChange={(event) => setNewStudent({ ...newStudent, course: event.target.value })} ></input>
                    </div>
                    <div className="new_control">
                        <input type="text" id="bacth" placeholder="Batch" value={newStudent.batch} onChange={(event) => setNewStudent({ ...newStudent, batch: event.target.value })} ></input>
                    </div>
                </form>
                <div className="btn_box">
                    <button  onClick={backBtnHandler}className="btn back_btn">Go Back <i className='fa fa-reply reply-button' /></button>
                    <button className="btn submit_btn" onClick={submitHandler}>Submit <i className="fa fa-arrow-circle-right fa-lg" /></button>
                </div>
                <div className="box"></div>
            </div>
        )
    }
    else {
        return (
            <div className="continer">
                <h1>NEW STUDENT</h1>
                <form>
                    <div className="new_control">
                        <input type="text" id="name" placeholder="Name" value={editStudent.name} onChange={(event) => setEditStudent({ ...editStudent, name: event.target.value })} required={'required'}></input>
                    </div>
                    <div className="new_control">
                        <input type="number" id="age" placeholder="Age" value={editStudent.age} onChange={(event) => setEditStudent({ ...editStudent, age: event.target.value })} required={'required'}></input>
                    </div>
                    <div className="new_control">
                        <input type="text" id="course" placeholder="Course" value={editStudent.course} onChange={(event) => setEditStudent({ ...editStudent, course: event.target.value })}></input>
                    </div>
                    <div className="new_control">
                        <input type="text" id="bacth" placeholder="Batch" value={editStudent.batch} onChange={(event) => setEditStudent({ ...editStudent, batch: event.target.value })} ></input>
                    </div>
                </form>
                <div className="btn_box">
                    <button  onClick={backBtnHandler} className="btn back_btn">Go Back <i className='fa fa-reply reply-button' /></button>
                    <button className="btn update_btn" onClick={updatetHandler}>Update <i className="fa fa-solid fa-repeat"></i></button>
                    <button className="btn edit_btn" onClick={deleteHandler}>Delete <i className="fa fa-solid fa-trash" /></button>
                </div>
                <div className="box"></div>
            </div>
        )

    }
}
export default AddStudent;