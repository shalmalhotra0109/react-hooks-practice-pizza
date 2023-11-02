import React, { useState, useEffect } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [pizzaData, setPizzaData] = useState([]);
  const [pizzaFormData, setPizzaFormData] = useState({topping: '', size: '', vegetarian: false});

  useEffect(() => {
    fetch("http://localhost:3001/pizzas")
      .then(r => r.json())
      .then(pizzas => setPizzaData(pizzas))
  }, [])

  const addToForm = (pizza) => {
    setPizzaFormData(pizza);
  }

  const updatePizza = (updatedPizza) => {
    const newPizzas = pizzaData.map(pizza => {
      if (pizza.id === updatedPizza.id) return updatedPizza
      return pizza;
    })
    setPizzaData(newPizzas);
  }

  return (
    <>
      <Header />
      <PizzaForm pizza={pizzaFormData} updatePizza={updatePizza} />
      <PizzaList pizzaData={pizzaData} handleClick={addToForm} />
    </>
  );
}

export default App;


/*
App
  |__Header
  |__PizzaForm
  |__PizzaList
        |__Pizza
*/