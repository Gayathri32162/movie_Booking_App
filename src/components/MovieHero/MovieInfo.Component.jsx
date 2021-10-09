import React,{useState} from "react";

import PaymentModal from "../PaymentModal/Payment.Component.Jsx";

const MovieInfo = ({movie}) => {

    const [isOpen, setIsOpen] = useState(false);
    const[price, setPrice] = useState(0);
    
    const genres = movie.genres?.map(({name}) => name).join(",");
    

    const rentMovies = () => {
        setIsOpen(true);
        setPrice(149);
    };

    const buyMovies = () => {
        setIsOpen(true);
        setPrice(599);


    };


    return(
        <>
        <PaymentModal setIsOpen={setIsOpen} isOpen={isOpen} price={price}/>
        <div className="flex flex-col gap-8">
            <h1 className="text-white lg:text-5xl font-bold">
                {movie.original_title}
            </h1>
            <div className="flex flex-col gap-5 text-white">
                        <h4>4k ratings</h4>
                        <h4>English, Tamil, Kannada, Hindi</h4>
                        <h4>
                            {movie.runtime} min . {genres}{""}
                        </h4>
            </div>
            <div className="flex items-center gap-3 w-full">
                    <button onclick={rentMovies} className="bg-red-500 w-full py-3 text-white font-semibold rounded">
                    Rent ₹149
                    </button>
                    <button onclick={buyMovies} className="bg-red-500 w-full py-3 text-white font-semibold rounded">
                    Buy ₹599
                    </button>
            </div>

        </div>
        </>
    );
};

export default MovieInfo;