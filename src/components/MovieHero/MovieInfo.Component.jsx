import React from "react";

const MovieInfo = ({movie}) => {
    return(
        <>
        <div className="flex flex-col gap-8">
            <h1 className="text-white lg:text-5xl font-bold">
                {movie.Original_title}
            </h1>
            <div className="flex flex-col gap-5 text-white">
                        <h4>4k ratings</h4>
                        <h4>English, Tamil, Kannada, Hindi</h4>
                        <h4>{movie.overview}</h4>
            </div>
            <div className="flex items-center gap-3 w-full">
                    <button className="bg-red-500 w-full py-3 text-white font-semibold rounded">
                        Rent $2
                    </button>
                    <button className="bg-red-500 w-full py-3 text-white font-semibold rounded">
                        Buy $10
                    </button>
            </div>

        </div>
        </>
    );
};

export default MovieInfo