import React, { useContext } from 'react'
import { CartContext, StagedContext } from './context/ColorContext'
import FoodCard from './FoodCard';



function ShoppingCart() {
  const [staged, setStaged] = useContext(StagedContext)
  const [cart, setCart] = useContext(CartContext)
  

  return (
    <div className='flex relative h-screen text-red bg-[#5b4317] items-center max-w-full overflow-hidden'>
      {
      cart.map((food) => (
        <>
        <div className='h-20  items-center grid  border-rounded px-8 hover:scale-105 transition-all duration-1000 transform'>

        <div className='bg-white'>
          <h1 className='py-2 space-x-4 bg-red-500 opacity-90 '>{food.name}</h1>
          <img className='p-4  border rounded-lg  hover:scale-105 transition transform duration-500  h-48 w-48' src={food.image} />
          <h1 className='py-2 bg-yellow-700'>$ {food.price}</h1>
        </div>
       
        </div>
        </>

       
      ))

      


      }
     
        
      
      
    </div>
    
  )
}

export default ShoppingCart