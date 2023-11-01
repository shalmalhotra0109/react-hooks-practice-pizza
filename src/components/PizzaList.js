import React from "react";
import Pizza from "./Pizza";

function PizzaList({ pizzas, onEdit}) {
  const PizzaList = pizzas.map((pizza) => {
    return <Pizza key={pizza.id} pizza={pizza} onEdit={onEdit}/>
  })

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        {
          PizzaList
        }
      </tbody>
    </table>
  );
 }
export default PizzaList;
