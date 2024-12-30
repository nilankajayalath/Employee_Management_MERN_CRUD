import React,{useState,useEffect} from 'react';
import axios from "axios";
import EmployeeCard from './EmployeeCard';
import "./EmployeeList.css";

const EmployeeList = () => {
  
    const [employees, setEmployees] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:3000/api/employees").then((res) =>{
            setEmployees(res.data);
            console.log(res.data);
        })
        .catch(()=>{
            console.log("Error while getting data");
        });
    },[]);

    const employeesList = employees.length === 0? "no employees found !" : employees.map((employee,index)=>(
         <EmployeeCard key={index} employee={employee}/> ));

  return (
    <div className='show_EmployeeList'>
      <div className='container'>
        <div className="list">{employeesList}</div>
      </div>
     
    </div>
  )
}

export default EmployeeList;
