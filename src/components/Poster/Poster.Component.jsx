import React from 'react';
// import {Link} from 'react-router-dom'; //like anchor tag in html



const Poster = (props) => {
    return (
        
        <div className="flex flex-col items-start gap-1 px-1 md:px-3">
            <div className="h-40 md:h-80">
                <img src={props.src} alt="posters" className="w-fullh-full rounded-md"/>
            </div>
            <div>
            <h3 className="text-lg font-bold text-gray-700">
                Fast anf Furious 9
            </h3>
            <h4 className="text-sm text-gray-700">
                Action/Adventure
            </h4>
            </div>
        </div>
        
    )

}



export default Poster;