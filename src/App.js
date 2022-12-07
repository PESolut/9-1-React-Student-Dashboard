import { useEffect, useState } from "react";
import Nav from "./common/Nav";
import AllStudentViews from "./studentComp/AllStudentViews";
import SingleStudentCard from "./studentComp/SingleStudentCard";
import SingleStudentDetails from "./studentComp/SingleStudentDetails";

import data from "./data/data.json"

function App() {
  const [ allStudentsArrObject, setAllStudentsArrObject ] = useState([])
  const [ allStudentsBoolean, setAllStudentsBoolean ] = useState([false])


  // On page load, fetch the students data from local JSON file
  useEffect(() => {
    setAllStudentsArrObject(data)
    setAllStudentsBoolean(true)
  },[allStudentsBoolean]) // an empty array prevents our useEffect from running on every render


  return (
    <>
      <Nav/>
        <AllStudentViews students={allStudentsArrObject} />
          <SingleStudentCard/>
          <SingleStudentDetails/>
    </>
  );
}

export default App;
