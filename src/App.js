import React from 'react'
import "./index.css"
import Header from "./Header";
import Menus from "./Menus";
import Footer from "./Footer"


const App = () => {
  return (
    <div className="container">
     <Header/>
     <Menus/>
     <Footer/>
    </div>
  );
};

export default App;