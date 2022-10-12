import React from "react";
import "./App.css";
import Card from "./components/Card.js";
import items from "./items";

function App() {
  const [itemArray, setItemArray] = React.useState(items);
  const [shoppingCart, setShoppingCart] = React.useState({
    items: [],
    totalCost: 0,
  });

  function addToCart(e) {
    const { id } = e.target;
    let selectedItem = {};

    //detects id of div and matches it to item for sale
    itemArray.map((item) => {
      if (id === item.id) {
        selectedItem = item;
        // setItemArray((prevArray) => {
        //   return { ...prevArray, quantity: prevArray.quantity + 1 };
        // });
        setShoppingCart((prevCart) => {
          return {
            ...prevCart,
            items: [...prevCart.items, item],
            totalCost: prevCart.totalCost + item.cost,
          };
        });
      }
    });
    console.log(selectedItem);
  }

  //HALF functionality
  //removes all from cart
  //possibly a for loop is better so I can break once it finds ONE instance

  function removeFromCart(e) {
    const { id } = e.target;

    //Find the item and filter it out for removal
    //BUG: Removes ALL of the items of that type
    //BUG: Total cost doesn't find total
    //newCost returns an object
    //BUG: total cost only works if removing ONE item

    //WORKS OK BUT NEEDS TO BREAK AT ONE ITEM

    itemArray.map((item) => {
      if (item.id === id) {
        setShoppingCart((prevCart) => {
          const newItems = prevCart.items.filter((item) => item !== id);

          return {
            ...prevCart,
            items: [...newItems],
            totalCost: prevCart.totalCost - item.cost,
          };
        });
      }
    });
  }

  console.log("SHOPPING CART");
  console.log(shoppingCart);

  const merch = itemArray.map((item) => {
    return (
      <Card
        itemName={item.name}
        id={item.id}
        key={item.id}
        cost={item.cost}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />
    );
  });

  return (
    <div className="App">
      <h1> BUY STUFF</h1>
      {merch}
    </div>
  );
}

export default App;
