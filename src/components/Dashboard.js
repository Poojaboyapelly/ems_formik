// Dashboard.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getTable, deleteEmployee, getEmployee, updateEmployee } from '../api/employeeApi';
import { Formik, Form, Field } from 'formik';
import './Dashboard.css';
import './Formikstyles.css';
const Dashboard = () => {
  const [employees, setEmployees] = useState([]);
  const [editingEmployee, setEditingEmployee] = useState(null);

  useEffect(() => {
    showTable();
  }, []);

  const showTable = async () => {
    try {
      const employeesData = await getTable();
      setEmployees(employeesData);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  const navigate = useNavigate();

  const handleEdit = async (employeeId) => {
    try {
      const employeeData = await getEmployee(employeeId);
      setEditingEmployee(employeeData);
      navigate(`/employees/${employeeId}`);
    } catch (error) {
      console.error('Error fetching employee data:', error);
      alert('Error fetching employee data. Please try again.');
    }
  };

  const handleDelete = async (employeeId) => {
    try {
      await deleteEmployee(employeeId);
      await showTable();
      alert('Employee deleted successfully');
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  const handleEditSubmit = async (values, { setSubmitting }) => {
    try {
      await updateEmployee(values.employeeId, values);
      await showTable();
      setEditingEmployee(null);
      alert('Employee updated successfully');
    } catch (error) {
      console.error('Error updating employee:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <h2>Employee list</h2>
      <table id="employee-table" className="employee-table table table-striped table-hover" >
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Employee Name</th>
            <th>Department</th>
            <th>DOB</th>
            <th>Is Active</th>
            <th>Employment Type</th>
            <th>role</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.employeeId}>
              <td>{employee.employeeId}</td>
              <td>{employee.employeename}</td>
              <td>{employee.department}</td>
              <td>{employee.dob}</td>
              <td>{employee.isActive ? 'Yes' : 'No'}</td>
              <td>{employee.employmentType}</td>
              <td>{employee.role}</td>
              <td>
                <button onClick={() => handleEdit(employee.employeeId)}>
                  <i className="far fa-edit"></i> Edit
                </button>
              </td>
              <td>
                <button onClick={() => handleDelete(employee.employeeId)}>
                  <i className="far fa-trash-alt"></i> Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Formik Edit Form */}
      {editingEmployee && (
        <Formik initialValues={editingEmployee} onSubmit={handleEditSubmit}>
          <Form>
            <div>
              <label htmlFor="employeename">Employee Name:</label>
              <Field type="text" id="employeename" name="employeename" />
            </div>
            <div>
              <label htmlFor="department">Department:</label>
              <Field type="text" id="department" name="department" />
            </div>
            <div>
              <label htmlFor="dob">DOB:</label>
              <Field type="date" id="dob" name="dob" />
            </div>
            <div>
              <label htmlFor="isActive">Is Active:</label>
              <Field type="checkbox" id="isActive" name="isActive" />
            </div>
            <div>
              <label htmlFor="employmentType">Employment Type:</label>
              <Field as="select" id="employmentType" name="employmentType">
                <option value="FullTime">FullTime</option>
                <option value="PartTime">PartTime</option>
                <option value="Contract">Contract</option>
              </Field>
            </div>
            <div>
            <label htmlFor="role">role:</label>
              <Field type="role" id="role" name="role" />
            </div>
            <div>
              <button type="submit">Save Changes</button>
            </div>
          </Form>
        </Formik>
      )}
    </div>
  );
};

export default Dashboard;
