import React from 'react';
import Slider from 'react-slick';
import Poster from '../Poster/Poster.Component';




const PosterSlider = (props) => {

    const settings = {
        Infinite: false,
        autoplay:false,
        slidesToShow:5,
        slidesToScroll:4,
        InitialSlide:0,
        responsive:[
            {
                breakpoints:1024,
                settings:{
                    slidesToScroll:2,
                    slidesToShow:3,
                    infinite:true,
                },
            },
            {
                breakpoints:600,
                settings:{
                    slidesToScroll:1,
                    slidesToShow:3,
                    InitialSlide:1,
                },
            },
            {
                breakpoints:480,
                settings:{
                    slidesToScroll:1,
                    slidesToShow:1,
                    
                },
            },
        ],
    };


    const { posters, title, subtitle, isDark, config } = props;

    const currentSettings = config ? config : settings;

    return (
        <>
            <div className="flex flex-col items-start sm:ml-3 ml-0 my-2">
                <h3
                    className={`text-2xl font-bold ${
                        isDark ? "text-white" : "text-black"
                    }`}
                >
                    {title}
                </h3>
                <p
                    className={`text-sm  ${
                        isDark ? "text-white" : "text-gray-800"
                    }`}
                >
                    {subtitle}
                </p>
            </div>
            <Slider {...currentSettings}>
                {posters.map((each) => (
                    <Poster {...each} isDark={isDark} />
                ))}
                {console.log(posters)};
                
            </Slider>
        </>
    );
};

export default PosterSlider;