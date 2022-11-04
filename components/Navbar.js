import Image from "next/image";
import { ShoppingCartIcon } from "@heroicons/react/outline";
import { ChangeContext } from "./context/ColorContext";
import { useContext, useState, useEffect } from "react";
import Link from 'next/link';
// import { motion } from "framer-motion";

function Navbar() {


    const [clicked, setClicked] = useContext(ChangeContext)
    const [scrolled, setScrolled] = useState(false)

    const cart = () => {
        router.push({

            pathname: "/cart",
            
        });
    }


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

        
        <div className={scrolled ? "hidden lg:flex items-center sticky top-0  justify-between   bg-black bg-opacity-70  px-10  transition-all transform duration-500 ease-in-out z-50 ": "hidden lg:flex sticky items-center top-0  justify-between   bg-yellow-700 bg-opacity-20 h-32 z-50" }  >
            
            
            <div className="flex  px-10 justify-content items-center  justify-between  space-x-4">
           
                   
               
               
             
               
                <div className=" flex text-bold text-lg">
                {/* <motion.div
                initial={{
                    x:-500,
                    opacity:0,
                    scale:0.5,

                }}
                animate={{

                    x:0,
                    opacity:1, 
                    scale:1
                }}
                
                >
                    <div className="px-5">
                    
                    <Image 
                     width="30"
                     height="32"
                     className="rounded-full px-5"
                     src="/img/telephone.png" />
                    </div>
                    </motion.div>
                */}
                    
                    

                    <div className="grid group text-white">
                        
                        <h1  className="hidden group -hover:flex cursor-pointer hover:scale-105 ease-out"> ORDER NOW ! </h1>
                        <h1 className="hidden group-hover  text-bold font-sans ">012 482 185</h1>


                    </div>
                </div>

                


              
               
            </div>


            <div className="px-10 py-5 text-lg text-white">
                <ul className="flex space-x-10">
                    <li  className="cursor-pointer hover:scale-105 ease-out">Homepage</li>
                    <li  className="cursor-pointer hover:scale-105 ease-out">Products</li>
                    {/* <Link href=''> <li  className="cursor-pointer hover:scale-105 ease-out">Menu</li></Link> */}

                </ul>
            </div>


            <div className="flex px-10 py-5 text-lg text-white">
            <ul className="flex  md:space-x-10 ">
                    <li className="cursor-pointer hover:scale-105 transition ease-out">Events</li>
                    <li className="cursor-pointer hover:scale-105 ease-out">Blog</li>
                    <li className="cursor-pointer hover:scale-105 ease-out">Contact</li>

                </ul>



            </div>
            <div className="flex items-center p-8 z-50">
            <Link  href="/cart">
                <ShoppingCartIcon   className="cursor-pointer md: pl-11 text-white text-sm h-7 "/>
            </Link>

            </div>
        </div>
    )
}

export default Navbar
