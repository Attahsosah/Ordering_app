import React from 'react'
import Navbar from '../components/Navbar'
import { HomeIcon } from "@heroicons/react/outline";
// import {  useRouter } from 'next/dist/client/router';
import Footer from '../components/Footer';
import ShoppingCart from '../components/ShoppingCart';

function cart() {

  // const router = useRouter();


  //   const home = () => {
  //       router.push({

  //           pathname: "/",

  //       });
      
  return (
    <div className=''>
       <div className='flex sticky top-0  justify-between    bg-red-800  h-15 z-50 '>
         <div className='justify-start'>
           <HomeIcon  className='h-12 text-gray-600 hover:text-black' />

         </div>
         <div className='justify-center'>
           <h1 className='font-Koulen text-[25px] pt-2'>The Food Hub</h1>
         </div>


         <div className="justify-end">


         </div>


         <div>
            <h1>Your Order: </h1>
          </div>

           
       </div>
       <ShoppingCart />
       <Footer className="sticky bottom-0" />
       
    </div>
  )
}

export default cart
