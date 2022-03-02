import React, { Component } from 'react';
import TableComponent from './Table';
import './student.css';

class Students extends Component {
  header = {
    name: 'Name', age: 'Age', course: 'Course', Batch: 'Batch', Change: 'Change',
  }
  studentArr = [{ name: '	Liam', age: 24, course: 'MERN', Batch: 'October', Change: "link" },
  { name: 'James', age: 23, course: 'MEEN', Batch: 'October', Change: "link" },
  { name: 'Noah', age: 25, course: 'MERN', Batch: 'October', Change: "link" },
  { name: 'William', age: 23, course: 'MEAN', Batch: 'October', Change: "link" },
  { name: 'Lucas', age: 24, course: 'MERN', Batch: 'October', Change: "link" },];
  render() {
    return (
      <div>
        <div className="title-box">
          <h1 className="title">Students Details</h1>
          <button className="addBtn">ADD STUDENT</button>
        </div>
        <div className="table-continer">
          <TableComponent studentList={this.header} />
          <TableComponent studentList={this.studentArr[0]} />
          <TableComponent studentList={this.studentArr[1]} />
          <TableComponent studentList={this.studentArr[2]} />
          <TableComponent studentList={this.studentArr[3]} />
          <TableComponent studentList={this.studentArr[4]} />
        </div>
      </div>
    )
  }
}

export default Students;