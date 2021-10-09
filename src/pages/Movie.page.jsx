import React,{ useContext,useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick'; 
import axios from 'axios';


//icons
import {FaCcApplePay, FaCcVisa} from 'react-icons/fa';


//component
import MovieHero from '../components/MovieHero/MovieHero.Components';
import Cast from '../components/Cast/Cast.Component';
import PosterSlider from '../components/PosterSlider/PosterSlider.Component';


//context
import { MovieContext } from '../context/Movie.Context';

const MoviePage = (props) => {
        const { movie } = useContext(MovieContext);
        const {id} = useParams();
        const [cast, setCast] = useState([]);
        const [similarMovies , setSimilarMovies]=useState([]);
        const [recommended, setRecommendedMovies] = useState([]);


        useEffect(() => {
            const requestCast = async () =>{
                const getCast = await axios.get(`/movie/${id}/credits`);
                setCast(getCast.data.cast);
            }
            requestCast();
        },[id]);

        useEffect(() => {
            const requestSimilarMovies = async () =>{
                const getSimilarMovies = await axios.get(`/movie/${id}/similar`);
                setSimilarMovies(getSimilarMovies.data.results);
            }
            requestSimilarMovies();
        },[id]);

        useEffect(() => {
            const requestRecommendedMovies = async () =>{
                const getRecommendedMovies = await axios.get(`/movie/${id}/recommendations`);
                setRecommendedMovies(getRecommendedMovies.data.results);
            }
            requestRecommendedMovies();
        },[id]);



    const settingsCast = {
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 3,
              infinite: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
        ],
      };
      const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
        ],
      };
    

    return(
        <>
        <MovieHero/>
        <div className="my-12 container px-4 lg:ml-20 lg:w-2/3">
            <div className="flex flex-col items-start gap-3">
                <h1 className="text-gray-800 font-bold text-2xl">
                    About the movie
                </h1>
                <p>
                    {movie.overview}
                </p>
            </div>
        
            <div className="my-8">
                <hr/> {/* for Horizontal seperation */}
            </div>
            <div className="my-8">
                <h2 className="text-gray-800 font-bold text-2xl mb-3">
                    Applicable Offers
                </h2>
                <div className="flex flex-col gap-3 lg:flex-row">
                <div className="flex 
                items-start 
                gap-2 
                bg-yellow-100 
                p-3 
                border-yellow-400 
                border-dashed 
                border-2 
                rounded-md">
                <div className="w-8 h-8">
                    <FaCcVisa className="w-fill h-fill"/>
                </div>
                <div className="flex flex-col items-start">
                    <h3 className="text-gray-700 text-xl font-bold">
                        Visa Stream Offer
                    </h3>
                    <p className="text-gray-600">
                        Get 50% off up to INR 150 on all Rupay Card on BookMyShow Stream.
                    </p>
                </div>
                </div>
                <div className="flex 
                items-start 
                gap-2 
                bg-yellow-100 
                p-3 
                border-yellow-400 
                border-dashed 
                border-2 
                rounded-md">
                <div className="w-8 h-8">
                    <FaCcApplePay className="w-fill h-fill"/>
                </div>
                <div className="flex flex-col items-start">
                    <h3 className="text-gray-700 text-xl font-bold">
                        Filmy Pass
                    </h3>
                    <p className="text-gray-600">
                        Get 50% off up to INR 150 on all Rupay Card on BookMyShow Stream.
                    </p>
                </div>
                </div>
                </div>
            </div> 
            
                <div className="my-8 ">
                    <hr/>
                </div>
                
                <div className="my-8">
                    <h2 className="text-gray-800 font-bold text-2xl mb-4">
                        Cast and Crew
                    </h2>
                    <Slider {...settingsCast}>
                        {cast.map((castData) => (
                            <Cast image={castData.profile_path} 
                            castName={castData.original_name} 
                            role={castData.character}
                            />
                        ))}
                    </Slider>
                </div>

                <div className="my-8 ">
                    <hr/>
                </div>

                <div className="my-8">
                    <PosterSlider 
                    config={settings} 
                    title="Recommended Movies" 
                    posters={similarMovies} 
                    isDark={false}
                    />
                </div>

                <div className="my-8 ">
                    <hr/>
                </div>
                <div className="my-8">
                <PosterSlider 
                    config={settings} 
                    title="BMS XCLUSIVE" 
                    posters={recommended} 
                    isDark={false}
                    />
                </div>

            </div>
        
        </>
    );

};

export default MoviePage;