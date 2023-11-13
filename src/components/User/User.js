import React from "react";
import "./User.css";
import { removeFromCart, setToLocalStorage } from "../../utilities/fakedb";

const User = (props) => {
   const { id, name, address, picture, balance } = props.user;
   console.log(props.user);

   const addToCart = (id) => {
      setToLocalStorage(id);
   };
   return (
      <div className="user-cart">
         <h2 className="user-title">{name}</h2>
         <p>
            Price: <span className="balance">{balance}</span>
         </p>
         <p>Id: {id}</p>
         <button className="btn btn-primary" onClick={() => addToCart(id)}>
            Add to Cart
         </button>
         <button className="btn btn-danger" onClick={() => removeFromCart(id)}>
            Remove
         </button>
      </div>
   );
};

export default User;
