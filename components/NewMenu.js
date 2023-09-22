import React, { useContext, useEffect, useState } from 'react';
import { SelectedContext, TypeContext, HoverContext, ChangeContext, StagedContext, CartContext } from './context/ColorContext';
import { db } from '../firebase';
import { collection, getDocs, onSnapshot, orderBy, query } from "firebase/firestore";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function NewMenu({ Type, Clicked, id, name, price }) {
  const [over, setOver] = useContext(HoverContext);
  const [clicked, setClicked] = useContext(ChangeContext);
  const [foods, setFoods] = useState([]);
  const [selected, setSelected] = useContext(SelectedContext);
  const [staged, setStaged] = useContext(StagedContext);
  const [picked, setPicked] = useState(false);
  const [cart, setCart] = useContext(CartContext);

  const uniqueFood = Array.from(new Set(foods.map(food => food.Type)))
    .map(type => foods.find(food => food.Type === type));

  const addToCart = (food) => {
    setCart([...cart, food]);
    console.log("Added", food);
  }

  useEffect(() => {
    const getFood = async () => {
      const foodSnapshot = await getDocs(collection(db, "Food"));
      const foodList = foodSnapshot.docs.map((doc) => {
        const data = doc.data();
        data.id = doc.id;
        return data;
      });
      setFoods(foodList);
    };

    onSnapshot(query(collection(db, 'Food')), (snapshot) => {
      setFoods(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    });

    getFood();
  }, [db]);

  return (
    <div className="bg-bg4 bg-no-repeat bg-cover bg-fixed">
      <div className='lg:flex mx-auto space-x-8 pt-7 bg-black bg-opacity-75'>
        <div className='pl-10 mt-16'>
          <div className='flex space-x-4 '>
            <h1 className=' text-2xl font-serif font-bold text-white ' >The Menu</h1>
            <div className='bg-yellow-400 w-[0.02em]' />
          </div>
        </div>
        <div className='block space-y-5'>
          {uniqueFood.map((food) => (
            <div key={food.id}>
              <h2
                onClick={() => setSelected(food.Type)}
                onPointerOver={() => setSelected(food.Type)}
                className="text-[20px] pb-9 pl-2 text-yellow-600 hover:text-white hover:scale-105 active:scale-105 active:border-b-2  font-Koulen  transition-all duration-2000"
              >
                {food.Type || <Skeleton />}
              </h2>
            </div>
          ))}
        </div>
        <div className="flex flex-col space-y-5 pb-5 font-bold ml-20 cursor-pointer">
          {foods.filter(food => food.Type === selected).map((selected) => (
            <div key={selected.id} className="flex items-center justify-between">
              <div className="flex space-x-4 items-center">
                <h2
                  className="text-xl font-semibold text-gray-800 hover:text-yellow-600 cursor-pointer transition-all duration-300"
                  onClick={() => setStaged(selected)}
                >
                  {selected.name || <Skeleton />}
                </h2>
                <span className="text-xl font-semibold text-gray-600">${selected.price}</span>
              </div>
              <button
                onClick={() => addToCart(selected)}
                className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 cursor-pointer transition-colors duration-300"
              >
                Add
              </button>
            </div>
          ))}
        </div>
        <div className='justify-end px-40 z-0'>
          {foods.filter(food => food.Type === selected).map((selected) => (
            <div key={selected.id}>
              <img
                className='h-1/2 w-1/2 p-4 rounded-lg hover:scale-105 transition transform duration-500 lg:h-48 lg:w-48 cursor-pointer'
                src={selected.image}
                alt={selected.name}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewMenu;
