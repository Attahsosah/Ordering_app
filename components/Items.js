import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useEffect, useState } from "react";


function Items() {
    const [scrolled, setScrolled] = useState(false)

    const scrollChange = () => {
        if (window.scrollY > 60){
            setScrolled(true)
        }
        else {
            setScrolled(false)
        }
    }
    useEffect(()=>{
        window.addEventListener("scroll", scrollChange)

        return () => {
            window.removeEventListener("scroll", scrollChange)
        }
    })
    return (
        

        <div className="items-center z-40 shadow-lg     overflow-x-auto ">
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

        className="z-10  mx-44 bg-bg13 mb-28 "
       


        >   
        <div className="mx-28 ">
            <h1 className=" pl-11 font-bold border-rounded rounded-full text-yellow-700 items-center justify-center text-9xl py-10 font-Koulen bg-bg10" >The best food in town</h1>
            </div>
            <div className="bg-bg10 rounded-full">
            <h1 className="  pl-11 font-bold text-orange-800 items-center justify-center text-9xl py-10 font-Koulen bg-bg11 rounded-full" >The best foosa in town</h1>
            </div>
            </Carousel>
        <div className="pl-24 bg-red-900 pb-0 ">
            <h1 className="text-white text-2xl font-bold">Our offers</h1>
        </div>
            <div className= {scrolled ? "flex scroll-mx-44 transition-all transform duration-200 ease-in-out items-center pt-4 pl-7 overflow-x-scroll w-[1200px] " : "flex  items-center pt-4 pl-7 overflow-x-scroll w-[1200px] "}>

            <div className="hover:scale-110 hover:pr-5  items-center border-r-2 border-gray-700 h-96 w-full rounded-lg bg-bg6 bg-cover transition transform duration-1000 ease-out bg-transparent hover:cursor-pointer">
                    <h1 className="font-bold shadow-lg bg-red-900 p-10 ">The Slider</h1>
                </div>

                <div className="hover:scale-110 hover:pr-5  w-full   items-center border-r-2 border-gray-700 h-96  rounded-lg bg-bg2 transition transform duration-1000 ease-out bg-transparent hover:cursor-pointer">
                    <h1 className="font-bold shadow-lg bg-gray-700 p-10 ">Denim Delight</h1>
                </div>

                <div className="hover:scale-110 hover:pr-5  items-center border-r-2 border-gray-700 h-96 w-full rounded-lg bg-bg3 transition transform duration-1000 ease-out bg-transparent hover:cursor-pointer">
                    <h1 className="font-bold shadow-lg bg-green-900 p-10 ">The Slider</h1>
                </div>

                <div className="hover:scale-110 hover:pr-5  items-center border-r-2 border-gray-700 h-96 w-full rounded-lg bg-bg4 transition transform duration-1000 ease-out bg-transparent hover:cursor-pointer">
                    <h1 className="font-bold shadow-lg bg-purple-900 p-10 text-xl">The Royal Flush</h1>
                </div>

                <div className="hover:scale-110 hover:pr-5  items-center border-r-2 border-gray-700 h-96 w-full rounded-lg bg-bg4 transition transform duration-1000 ease-out bg-transparent hover:cursor-pointer">
                    <h1 className="font-bold shadow-lg bg-purple-900 p-10 text-xl">The Royal Flush</h1>
                </div>
                <div className="hover:scale-110 hover:pr-5  items-center border-r-2 border-gray-700 h-96 w-full rounded-lg bg-bg4 transition transform duration-1000 ease-out bg-transparent hover:cursor-pointer">
                    <h1 className="font-bold shadow-lg bg-purple-900 p-10 text-xl">The Royal Flush</h1>
                </div>

                
               
            </div>
        
        </div>

        
    )
}

export default Items
