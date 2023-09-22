import React, { useContext } from 'react';
import { CartContext, StagedContext, SelectedContext } from './context/ColorContext';
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import FoodCard from './FoodCard';

function ShoppingCart() {
  const [staged, setStaged] = useContext(StagedContext);
  const [cart, setCart] = useContext(CartContext);
  const [selected, setSelected] = useContext(SelectedContext);

  // Define animation variants for item entry
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  // Define animation variants for item exit
  const exitVariants = {
    hidden: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } },
  };

  return (
    <div className="bg-gray-100 min-h-screen py-16">
      <div className="container mx-auto">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">Shopping Cart</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {cart.map((food) => (
            <motion.div
              key={food.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <img
                src={food.image}
                alt={food.name}
                className="w-full h-48 object-cover object-center"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{food.name}</h2>
                <p className="text-gray-600 mb-2">${food.price}</p>
                {/* You can add a button to remove the item from the cart here */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
