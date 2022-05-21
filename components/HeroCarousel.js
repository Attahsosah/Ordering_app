import Image from "next/image"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function HeroCarousel(){
    return(
        <Carousel
        autoplay={true}
        autoFocus={true}
        emulateTouch={true}
        transitionTime={3}
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        swipeAnimationHandler={true}
        swipeable={true}

        className="z-10 "
       


        >
            <div className="h-[420px] ">
                <img className="object-contain" src="img/coffee.jpg" />
            </div>

            <div className="h-[900px] ">
                <img className=" object-contain" src="img/Burger2.jpg" />

            </div>



        </Carousel>


    )
}

export default HeroCarousel;
