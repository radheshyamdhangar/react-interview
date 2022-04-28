import React, { useEffect, useState } from 'react';
import { Student } from '../student/Student';

export const AllStudents = (props) => { 

    const selectedHandler = (e) => {        
        return props.getSelectedHandler(e) ;
    }

    // List all the students 
    return (               
            <div className="all-students">
                { props.students.map((item) => {
                    return (
                        <div className='student-wrapper' key={item.id}  onClick={() => selectedHandler(item.id)}>
                            <img src={item.profilePic} alt="profile pic" />
                            <p>{item.name}</p>
                        </div>
                    )
                    
                })
                }
            </div>           
           
    )
}