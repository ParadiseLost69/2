import React from "react";
import "./App.css";
import Card from "./components/Card.js";
import items from "./items";

function App() {
  const [itemArray, setItemArray] = React.useState(items);

  function addToCart(e) {
    const { id } = e.target;
    setItemArray(
      itemArray.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      })
    );
  }

  function removeFromCart(e) {
    const { id } = e.target;
    setItemArray(
      itemArray.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      })
    );
  }

  const totalCost = itemArray.reduce((prev, item) => {
    return prev + item.cost * item.quantity;
  }, 0);

  console.log("SHOPPING CART");
  console.log(itemArray);
  console.log("TOTAL COST");
  console.log(totalCost);

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
