import Image from "next/image";
import { ShoppingCartIcon } from "@heroicons/react/outline";

function Navbar() {
    return (

        
        <div className="flex sticky top-0  justify-between   bg-black h-28 z-50" >
            
            
            <div className="flex  p-10 justify-content items-center  justify-between  space-x-4">
           
                   
               
               
             
               
                <div className=" flex text-bold text-lg">
                    <div className="px-5">

                    <Image 
                     width="30"
                     height="32"
                     className="rounded-full px-5"
                     src="/img/telephone.png" />
                    </div>
               
                    
                    

                    <div className="grid text-white">
                    <h1  className="cursor-pointer hover:scale-105 ease-out"> ORDER NOW ! </h1>
                    <h1 className="text-bold font-sans ">012 482 185</h1>


                    </div>
                </div>

                


              
               
            </div>


            <div className="p-10 text-lg text-white">
                <ul className="flex space-x-10">
                    <li  className="cursor-pointer hover:scale-105 ease-out">Homepage</li>
                    <li  className="cursor-pointer hover:scale-105 ease-out">Products</li>
                    <li  className="cursor-pointer hover:scale-105 ease-out">Menu</li>

                </ul>
            </div>


            <div className="flex p-10 text-lg text-white">
            <ul className="flex  md:space-x-10 ">
                    <li className="cursor-pointer hover:scale-105 transition ease-out">Events</li>
                    <li className="cursor-pointer hover:scale-105 ease-out">Blog</li>
                    <li className="cursor-pointer hover:scale-105 ease-out">Contact</li>

                </ul>



            </div>
            <div className="flex items-center p-8 z-50">
            <ShoppingCartIcon className="cursor-pointer md: pl-11 text-white text-sm h-7 "/>


            </div>
        </div>
    )
}

export default Navbar
