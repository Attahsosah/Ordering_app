import React, { useContext } from 'react'
import { CartContext, StagedContext } from './context/ColorContext'
 
function ShoppingCart() {
  const [staged, setStaged] = useContext(StagedContext)
  const [cart, setCart] = useContext(CartContext)

  return (
    <div className='flex h-screen text-red '>
      {
      cart.map((food) => (
        <>
        <div className='grid bg-white'>

       
        <h1>{food.name}</h1>
        <img className='p-4  rounded-lg  hover:scale-105 transition transform duration-500  h-48 w-48' src={food.image} />
        </div>
        </>
      ))

      }
    </div>
    
  )
}

export default ShoppingCart