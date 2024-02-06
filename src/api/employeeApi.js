const apiUrl = 'http://localhost:3000/employees'; 

export const getTable = async () => {
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status} - ${await response.text()}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching employee data:', error.message);
      throw error;
    }
  };
export const deleteEmployee = async (employeeId) => {
  try {
    const response = await fetch(`${apiUrl}/${employeeId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}  - ${await response.text()} for URL: ${response.url}`);
    }

    console.log('Employee deleted successfully');
  } catch (error) {
    console.error('Error deleting employee:', error.message);
    throw error;
  }
};

export const getEmployee = async (employeeId) => {
    try {
      const response = await fetch(`${apiUrl}/${employeeId}`);
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching employee:', error);
      throw error; 
    }
  };
  
  export const updateEmployee = async (employeeId, updatedEmployeeData) => {
    const apiUrl = `http://localhost:3000/employees/${employeeId}`; 
  
    try {
      const response = await fetch(apiUrl, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedEmployeeData),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      console.log('Employee updated successfully!');
      return response.json(); // Optional: Return the updated employee data
    } catch (error) {
      console.error('Error updating employee:', error);
      throw error; // Re-throw the error for handling in the calling function
    }
  };
