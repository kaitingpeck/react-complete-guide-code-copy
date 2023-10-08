import React, { useState } from "react";
import AddUser from "./AddUser";
import UsersList from "./UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const onAddUser = (user) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, user];
    });
  };

  return (
    <div>
      <AddUser onAddUser={onAddUser} />
      <UsersList data={usersList} />
    </div>
  );
}

export default App;
