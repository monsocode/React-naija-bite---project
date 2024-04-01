import React from 'react'
import Food from "./Food";
import menuData from "./data";

// const menuData = [
//   {
//     name: "Corn",
//     ingredients: "Raw Corn and Corn Salad",
//     price: 6,
//     photoName: "menu/corn.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Fried Rice",
//     ingredients: "Green Peas and Sweet Corn",
//     price: 10,
//     photoName: "menu/fried_rice.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Jollof Rice",
//     ingredients: "Tomatoes and Jollof Spice",
//     price: 12,
//     photoName: "menu/jollof_rice.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Margherrita",
//     ingredients: "Tomatoes and onion",
//     price: 12,
//     photoName: "menu/margherita.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Plantain",
//     ingredients: "Plantain and Stew ",
//     price: 15,
//     photoName: "menu/plantain.jpg",
//     soldOut: true,
//   },
//   {
//     name: "Rice",
//     ingredients: "Rice and Stew",
//     price: 18,
//     photoName: "menu/rice.jpg",
//     soldOut: false,
//   },
// ];

const Menus = () => {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <ul className="foods">
        {/* Rendering lists if componentss */}
        {menuData.map((food) => (
          <Food foodObj={food} key={food.name}/>
        ))}
        {/* <Food name="corn" photoName="menu/corn.jpg" ingredients="Corn, Cucumber, Carrots" />
      <Food name="Fried Rice" photoName="menu/fried_rice.jpg" ingredients="Green peas, Veg oil, Rice" />
      <Food name="Jollof rice" photoName="menu/jollof_rice.jpg" ingredients="Rice, Onga, Pepper" />
      <Food name="Margherita" photoName="menu/margherita.jpg" ingredients="Margherita" />
      <Food name="Plantain" photoName="menu/plantain.jpg" ingredients="Plantain" />
      <Food name="Rice" photoName="menu/rice.jpg" ingredients="RIce, Stew, Maggi" /> } */}
      </ul>
    </main>
  )
}

export default Menus
