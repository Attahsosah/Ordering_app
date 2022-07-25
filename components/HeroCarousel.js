import Image from "next/image"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useState } from "react";

function HeroCarousel(){

    const [opened, setOpened] = useState(false)

    
    return(
        

        // <Carousel
        // autoPlay={true}
        // autoFocus={true}
        // emulateTouch={true}
        // transitionTime={3000}
        // showThumbs={false}
        // showStatus={false}
        // infiniteLoop={true}
        // swipeAnimationHandler={true}
        // swipeable={true}

        // className="z-10 "
       


        // >
           
        //     <div className="h-[900px] opacity-75 justify-center ">
        //     <div className="z-50  bg-black text-bold font-Koulen justify-center  text-2xl font-bold text-yellow-800 bg-opacity-40 opacity-40" data-aos='flip-right'>Food is Hapiness</div>
        //         <img className="object-contain" src="img/coffee.jpg" />
                
        //     </div>
          

           



        // </Carousel>

        <Carousel
        autoPlay={true}
        autoFocus={true}
        emulateTouch={true}
        transitionTime={1000}
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        swipeAnimationHandler={true}
        swipeable={true}
        interval={3000}

        className="z-10 w-full m-auto bg-bg11  mb-28  hover:animate-pulse" 
        
       


        >   
        <div className="" >
        <h1 className=" pl-11 font-bold  text-yellow-700 items-center justify-center text-9xl py-10 font-Koulen transition-all  transform  duration-[3s] hover:animate-pulse bg-gradient-to-l from-slate-100 to-slate-900 border-b-black" >The  Food Locker</h1>
        {/* <img className="object-fill w-full b" src="img/coffee.jpg" /> */}
            {/* <h1 className=" pl-11 font-bold  text-yellow-700 items-center justify-center text-9xl py-10 font-Koulen bg-bg10" >The best food in town</h1> */}
            </div>
            <div className="" >
        <h1 className=" pl-11 font-bold  text-yellow-700 items-center justify-center text-9xl py-10 font-Koulen transition-all  transform  duration-[3s] hover:animate-pulse bg-gradient-to-l from-slate-100 to-slate-900 border-b-black" >Unlock The Feast</h1>
        {/* <img className="object-fill w-full b" src="img/coffee.jpg" /> */}
            {/* <h1 className=" pl-11 font-bold  text-yellow-700 items-center justify-center text-9xl py-10 font-Koulen bg-bg10" >The best food in town</h1> */}
            </div>

            
            </Carousel>


    )
}

export default HeroCarousel;
