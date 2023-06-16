import React, { useState, useRef } from "react";
import classes from "./User.module.css";
import Card from "./UI/Card";
import Modal from "./UI/Modal";

/* useRef로 값을 읽어오는 걸 바꿔서 코드 양을 줄일 수 있음 */
/* 값만 읽고 싶고 아무 것도 바꿀 계획이 없다면 state는 필요 없음 -> ref */

function UserInput({ onAddUser }) {
  const [error, setError] = useState();
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();

    console.log(nameInputRef); // current always object ( prop )

    const enteredUserName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;

    if (
      enteredUserName.trim().length === 0 ||
      enteredUserAge.trim().length === 0
    ) {
      setError({
        title: "Ivalid age",
        message: "Please enter a valid age > 0 ",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: "Ivalid input",
        message: "Please enter a valid name and age",
      });
      return;
    }
    onAddUser(enteredUserName, enteredUserAge);
    nameInputRef.current.value = ""; // ref
    ageInputRef.current.value = ""; // 초기화
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
            placeholder="이름을 입력 해 주세요"
            ref={nameInputRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            id="age"
            placeholder="나이를 입력 해 주세요"
            ref={ageInputRef}
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
