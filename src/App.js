import React from "react";
import axios from 'axios';


//Higher Order Components
import DefaultHOC from "./HOC/DefaultHOC";
import MovieHOC from "./HOC/Movie.HOC";


//Pages
import HomePage from "./pages/Home.Page";
import MoviePage from "./pages/Movie.page";
import Plays from "./pages/Plays.Page";



// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



//this is for making request for tmdb 
axios.defaults.baseURL = "http://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params['api_key'] = process.env.REACT_APP_API_KEY;


function App() {
  return (
    <>
      <DefaultHOC path='/' exact component={HomePage}/>
      <MovieHOC path='/movie/:id' exact component={MoviePage}/>
      <DefaultHOC path='/plays' exact component={Plays}/>
    </>
  );
};

export default App;
