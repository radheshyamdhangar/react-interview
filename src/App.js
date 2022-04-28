import React, { useEffect, useState } from 'react';
import { getStudents } from './api/api';
import { AllStudents } from './components/allStudents/AllStudents.js';
import { Student } from './components/student/Student';
import './App.css';

function App() {
  const [students, setStudents] = useState([]);
  const [selected, setSelected] = useState({});

  // get all the student list from api
  const getAllStudentList = () => {        
    getStudents().then((res) => {        
        setStudents(res);
      }).catch(
        // console.log(' ++++ Error getStudents')
      );
  }

  // Get the selected ID from the student list
  const getSelectedHandler = (id) => {  
    if(id){
      const profileItem = students?.find(element => element.id === id);
      setSelected(profileItem)
    }
    
  }

  useEffect(() => {
      getAllStudentList();        
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Students</h1>
      </header>
      <div className="container">
        <div className="col col-8">
         <AllStudents students={students}  getSelectedHandler={getSelectedHandler}/>
        </div>   
        <div className="col col-4"> 
           <Student preview student={selected} />
        </div>    
      </div>
    </div>
  );
}

export default App;
