import React from "react";

const User = (props) => {
   const { id, name, address, picture, balance } = props.user;
   console.log(props.user);
   return (
      <div>
         <h2>{name}</h2>
         <h5>Price: {balance}</h5>
      </div>
   );
};

export default User;
