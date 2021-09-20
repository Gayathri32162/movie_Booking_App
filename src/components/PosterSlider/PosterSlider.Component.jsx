import React from 'react';
import Slider from 'react-slick';
import Poster from '../Poster/Poster.Component';




const PosterSlider = (props) => {


    const PostImages=[
        "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzQlICAzODEgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00312665-gbabdpvflx-portrait.jpg",
        "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzYlICAzMzMgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00122134-kkxxyaqcqy-portrait.jpg",
        "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTElICA0MWsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00122566-hcssjtledt-portrait.jpg",
        "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzklICAyN2sgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00117102-nsnbgrkpdk-portrait.jpg",
        "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODAlICA3ayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00097273-gxsvmptdws-portrait.jpg",
        "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MmsgbGlrZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00311715-xaymgxnhnp-portrait.jpg",
        "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODElICA0ayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00122449-cpycuxwnzs-portrait.jpg",
        "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-NjYgbGlrZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00314879-ycpygbjpwq-portrait.jpg",
        "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzclICAxN2sgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00056556-lwhmtnmxar-portrait.jpg",
        "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODUlICAxayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00307112-bbmjfmawzf-portrait.jpg",
    ];

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
    }


    const {Posters, title , subtitle, isDark} = props;


    return (
        <>
        <div className="flex flex-col items-start my-2">
            <h3 className="font-bold text-2xl ">{title}</h3>
            <p className="text-sm text-gray-800"> {subtitle}</p>
        </div>
        <Slider {...settings}>
        {Posters.map((each) => (
            <Poster {...each} />
        ))}
        </Slider>
        </>
    )

}


export default PosterSlider;