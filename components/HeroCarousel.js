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
            <div className="h-96 object-contain">
                <img className="object-fill" src="img/coffee.jpg" />
            </div>

            <div className="h-auto">
                <img className=" object-fill" src="img/Burger2.jpg" />

            </div>



        </Carousel>


    )
}

export default HeroCarousel;
