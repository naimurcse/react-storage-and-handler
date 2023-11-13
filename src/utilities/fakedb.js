// Set to Local Storage
const setToLocalStorage = (id) => {
   let shoppingCart = {};
   const storedCart = localStorage.getItem("shopping-cart");
   if (storedCart) {
      shoppingCart = JSON.parse(storedCart);
      if (id in shoppingCart) {
         console.log("Exist");
      }
   }

   // Add quantity
   let quantity = shoppingCart[id];
   if (quantity) {
      shoppingCart[id] = quantity + 1;
   } else {
      shoppingCart[id] = 1;
   }
   localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};

// Remove from local storage
const removeFromCart = (id) => {
   let shoppingCart = {};
   const storedCart = localStorage.getItem("shopping-cart");
   if (storedCart) {
      shoppingCart = JSON.parse(storedCart);
      if (id in shoppingCart) {
         delete shoppingCart[id];
      }
   }
   localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};
export { setToLocalStorage, removeFromCart };
