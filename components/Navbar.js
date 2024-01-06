import { ShoppingCartIcon } from "@heroicons/react/outline";
import { ChangeContext } from "./context/ColorContext";
import { useContext, useState, useEffect } from "react";
import Link from 'next/link';
import  Image from 'next/image'
// import { motion } from "framer-motion";

const { motion } = require("framer-motion");

  
function Navbar() {
    const spring = {
        type: "spring",
        damping: 10,
        stiffness: 100
      }


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

        
        <div className={scrolled ? "hidden lg:flex items-center sticky top-0  justify-between   bg-black bg-opacity-70  px-10  transition-all transform duration-500 ease-in-out z-50 h-14 ": "hidden lg:flex sticky items-center top-0  justify-between   bg-yellow-700 bg-opacity-20 h-32 z-50" }  >
            
            
            <div className="flex  px-7 justify-content items-center  justify-between  space-x-4">
           
                   
               
               
             
               
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
                        <Link href="#home">
                        
                        <Image
                       
                        src="/img/logo_transparent.png"
                       className="  scale-150"
                        alt="Picture of the author"
                        width={200}
                        height={200}
                        objectFit="cover"
                     />
                     </Link>
                                        
                        
                        {/* <h1  className=" group-hover:flex cursor-pointer hover:scale-105 ease-out"> ORDER NOW ! </h1>
                        <h1 className=" group-hover  text-bold font-sans ">012 482 185</h1> */}


                    </div>
                </div>

                


              
               
            </div>


            <div className=" items-center  text-lg text-white">
                <ul className="flex space-x-10">
                    
                    <Link 
                     href='#offer'
          
                    >

                    <motion.li
                     initial={{
                        x:500,
                        opacity:0,
                        scale:0.5,
                      }}
                      animate={{
                        x:0,
                        opacity:1,
                        scale:1,
                      }}
                      transition={{
                        duration:1.5
                      }}

                      className="cursor-pointer hover:scale-105 ease-out hover:bg-slate-900">Offers</motion.li>
                    </Link>
                    {/* <Link href=''> <li  className="cursor-pointer hover:scale-105 ease-out">Menu</li></Link> */}

                </ul>
            </div>


            <div className="flex px-10 py-5 text-lg text-white">
            <ul className="flex  md:space-x-10 ">
            <Link 
                     href='#menu'
          
                    >
                    <motion.li
                     initial={{
                        x:500,
                        opacity:0,
                        scale:0.5,
                      }}
                      animate={{
                        x:3,
                        opacity:1,
                        scale: 1,

                      }}
                      transition={{
                        spring,
                        duration:1.5
                      }}

                     className="cursor-pointer hover:scale-105 transition ease-out">Our Menu</motion.li>
                     </Link>
                    <li className="cursor-pointer hover:scale-105 ease-out">The Blog</li>
                    <li className="cursor-pointer hover:scale-105 ease-out">Contacts</li>

                </ul>



            </div>
            <motion.div
            initial={{
                x:0,
                opacity:0,
                
                
              }}
              animate={{
                x:[15,15,15,15,15,15,15,15,15,15,15,15,15,500,15],
                opacity:1,
                scale: [1,1,1,1,1,1,1,1,1,1,1,1,1,3,1],
                rotate:[50,45,44,43,42,41,40,39,25,19,5,5,5,5,5,5,0,180,180,180,360,360, 360,180 ,50,0],
                

              }}
              whileHover={{ scale: [1.112,1,1.112,1,1.112,1,1.112,1,],
                 x:[15,30,10,0,-40,15,30,10,0,-40,15,30,10,0,-40,] ,
                 
                 
                }}
              transition={{
                duration:3.5
              }}
            
            className={scrolled ? "hidden":"flex items-center p-8 z-50"}>
            <Link  href="/cart">
                
                <ShoppingCartIcon   className="cursor-pointer md: pl-11 text-white text-sm h-7 "/>
            </Link>

            </motion.div>
        </div>
    )
}

export default Navbar
