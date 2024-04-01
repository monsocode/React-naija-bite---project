import React from 'react'

const Food = ({foodObj}) => {
  return (
    <li className="food">
      <img src={foodObj.photoName} alt="Corn" />
      <div>
        <h3>{foodObj.name}</h3>
        <p>{foodObj.ingredients}</p>
      </div>
    </li>
  )
}

export default Food