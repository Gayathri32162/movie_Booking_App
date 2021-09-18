import React from 'react'
import EntertainmentCardSlider from '../components/Entertainment/EntertainmentCard.Component';
import HeroCarousal from '../components/heroCarousel/HeroCarousel.component';
import PosterSlider from '../components/PosterSlider/PosterSlider.Component';


function HomePage() {
    return (
        <>
        <div>
            <HeroCarousal/>
            <div className="container mx-auto px-4" >
                <h1 className="text-2xl
                font-bold
                text-gray-800 
                my-3">
                    The Best of Entertainment
                </h1>
                
                <EntertainmentCardSlider/>
            </div>

            <div className="container mx-auto px-12 my-8">
                <PosterSlider/>
            </div>
            
        </div>
        </>
    )
}

export default HomePage;