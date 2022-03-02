import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Header from './header';
import Home from './home';
import Students from './students';
import Contacts from './contacts';


class Navigator extends Component {
    render() {
        return (
            <Router>
                 <Header />
                <Routes>
                    <Route path='/' element={<Navigate to='/home' />} />
                    <Route path='/home' element={<Home />}></Route>
                    <Route path='/Students' element={<Students />}></Route>
                    <Route path='/Contacts' element={<Contacts />}></Route>
                </Routes>
            </Router>
        )
    }
}

export default Navigator