import React from 'react'
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

 export function NextArrow(props){
    return(<>
    
    <div className={props.className}
    style={{...props.style, display:"block", 
    backgroundColor: "gray", 
    opacity: "0.7", 
    top: "160px" , 
    right:"0px" ,
    height:"40px", 
    width:"40px" ,
    borderRadius:"4px", 
    position:"absolute"}} 
    onClick={props.onClick}>
        <span><IoIosArrowForward/></span>
    </div>
    </>)
}

export function PreviousArrow(props){
    return(<>
    <div className={props.className}
    style={{...props.style, display:"block", 
    backgroundColor: "gray", 
    opacity: "0.7", 
    top: "160px" , 
    right:"0px" ,
    height:"40px", 
    width:"40px" ,
    borderRadius:"4px", 
    position:"absolute"}} 
    onClick={props.onClick}>
        <span><IoIosArrowBack/></span>
    </div>
    </>)
}


