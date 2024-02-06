/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { BrowserRouter as Router, Route,Link,Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import EmployeeForm from './components/EmployeeForm';
import Navbar from './components/Navbar';
import Header from './components/Header';
import EditEmployee from './components/EditEmployee';
import Signup from './components/signup';
import Login from './components/login';

const App = () => {

  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/employees" element={<EmployeeForm  initialValues={{}}/>} />
        <Route
    path="/employees/:employeeId"
    element={
        <EditEmployee />
    }
/>
<Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
