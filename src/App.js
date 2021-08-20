import logo from './logo.svg';
import './App.css';
import Footer from './MyComponents/Footer';
import { Header } from './MyComponents/Header';
import { EmployeeList } from './MyComponents/EmployeeList';
import { useState } from 'react';
import {Employee} from './MyComponents/Employee';
import {AddEmpForm} from './MyComponents/AddEmpForm';


function App() {

  const deleteFunc = (employee) => {
    setEmployees(employeeList.filter((e) => {
      return e != employee;
    }
    )
    )
  }

  const addEmployee = (eName,eEmail,ePassword,eAge)=>{
   
    var eId = Math.floor(100 + Math.random() * 900);
    console.log("id in app.js : ",eId) 

    const employee={
        eId:eId,
        eName:eName,
        eEmail:eEmail,
        ePassword:ePassword,
        eAge:eAge
      }

      setEmployees([...employeeList,employee])
  }

  // function addEmployee(eId,eName,eEmail,ePassword,eAge){
  // }

  const [employeeList, setEmployees] = useState([
    {
      eId: 101,
      eName: "Deven",
      eEmail:"digujain@gmail.com",
      ePassword:"Deven2519",
      eAge: 20
    },
    {
      eId: 102,
      eName: "DevenSingh",
      eEmail:"digu@gmail.com",
      ePassword:"Deven2519",
      eAge: 20
    }
    
  ])

  return (
    <>
      <Header/>
      <AddEmpForm addEmployee={addEmployee}/>
      <EmployeeList employeeList={employeeList} onDelete={deleteFunc} />
      <Footer />

    </>
  );
}

export default App;
