import React, { useEffect } from 'react';
import SingleStudentCard from './SingleStudentCard';

const AllStudentViews = ( students ) => {
    // total students = length of data object, will get this object with useEffect that fetches from a local .json file
    const totalStudents = students.students.length
    
    // const studentsMap = students.students.map((student)=> {

    //     return <SingleStudentCard key={student.id}studentsMap={student}/>
    // })

    

    return (
        <>
            <div className='main'>
                <h2>All Students</h2>
                <p>Total Students: {totalStudents} </p>
        
            </div>
            <div>
                <ul>
                        {students.students.map((student)=> {
                        return <SingleStudentCard key={student.id} student={student} />
                        })}
                </ul>
            </div>
        </>
    );
};

export default AllStudentViews;