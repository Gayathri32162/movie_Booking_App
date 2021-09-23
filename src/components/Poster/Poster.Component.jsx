import React from 'react';
// import {Link} from 'react-router-dom'; //like anchor tag in html



const Poster = (props) => {
    return (
        
        <div className="flex flex-col items-start gap-2 px-1 md:px-3">
            <div className="h-40 md:h-80">
                <img src={props.src} alt="posters" className="w-full h-full rounded-md"/>
            </div>
            <div>
            <h3 className={`text-lg font-bold ${ props.isDark ? "text-white" : "text-gray-700"}`}>
                {props.title}
            </h3>
            <h4 className={`text-sm ${ props.isDark ? "text-white" : "text-gray-700"}`}>
                {props.subtitle}
            </h4>
            </div>
        </div>
        
    )

}



export default Poster;