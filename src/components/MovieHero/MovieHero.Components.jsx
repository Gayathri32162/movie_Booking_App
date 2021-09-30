import React,{useState} from "react";
import MovieInfo from "./MovieInfo.Component";


const MovieHero = () => {
const[movie,SetMovie] = useState({
    id:'hjgyj',
    Original_title:'Fast and Furious',
    overview:"2h 23m @ Action, Adventure ,Crime ,Thriller @ UA ,@2 Sep, 2021",
    backdrop_path:"https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/fast-and-furious-9-et00056556-14-07-2021-07-41-33.jpg",
    poster_path:"https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/fast-and-furious-9-et00056556-14-07-2021-07-41-33.jpg",

});

    return (
        <>
        <div>
            {/*mobile screen and tablet screen*/}
            <div className="lg:hidden w-full">
                <img src={movie.backdrop_path}
                alt="cover poster" 
                className="m-4 rounded"
                style={{width: "calc(100% - 2rem)"}} /*calculating the width of the image using normal css*/ 
                />
            </div>
            <div className="flex flex-col gap-3 lg:hidden">
                <div className="flex flex-col-reverse gap-3 px-3 text-sm my-2">
                    <div className="text-black flex flex-col gap-2 md:px-4">
                        <h4>4k ratings</h4>
                        <h4>English, Tamil, Kannada, Hindi</h4>
                        <h4>{movie.overview}</h4>
                    </div>
                </div>
                <div className="flex items-center gap-3 md:px-4 md:w-screen text-sm px-4">
                    <button className="bg-red-500 w-full py-3 text-white font-semibold rounded">
                        Rent $2
                    </button>
                    <button className="bg-red-500 w-full py-3 text-white font-semibold rounded">
                        Buy $10
                    </button>
                </div>
            </div>

            {/* large screen devices */}
            <div className=" relative hidden w-full lg:block" style={{height:"30rem"}}>
                <div className="absolute z-10 w-full h-full" style={{backgroundImage:
                    "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)"}}>

                    </div>
                    <div className="absolute z-30 left-24 top-10 items-center gap-10">
                        <div className="w-64 h-96">
                            <img src={movie.poster_path} 
                            alt="Movie poster" 
                            className="w-full h-full rounded-xl"/>
                        </div>
                        <div>
                            <MovieInfo/>
                        </div>
                    </div>
            </div>
        </div>       
        </>
    )
}

export default MovieHero;