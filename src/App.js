import React from "react";

//Higher Order Components
import DefaultHOC from "./HOC/DefaultHOC";
import MovieHOC from "./HOC/Movie.HOC";


//Pages
import HomePage from "./pages/Home.Page";
import MoviePage from "./pages/Movie.page";


// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function App() {
  return (
    <>
      <DefaultHOC path='/' exact component={HomePage}/>
      <MovieHOC path='/movie/:id' exact component={MoviePage}/>
    </>
  )
}

export default App;
