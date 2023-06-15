import React, { useState } from "react";
import UserListItem from "../components/UserListItem";
import UserInput from "../components/UserInput";

function UserPage() {
  const [userList, setUserList] = useState([]);

  const handleAddUser = (UserName, UserAge) => {
    setUserList((currentItems) => {
      return [...currentItems, { name: UserName, age: UserAge }];
    });
  };

  return (
    <>
      <UserInput onAddUser={handleAddUser} />
      <UserListItem users={userList} />
    </>
  );
}

export default UserPage;
