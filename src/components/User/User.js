import React from "react";
import "./User.css";

const User = (props) => {
   const { id, name, address, picture, balance } = props.user;
   console.log(props.user);
   return (
      <div className="user-cart">
         <h2 className="user-title">{name}</h2>
         <p>
            Price: <span className="balance">{balance}</span>
         </p>
         <p>Id: {id}</p>
         <button className="btn btn-primary">Add to Cart</button>
      </div>
   );
};

export default User;
