import React, { useState } from "react";

const UserProfile = ({ name, age }) => {
  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
};

const App = () => {
  const [user, setUser] = useState({ name: "John Doe", age: 25 });

  const updateUser = () => {
    setUser({ name: "Jane Doe", age: 30 });
  };

  return (
    <div>
      <UserProfile name={user.name} age={user.age} />
      <button onClick={updateUser}>Update User</button>
      
    </div>
  );
};

export default App; 