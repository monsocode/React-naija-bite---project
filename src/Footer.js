import React from 'react'

const Footer = () => {
  const openHour = 10;
  const closeHour = 22;
  const hour = 17;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen)
  return (
    <footer className="footer">
      {isOpen ? <p>we are open</p> : <p>we are closed</p>}
    </footer>
  )
}

export default Footer