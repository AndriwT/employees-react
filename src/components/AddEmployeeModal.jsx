import React, { useState } from "react";

const styles = {
  overlay: {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "rgba(0, 0, 0, 0.8)",
    height: "100vh",
    width: "100vw",
  },
  content: {
    background: "white",
    padding: 14,
    border: "0px solid white",
    borderRadius: 8,
    display: "flex",
    flexDirection: "column",
  },
  input: {
    marginTop: 8,
    marginBottom: 8,
  },
};

export default function AddEmployeeModal({ onClose, onSubmit }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  function onOverlayClick() {
    onClose();
  }

  function onContentClick(e) {
    e.stopPropagation();
  }

  function onNameChange(event) {
    setName(event.target.value);
  }
  function onAgeChange(event) {
    setAge(event.target.value);
  }

  function onAddClick() {
    onSubmit(name, age);
  }

  return (
    <div onClick={onOverlayClick} style={styles.overlay}>
      <div onClick={onContentClick} style={styles.content}>
        <h1>Add Employee</h1>
        <input
          onChange={onNameChange}
          value={name}
          style={styles.input}
          placeholder="name"
        />
        <input
          onChange={onAgeChange}
          value={age}
          style={styles.input}
          placeholder="age"
        />
        <button onClick={onAddClick}>Add</button>
      </div>
    </div>
  );
}
