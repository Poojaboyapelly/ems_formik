import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import EmployeeForm from '../components/EmployeeForm';
import { getEmployee, updateEmployee } from '../api/employeeApi';


const EditEmployee = () => {
    const { employeeId } = useParams();
    const navigate = useNavigate();

    const [initialValues, setInitialValues] = React.useState(null);

    useEffect(() => {
        const fetchEmployeeData = async () => {
          try {
            const employeeData = await getEmployee(employeeId);
            setInitialValues(employeeData);
            //navigate(`/employees`, { state: { initialValues: employeeData } });
          } catch (error) {
            console.error('Error fetching employee data:', error);
            alert('Error fetching employee data. Please try again.');
          }
        };
    
        fetchEmployeeData();
      }, [employeeId, navigate]);

      if (!initialValues) {

        return <div>Loading...</div>;
    }

  
   
    return (
      <div>
        <EmployeeForm  initialValues={initialValues}/>
      </div>
    );
  };
  
  export default EditEmployee;