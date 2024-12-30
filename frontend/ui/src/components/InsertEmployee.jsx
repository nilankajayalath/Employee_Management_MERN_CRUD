import React, { useState } from "react";
import "./InsertEmployee.css";
import axios from "axios";

const InsertEmployee = () => {
  // Manage state
  const [employeeData, setEmployeedata] = useState({
    employeeID: "",
    name: "",
    address: "",
    nic: "",
  });

  // Manage form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeedata({
      ...employeeData,
      [name]: value,
    });
    console.log(employeeData);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    axios
      .post("http://localhost:3000/api/employees", employeeData)
      .then(() => {
        alert("Employee data added successfully!");
        setEmployeedata({
          employeeID: "",
          name: "",
          address: "",
          nic: "",
        });
      })
      .catch((error) => {
        alert("Error adding employee data.");
        console.error("Error:", error);
      });
  };

  return (
    <div className="form-1">
      <h2>Employee Information Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="employee_id">Employee ID:</label>
          <input
            type="text"
            id="employee_id"
            name="employeeID"
            value={employeeData.employeeID}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={employeeData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={employeeData.address}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="nic">NIC:</label>
          <input
            type="text"
            id="nic"
            name="nic"
            value={employeeData.nic}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default InsertEmployee;
