import React, { Component } from 'react';

class TableComponent extends Component {
    obj=this.props.studentList;
    render() {
      return (
        <div className="rows-box">
          <div className="columns">{this.obj.name}</div>
          <div className="columns">{this.obj.age}</div>
          <div className="columns">{this.obj.course}</div>
          <div className="columns">{this.obj.Batch}</div>
          <div className="columns"><button className="change-btn"onClick={this.chnged}>Edit</button></div>
        </div>
      )
    }
  }
  
  export default TableComponent;