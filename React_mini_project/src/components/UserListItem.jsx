import React from "react";
import classes from "./UserList.module.css";
import Card from "./UI/Card";

const UserListItem = (props) => {
  return (
    <Card className={classes.users}>
      <div>
        {props.users.map((person, index) => (
          <div key={index}>
            <p>Name: {person.name}</p>
            <p>Age: {person.age}</p>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default UserListItem;
