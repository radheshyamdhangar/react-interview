import React, { useState, useEffect } from 'react';
import { getCalculatedMark } from '../../api/api';

export const Student = ({ student, onSelect, preview }) => {
    const [updatedMark, setUpdatedMark] = useState(null);     
    
    // Get the updated mark from API
    const getStudentMark = () => {
         getCalculatedMark(student).then((mark) => {           
            setUpdatedMark(mark);            
        }).catch(
           //  console.log('Not found error ')
        )
    }

    useEffect(() => {
        getStudentMark(); 
        console.log(updatedMark)
    },)

    if (!student?.id) {
        return null;
    }

    const previewClassNames = preview ? 'preview': '';

    return (
        <div className={`student-wrapper ${previewClassNames}`}>
            {
                // Display the details of the profile                
                preview && (
                    <>                    
                        <img src={student.profilePic} alt="profile pic" />
                        <p>{student.name}</p>
                        <p>Total Mark: {
                        updatedMark || student.totalMark
                        }</p> 
                    </>
                )
            }
           
        </div>
    );
}