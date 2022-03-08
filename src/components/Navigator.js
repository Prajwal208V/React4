import React, {useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './header';
import Home from './home';
import Students from './students';
import Contacts from './contacts';
import AddStudent from './addStudent';
import { StudentContext } from './StudentContext';

function Navigator() {
    const {control}=useContext(StudentContext);
    const[controler]=control;
        return (
            <Router>
                    <Header />
                    <Routes>
                        {/* <Route path='/' element={<Navigate to='/home' />} /> */}
                        <Route path='/home' element={<Home />}></Route>
                        <Route path='/Students' element={<Students />} />
                        <Route path='/Contacts' element={<Contacts />}></Route>
                        <Route path='/students-AddDec' element={<AddStudent />} />
                        <Route path={`/students-AddDec/:${controler.indexer}` } element={<AddStudent/>} />
                    </Routes>
            </Router>
        )
}

export default Navigator;