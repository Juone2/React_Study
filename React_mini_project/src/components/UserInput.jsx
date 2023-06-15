import React, { useState } from "react";
import classes from "./User.module.css";
import Card from "./UI/Card";
import Modal from "./UI/Modal";

function UserInput({ onAddUser }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (name.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Ivalid age",
        message: "Please enter a valid age > 0 ",
      });
      return;
    }
    if (+age < 1) {
      setError({
        title: "Ivalid input",
        message: "Please enter a valid name and age",
      });
      return;
    }
    onAddUser(name, age);
    setName("");
    setAge("");
  };

  const handleError = () => {
    setError(null); // falsy
  };

  return (
    <>
      {error && (
        <Modal
          title={error.title}
          message={error.message}
          onConfirm={handleError}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={onSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={name}
            placeholder="이름을 입력 해 주세요"
            onChange={handleNameChange}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            id="age"
            value={age}
            placeholder="나이를 입력 해 주세요"
            onChange={handleAgeChange}
          />
          <div>
            <button type="submit">Add users</button>
          </div>
        </form>
      </Card>
    </>
  );
}

export default UserInput;
