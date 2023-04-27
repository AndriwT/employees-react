import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import EmployeeTable from "./components/EmployeeTable";
import AddEmployeeModal from "./components/AddEmployeeModal";

function App() {
  const [employees, setEmployees] = useState([]);
  const [showModal, setShowModal] = useState(false);

  function onAddEmployeeClick() {
    setShowModal(true);
  }

  function onOverlayClose() {
    setShowModal(false);
  }

  function onAddEmployee(name, age) {
    let employee = { name, age: age };

    let newEmployees = [...employees, employee];

    setEmployees(newEmployees);
    setShowModal(false);
  }

  return (
    <React.Fragment>
      <div className="App">
        {showModal && (
          <AddEmployeeModal onClose={onOverlayClose} onSubmit={onAddEmployee} />
        )}

        <Header />
        <EmployeeTable employees={employees} />
        <button onClick={onAddEmployeeClick}>Add Employee</button>
      </div>
    </React.Fragment>
  );
}

export default App;
