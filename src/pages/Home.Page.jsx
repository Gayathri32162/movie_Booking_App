import React from 'react'
import EntertainmentCardSlider from '../components/Entertainment/EntertainmentCard.Component';
import HeroCarousal from '../components/heroCarousel/HeroCarousel.component';
import PosterSlider from '../components/PosterSlider/PosterSlider.Component';


function HomePage() {
    const RecommendedMovies=[
        
        {
            src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzQlICAzODEgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00312665-gbabdpvflx-portrait.jpg",
            title:"Fast and Furious 9",
            subtitle:"Action / Adventure / Crime / Thriller",
        },
        {
            src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzQlICAzODEgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00312665-gbabdpvflx-portrait.jpg",
            title:"Fast and Furious 9",
            subtitle:"Action / Adventure / Crime / Thriller",
        },
        {
            src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzQlICAzODEgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00312665-gbabdpvflx-portrait.jpg",
            title:"Fast and Furious 9",
            subtitle:"Action / Adventure / Crime / Thriller",
        },
        {
            src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzQlICAzODEgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00312665-gbabdpvflx-portrait.jpg",
            title:"Fast and Furious 9",
            subtitle:"Action / Adventure / Crime / Thriller",
        },
        {
            src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzQlICAzODEgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00312665-gbabdpvflx-portrait.jpg",
            title:"Fast and Furious 9",
            subtitle:"Action / Adventure / Crime / Thriller",
        },
    ];


    const PremiereMovies=[
        
        {
            src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00312484-ehedpyzcmm-portrait.jpg",
            title:"The nest",
            subtitle:"English",
        },
        {
            src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00137316-jlvpmlrpyw-portrait.jpg",
            title:"The nest",
            subtitle:"English",
        },
        {
            src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00310648-uwreepnzec-portrait.jpg",
            title:"The nest",
            subtitle:"English",
        },
        {
            src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00137312-qszmhzktyk-portrait.jpg",
            title:"The nest",
            subtitle:"English",
        },
        {
            src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00137455-pxtjxgdyua-portrait.jpg",
            title:"The nest",
            subtitle:"English",
        },
    ];

    const OnlineStreamEvents=[
        
        {
            src:"https://in.bookmyshow.com/events/data-science/ET00304004",
            title:"Events",
            subtitle:"English",
        },
        {
            src:"https://in.bookmyshow.com/events/introduction-to-found-poetry-a-one-page-spotlight/ET00304931",
            title:"Events",
            subtitle:"English",
        },
        {
            src:"https://in.bookmyshow.com/events/art-and-craft-online-workshop/ET00131211",
            title:"Events",
            subtitle:"English",
        },
        {
            src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-V2VkLCAyMiBTZXAgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00307978-jsjhzjlgnt-portrait.jpg",
            title:"Events",
            subtitle:"English",
        },
        {
            src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00137455-pxtjxgdyua-portrait.jpghttps://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-V2VkLCAyMiBTZXAgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00310715-pcszpwdcnm-portrait.jpg",
            title:"Events",
            subtitle:"English",
        },
    ];


    return (
        <>
        
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

            <div className="container mx-auto px-4 md:px-12 my-8">
                <PosterSlider 
                title="Recomended movies" 
                subtitle="List of recomended movies"
                Posters={RecommendedMovies}
                isDark={false}
                />
            </div>

            <div className='bg-premiere-700 py-12'>
                <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
                    <div className="hidden md:flex">
                        <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png" 
                        alt="Rupay" 
                        className='w-full h-full'/>
                    </div>
                    <PosterSlider 
                title="Premiers" 
                subtitle="Brand new releases every new friday"
                Posters={PremiereMovies}
                isDark={true}
                />
                </div>
                </div>

                <div className="container mx-auto px-4 md:px-12 my-8">
                <PosterSlider 
                title="Online Streaming Events" 
                subtitle=""
                Posters={OnlineStreamEvents}
                isDark={false}
                />
            </div>
            
    
        
        </>
    )
}

export default HomePage;