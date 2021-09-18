import React from "react";
import DefaultHOC from "./HOC/DefaultHOC";
import HomePage from "./pages/Home.Page";


// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function App() {
  return (
    <>
      <DefaultHOC path='/' exact component={HomePage}/>
    </>
  )
}

export default App;
