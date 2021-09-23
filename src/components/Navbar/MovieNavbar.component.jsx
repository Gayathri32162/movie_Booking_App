import React from "react";
import {BiSearchAlt, BiChevronDown, BiMenu} from "react-icons/bi"

function NavSm(){
    return(
        <>
            <div className="text-black flex items-center justify-between ">
                <div>
                    <h3 className="text-xl font-bold">
                        Fast and Furious 9
                    </h3>
                </div>
                <div className="w-8 h-8">
                    <BiSearchAlt className="w-full h-full"/>
                </div>
            </div>
        </>
    )
}


function NavLg(){
    return(
        <>
        <div className="container flex mx-auto px-4 items-center justify-between">
            <div className="flex items-center w-1/2 gap-3">
                <div className="w-10 h-10">
                    <img src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png" 
                    alt="" 
                    className="w-full h-full"/>
                </div>
                <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
                    <BiSearchAlt/>
                    <input type="search" className="w-full bg-transparent border-none focus:outline-none"
                    placeholder="Search for movies, events, plays, sports amd activities"/>
                </div>
            </div>
            <div className="flex items-center gap-3 ">
                <span className="text-gray-200 text-base flex items-center cursor-pointer hover:text-white">
                    Madurai  <BiChevronDown/>
                </span>
                <button className="bg-red-600 text-white px-2 py-1 text-small rounded">
                    Sign in
                </button>
                <div className="w-8 h-8 text-white">
                    <BiMenu className="w-full h-full"/>
                </div>
            </div>
        </div>
        </>
    )
}

const MovieNavbar = () =>{
    return(
        <div>
            <nav className="
            bg-white
            lg:bg-darkBackground-700 
            border-b-2
            lg:border-b-0
            p-4">
            <div className="md:hidden">
                {
                /*Mobile Screen*/
                <NavSm />
                }
            </div>
            <div className="hidden md:flex lg:hidden">
                {
                /*medium screen*/
                <NavSm />
                }
            </div>
            <div className="hidden w-full lg:flex">
                {
                /*large screen*/
                <NavLg />
                }
            </div>
            </nav>
        </div>
        
    
    )
};

export default MovieNavbar;