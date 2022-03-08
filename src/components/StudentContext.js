import React, { useState, createContext } from 'react';

export const StudentContext = createContext();


export const StudentProvider = (props) => {
    const [students, setStudents] = useState([  //state 1
        { id: 0, name: 'Antman', age: 23, course: 'MERN', batch: 'October',},
        { id: 1, name: 'Batman', age: 24, course: 'MEAN', batch: 'October', },
        { id: 2, name: 'Spiderman', age: 25, course: 'MERN', batch: 'October', },
        { id: 3, name: 'Iron Man', age: 26, course: 'Zenith', batch: 'October', },
        { id: 4, name: 'Marvelman', age: 27, course: 'MERN', batch: 'October', },
        { id: 5, name: 'Superman', age: 28, course: 'MERN', batch: 'October', },
        { id: 6, name: 'Aquaman', age: 29, course: 'MEAN', batch: 'October', },
        { id: 7, name: 'Batwoman', age: 30, course: 'Zenith', batch: 'October', },
        { id: 8, name: 'Catwoman', age: 31, course: 'Zenith', batch: 'October', },]);
        
    const [controler, setControler]=useState({indexer:0,controler:true});  //state 2

    return (
        <StudentContext.Provider value={{student:[students, setStudents],control:[controler, setControler]}} >
            {props.children}
        </StudentContext.Provider>
    )
}