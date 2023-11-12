import React from "react";
import User from "../User/User";

const Users = () => {
   const users = [
      {
         id: "6550cc8c61a26e4691eccc50",
         index: 0,
         balance: "$2,356.02",
         picture: "http://placehold.it/32x32",
         name: "Lakisha Huber",
         address: "298 Strickland Avenue, Grazierville, Virginia, 9600",
      },
      {
         id: "6550cc8cbb74fb3c2644aa6e",
         index: 1,
         balance: "$1,803.99",
         picture: "http://placehold.it/32x32",
         name: "Dianna Curtis",
         address: "348 Madison Place, Salix, Oregon, 478",
      },
      {
         id: "6550cc8cc83da64658a92097",
         index: 2,
         balance: "$1,053.05",
         picture: "http://placehold.it/32x32",
         name: "Henrietta Bond",
         address: "954 Kimball Street, Crisman, Puerto Rico, 9943",
      },
      {
         id: "6550cc8ce9f13491c0e74f5a",
         index: 3,
         balance: "$3,842.95",
         picture: "http://placehold.it/32x32",
         name: "Levy Sargent",
         address: "140 Cyrus Avenue, Marne, Federated States Of Micronesia, 3314",
      },
      {
         id: "6550cc8c9bc37c9639b65399",
         index: 4,
         balance: "$2,684.02",
         picture: "http://placehold.it/32x32",
         name: "Sherrie Pollard",
         address: "116 Wilson Avenue, Vandiver, Alaska, 1703",
      },
      {
         id: "6550cc8c0ae4277ca98dac0d",
         index: 5,
         balance: "$1,160.38",
         picture: "http://placehold.it/32x32",
         name: "Ingrid Soto",
         address: "713 Delevan Street, Cannondale, Minnesota, 9699",
      },
   ];

   return (
      <div>
         {users.map((user) => (
            <User key={user.id} user={user}></User>
         ))}
      </div>
   );
};

export default Users;
