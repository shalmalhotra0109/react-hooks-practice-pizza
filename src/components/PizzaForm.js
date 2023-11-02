import React, { useState, useEffect } from "react";

function PizzaForm({ pizza, updatePizza }) {
  const [pizzaTopping, setPizzaTopping] = useState('');
  const [pizzaSize, setPizzaSize] = useState("Small");
  const [pizzaIsVegetarian, setPizzaIsVegetarian] = useState(false);

  useEffect(() => {
    setPizzaTopping(pizza.topping);
    setPizzaSize(pizza.size);
    setPizzaIsVegetarian(pizza.vegetarian);
  }, [pizza])

  const handleToppingChange = (e) => {
    setPizzaTopping(e.target.value)
  }

  const handleVegetarianChange = () => {
    setPizzaIsVegetarian(!pizzaIsVegetarian)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3001/pizzas/${pizza.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        topping: pizzaTopping,
        size: pizzaSize,
        vegetarian: pizzaIsVegetarian
      })
    })
      .then(r => r.json())
      .then(updatedPizza => updatePizza(updatedPizza))
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            value={pizzaTopping}
            onChange={handleToppingChange}
          />
        </div>
        <div className="col">
          <select className="form-control" name="size" value={pizzaSize} onChange={e => setPizzaSize(e.target.value)}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
              checked={pizzaIsVegetarian ? true : false}
              onChange={handleVegetarianChange}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
              checked={pizzaIsVegetarian ? false : true}
              onChange={handleVegetarianChange}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;