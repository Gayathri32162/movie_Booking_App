import React from 'react';
import MovieHero from '../components/MovieHero/MovieHero.Components';
import Slider from 'react-slick'; 
import {FaCcApplePay, FaCcVisa} from 'react-icons/fa';
import Cast from '../components/Cast/Cast.Component';
import PosterSlider from '../components/PosterSlider/PosterSlider.Component';

const MoviePage = (props) => {
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

      const cast =[
          {
              profile_path:
              "https://in.bmscdn.com/iedb/artist/images/website/poster/large/vin-diesel-5007-22-12-2017-10-17-23.jpg",
              original_name: "Vin Diesel",
              character: "Dominic Toretto",
              
          },
          {
            profile_path:
            "https://in.bmscdn.com/iedb/artist/images/website/poster/large/vin-diesel-5007-22-12-2017-10-17-23.jpg",
            original_name: "Vin Diesel",
            character: "Dominic Toretto",
            
        },
        {
            profile_path:
            "https://in.bmscdn.com/iedb/artist/images/website/poster/large/vin-diesel-5007-22-12-2017-10-17-23.jpg",
            
            original_name: "Vin Diesel",
            character: "Dominic Toretto",
            
        },
        {
            profile_path:
            "https://in.bmscdn.com/iedb/artist/images/website/poster/large/vin-diesel-5007-22-12-2017-10-17-23.jpg",
            
            original_name: "Vin Diesel",
            character: "Dominic Toretto",
            
        },
        {
            profile_path:
            "https://in.bmscdn.com/iedb/artist/images/website/poster/large/vin-diesel-5007-22-12-2017-10-17-23.jpg",
            
            original_name: "Vin Diesel",
            character: "Dominic Toretto",
            
        }
      ]
      const SimilarMovies =[
          {
              src:"https://in.bmscdn.com/iedb/movies/images/website/poster/large/radhe-et00115114-25-03-2021-07-22-45.jpg",
              title:"Radhe: Your Most Wanted Bhai",
              subtitle:"Action/Thriller/Romance",
          },
          {
            src:"https://in.bmscdn.com/iedb/movies/images/website/poster/large/radhe-et00115114-25-03-2021-07-22-45.jpg",
            title:"Radhe: Your Most Wanted Bhai",
            subtitle:"Action/Thriller/Romance",
        },
        {
            src:"https://in.bmscdn.com/iedb/movies/images/website/poster/large/radhe-et00115114-25-03-2021-07-22-45.jpg",
            title:"Radhe: Your Most Wanted Bhai",
            subtitle:"Action/Thriller/Romance",
        },
        {
            src:"https://in.bmscdn.com/iedb/movies/images/website/poster/large/radhe-et00115114-25-03-2021-07-22-45.jpg",
            title:"Radhe: Your Most Wanted Bhai",
            subtitle:"Action/Thriller/Romance",
        },
        {
            src:"https://in.bmscdn.com/iedb/movies/images/website/poster/large/radhe-et00115114-25-03-2021-07-22-45.jpg",
            title:"Radhe: Your Most Wanted Bhai",
            subtitle:"Action/Thriller/Romance",
        },
      ]
    


    return(
        <>
        <MovieHero/>
        <div className="my-12 container px-4 lg:ml-20 lg:w-2/3">
            <div className="flex flex-col items-start gap-3">
                <h1 className="text-gray-800 font-bold text-2xl">
                    About the movie
                </h1>
                <p>
                Dom`s peaceful life with his wife Letty and son Brian is shattered when Dom`s past catches up to him. The gang is up against the most skilled assassin and high-performance driver - his little brother Jakob.
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
                    posters={SimilarMovies} 
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
                    posters={SimilarMovies} 
                    isDark={false}
                    />
                </div>

            </div>
        
        </>
    )

};

export default MoviePage;