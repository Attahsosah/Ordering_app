import Footer from "./Footer"
import Navbar from "./Navbar"
import HeroCarousel from "./HeroCarousel"
import Items from "./Items";
import Menu from "./Menu";
import NewMenu from "./NewMenu";
import Meal from "./Meal";
import Link from 'next/link';
import { ShoppingCartIcon } from "@heroicons/react/outline";
import { useContext, useState, useEffect } from "react";
import SideBar from "./SideBar";
import { CartContext, StagedContext, SelectedContext } from './context/ColorContext'


const { motion } = require("framer-motion");
function Layout({ children }) {
    const [scrolled, setScrolled] = useState(false)
    const [chosen, setChosen] = useState(false)
    const [staged, setStaged] = useContext(StagedContext)
    const [display, setDisplay] = useState(false)
    const [cart, setCart] = useContext(CartContext)
    const [selected, setSelected] = useContext(SelectedContext)
    const scrollChange = () => {
        if (window.scrollY >  60  && window.scrollY ){
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
        <div className=" bg-black ">
            <>      
                {/* <section id="home"> */}
                <Navbar />

                {/* </section> */}
               
                
                <HeroCarousel />
               
                <section id="offer" className='' >
                
                <Items />
                </section>
                
                <section id="menu" className='snap-end' >
                
                <NewMenu />
                </section>
                <Meal />
                
               
                
                

                { children }
                <motion.footer
                initial={{
                    x:[150,150,200,100,50,20,15],
                    opacity:0,
                    scale:0.5,
                  }}
                  animate={{
                    x:[15,15,15,15,15,15,15,15,15,15,15,15,15,500,0],
                    opacity:1,
                    scale: [1,1,1,1,1,1,1,1,1,1,1,1,1,3,1],
                    rotate:[50,45,44,43,42,41,40,39,25,19,5,5,5,5,5,5,0,180,180,180,360,360, 360,180 ,50,0]
    
                  }}
                  transition={{
                    
                    duration:3.5
                  }}
                
                className={scrolled ? "transition transform duration-[5000ms] ease-in sticky bottom-11 w-full cursor-pointer":"hidden"}>
                <div className='flex items-center justify-end pr-4'>
                <div  className={chosen ? '' : 'hidden'}>
                {/* <SideBar
                
                /> */}
                </div>
                

               
                    
                        <ShoppingCartIcon onClick={() =>setChosen(true)} className='h-7 w-7 text-yellow-700 z-10 rounded-full filter grayscale hover:gray-scale-0 cursor-pointer top-0' />
                        <div className={chosen?"transition-all ease-in-out text-white":'hidden'} onClick={()=>setChosen(false)}>X</div>
                </div>
                </motion.footer>

                <Footer />

            </>
        </div>
    );
}

export default Layout
