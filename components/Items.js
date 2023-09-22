import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useEffect, useState,useRef } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/autoplay';
// import Swiper styles

import "swiper/css/effect-cards";

// import "./styles.css";

// import required modules
import { EffectCards, Autoplay, FreeMode } from "swiper"


const { motion } = require("framer-motion");

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
    useEffect(() => {
        AOS.init();
    },[])
    return (
        

        <div className="items-center z-40 shadow-lg gradient from-black bg-gradient-to-b to-zinc-800   overflow-x-auto ">
            <Carousel
        
        autoPlay={true}
        delay={1000}
        autoFocus={true}
        emulateTouch={true}
        transitionTime={1000}
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        swipeAnimationHandler={true}
        swipeable={true}
        

        className="z-10  lg:mx-44 bg-bg13  mb-28 "
       


        >   
        <motion.div
        initial={{
            opacity:0,
          }}
          
          transition={{
            
            duration:2.5,
          }}
          whileInView={{opacity:1, y:0}}
         className="lg:mx-28 bg-no-repeat bg-blur bg-opacity-50 p-2 z-50 bg-yellow-600  ">

            <h1 className=" pl-11 font-bold  text-yellow-700 items-center justify-center text-9xl py-10 font-Koulen bg-bg10" >The best food in town</h1>
            </motion.div>
            {/* <div className="bg-bg10 ">
            <h1 className="  pl-11 font-bold text-orange-800 items-center justify-center text-9xl py-10 font-Koulen bg-bg11 rounded-full" >The best foosa in town</h1>
            </div> */}
            </Carousel>
        <div className="  pl-24  mb-4 md:flex space-x-4 pb-0 bg-opacity-20 ">
            <h1 className="text-gray-200 text-2xl font-bold" data-aos='fade-in' data-aos-duration='3000'>Our offers</h1>
            <div className='bg-yellow-400 w-[0.02em] hover:w-[0.05em]' data-aos='fade-in' data-aos-duration='4000'/>
        </div>
        <div className="xs:grid md:flex space-y-5">
            <Swiper
            effect={"fade"}
            
            grabCursor={true}
            autoplay={{
                disableOnInteraction:false,
                pauseOnMouseEnter:false,
                
                delay:3000}}
            freeMode={{
                enabled:true,
                sticky:true,
                momentum:true,
                momentumBounce:true,
                
            }}
            lazy={{
                checkInView:true,
                loadOnTransitionStart:true,
            }}
           

            modules={[EffectCards, Autoplay, FreeMode]}
            className="mySwiper  overflow-hidden overflow-x-scroll w-[70%] py-10 z-20 "
            data-aos='fade-right'
        >
            <SwiperSlide className="bg-bg6  hover:scale-150 text-gray-400 font-Koulen">The Slider</SwiperSlide>
            <SwiperSlide  className="bg-Denim bg-cover font-Koulen bg-opacity-30">Denim Delight</SwiperSlide>
            <SwiperSlide className="bg-Cream bg-cover font-Koulen">Cream Dream</SwiperSlide>
            <SwiperSlide className="bg-Cafe bg-cover font-Koulen">The CafÉ Affair</SwiperSlide>
            {/* <SwiperSlide className="">Slide 5</SwiperSlide>
            <SwiperSlide className="">Slide 6</SwiperSlide> */}
            
        </Swiper>
        <Swiper
            effect={"cards"}
            
            grabCursor={true}
            autoplay={{
                disableOnInteraction:false,
                pauseOnMouseEnter:false,
                
                delay:5000}}
            freeMode={{
                enabled:true,
                sticky:true,
                momentum:true,
                momentumBounce:true,
                
            }}
            lazy={{
                checkInView:true,
                loadOnTransitionStart:true,
            }}
           

            modules={[EffectCards, Autoplay, FreeMode]}
            className="mySwiper  overflow-hidden overflow-x-scroll w-[70%] py-10 z-20 "
            data-aos='fade-right'
        >
            <SwiperSlide className="bg-cake  hover:scale-150 text-gray-400 font-Koulen">The Slider</SwiperSlide>
            <SwiperSlide  className="bg-dip bg-cover font-Koulen bg-opacity-30">Denim Delight</SwiperSlide>
            <SwiperSlide className="bg-sandwich bg-cover font-Koulen">Cream Dream</SwiperSlide>
            <SwiperSlide className="bg-borito bg-cover font-Koulen">The CafÉ Affair</SwiperSlide>
            {/* <SwiperSlide className="">Slide 5</SwiperSlide>
            <SwiperSlide className="">Slide 6</SwiperSlide> */}
            
        </Swiper>
        <Swiper
            effect={"fade"}
            
            grabCursor={true}
            autoplay={{
                disableOnInteraction:false,
                pauseOnMouseEnter:false,
                
                delay:3300}}
            freeMode={{
                enabled:true,
                sticky:true,
                momentum:true,
                momentumBounce:true,
                
            }}
            lazy={{
                checkInView:true,
                loadOnTransitionStart:true,
            }}
           

            modules={[EffectCards, Autoplay, FreeMode]}
            className="mySwiper  overflow-hidden overflow-x-scroll w-[70%] py-10 z-20 "
            data-aos='fade-right'
        >
            <SwiperSlide className="bg-bg6  hover:scale-150 text-gray-400 font-Koulen">The Slider</SwiperSlide>
            <SwiperSlide  className="bg-Denim bg-cover font-Koulen bg-opacity-30">Denim Delight</SwiperSlide>
            <SwiperSlide className="bg-Cream bg-cover font-Koulen">Cream Dream</SwiperSlide>
            <SwiperSlide className="bg-Cafe bg-cover font-Koulen">The CafÉ Affair</SwiperSlide>
            {/* <SwiperSlide className="">Slide 5</SwiperSlide>
            <SwiperSlide className="">Slide 6</SwiperSlide> */}
            
        </Swiper>
      </div>
        {/* <div className="">
        <div className= {scrolled ? " flex space-x-2 mx-auto scroll-mx-44 transition-all transform duration-200 ease-in-out   overflow-hidden items-center pt-4 pl-7 overflow-x-scroll w-[70%] " : "flex  items-center pt-4 pl-7 overflow-x-scroll w-[1200px] " } data-aos='fade-right' data-aos- >

            <div className="hover:scale-110  hover:w-96 w-96 hover:z-30 items-center border-r-2 border-gray-700 h-96  rounded-lg bg-bg6  bg-cover transition transform duration-1000 ease-out bg-transparent hover:cursor-pointer">
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

                <div className="hover:scale-110 hover:pr-5  items-center border-r-2 border-gray-700 h-96 w-full rounded-lg bg-bg4 transition transform duration-1000 ease-out bg-transparent hover:cursor-pointer ">
                    <h1 className="font-bold shadow-lg bg-purple-900 p-10 text-xl">The Royal Flush</h1>
                </div>
                <div className="hover:scale-110 hover:pr-5  items-center border-r-2 border-gray-700 h-96 w-full rounded-lg bg-bg4 transition transform duration-1000 ease-out bg-transparent hover:cursor-pointer">
                    <h1 className="font-bold shadow-lg bg-purple-900 p-10 text-xl">The Royal Flush</h1>
                </div>

                
               
            </div>
        
        </div> */}
        </div>

        
    )
}

export default Items
