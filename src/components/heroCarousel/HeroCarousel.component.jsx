import React from "react";
import HeroSlider from "react-slick";


//component
import {NextArrow, PreviousArrow} from "./Arrows.component";



const HeroCarousal = () => {                                //refer documentation

    const settingsLg = {
    arrows: true,
    autoplay: false,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "100px",
    infinite: true,
    NextArrow: <NextArrow/>,
    PreviousArrow: <PreviousArrow/>
    }
    const settings = {
    arrows:true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    NextArrow: <NextArrow/>,
    PreviousArrow: <PreviousArrow/>
    };

const images = [
"https://in.bmscdn.com/promotions/cms/creatives/1630390163036_reclaimthesaaz_webshowcase_1240x300.jpg",
"https://in.bmscdn.com/promotions/cms/creatives/1630432985528_incinemasthisfriday_shangchiandthelegendofthetenrings_webshowcase_1240x300.jpg",
"https://in.bmscdn.com/promotions/cms/creatives/1630390163036_reclaimthesaaz_webshowcase_1240x300.jpg",
"https://in.bmscdn.com/promotions/cms/creatives/1630608713679_matrixfightnight6_webshowcase_1240x300.jpg",
"https://in.bmscdn.com/promotions/cms/creatives/1628591224466_fnbgeneric.jpg"
]

return(
    <>
    <div className="lg:hidden">
    <HeroSlider  {...settings}>
    {
    images.map((image) => (
        <div className="w-full h-64 md:h-80 py-3">
        <img src ={image} alt="testing" className="w-full h-full rounded-md"/>
        </div>
    ))
    }
    </HeroSlider>
    </div>


    <div className="hidden lg:block">
    <HeroSlider  {...settingsLg}>
    {
    images.map((image) => (
        <div className="w-full h-96 px-2 py-3">
        <img src ={image} alt="testing" className="w-full h-full rounded-md"/>
        </div>
    ))
    }
    </HeroSlider>
    </div>

    </>
    );
};


export default HeroCarousal;