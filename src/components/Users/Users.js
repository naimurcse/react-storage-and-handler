import React, { useEffect, useState } from "react";
import User from "../User/User";
import "./Users.css";

const Users = () => {
   const [users, setUsers] = useState([]);
   useEffect(() => {
      fetch("data.json")
         .then((res) => res.json())
         .then((data) => setUsers(data));
   }, []);
   return (
      <div className="user-container">
         {users.map((user) => (
            <User key={user.id} user={user}></User>
         ))}
      </div>
   );
};

export default Users;
