import React, { useContext, useEffect, useState } from 'react'
import { SelectedContext, TypeContext, HoverContext, ChangeContext, StagedContext, CartContext } from './context/ColorContext'
import {db} from '../firebase'
import { collection, getDocs, onSnapshot, orderBy, query } from "firebase/firestore";
function NewMenu({Type, Clicked, id , name, price}) {
    // const [type, setType] = useContext(TypeContext)
    const handleOpen = () => setOpen(true);
    const [over, setOver] = useContext(HoverContext)
    const [clicked, setClicked] = useContext(ChangeContext);
    const [foods, setFoods] = useState([]);
    const [selected, setSelected] = useContext(SelectedContext)
    const [staged, setStaged] = useContext(StagedContext)
    const [cart, setCart] = useContext(CartContext);
    const food = useContext(TypeContext)
    console.log(food)

    const uniqueFood = Array.from(new Set(foods.map(a => a.data().Type)))
    .map(type => {
      return foods.find(a => a.data().Type === type)
    })

    console.log(uniqueFood)

    const addToCart = (food) => {

      cart.push(food)
      console.log("Added", food)
    }
    
    const changeColor = (food) => {
        setSelected(food.type)
      
    }
     const getFood = async () => {
      const foodSnapshot = await getDocs(collection(db, "Food"));
      const foodList = foodSnapshot.docs.map((doc) =>{
        const data = doc.data()

        data.id = doc.id 
        data.name = doc.name
       
        return data

        
      } );
      setFoods(foodList)

      
      console.log(foods.data)

      // console.log("name",foods.data().name)
     
  };

  foods.map((food) => {
    console.log("food:::" ,food.data().price)
   }) 
    
  
    useEffect(() => {
      onSnapshot(query(collection(
        db,'Food'
      )),snapshot => {
        setFoods(snapshot.docs)
      })
      console.log(foods)

      
    },[db])


    
   
  

  return (
    <div className=  '   bg-bg4 bg-no-repeat bg-cover bg-fixed '>
      <div className='flex space-x-8 pt-7 bg-black bg-opacity-75 '>
      <div className='pl-10 mt-16'>
              <div className='flex space-x-4 '>
              <h1 className=' text-2xl font-serif font-bold text-white ' >The Menu</h1>
                <div className='bg-yellow-400 w-[0.02em]'/>

              </div>
                
            </div>

        {/* Left side */}
       
      <div className='block space-y-5'>

      
        {
        uniqueFood.map((food) => (
          <div className=""  key={food.id}>
            

            <h2 key={food.id} onClick={() => setSelected(food.data().Type)  }  onPointerOver={() => setSelected(food.data().Type)} className= "text-[20px] pb-9 pl-2 text-yellow-600 hover:text-white hover:scale-105 active:scale-105 active:border-b-2  font-Koulen  transition-all duration-2000">{food.data().Type}</h2>
            
          </div>
        ))
        }
        </div>

        {/* Right side */}
        
        <div className=" flex  flex-col   space-y-5 pb-5 font-bold  ml-20 cursor-pointer" >

         
        { foods.filter(food => food.data().Type === selected).map((selected) => (
          <>
                    <h2 className='hover:bg-yellow-500 active:scale-75 transition transform duration-1000 ' onClick={ () => setStaged(selected.data())} key={selected.data().id}>{selected.data().name}</h2>
                    <h2 key={selected.data().id}>{selected.data().price}</h2>
                    <button onClick={() => addToCart(selected.data())}className='bg-black text-white p-2'>Add</button>
                   


          </>
          
        ))}


       
     



          
        </div>
        <div className=' justify-end px-40'>
          { foods.filter(food => food.data().Type === selected).map((selected) => (
          <>
          <div className=''>
                        <img className='p-4  rounded-lg  hover:scale-105 transition transform duration-500  h-48 w-48' src={selected.data().image} />

                      </div>
                    

          </>


        ))}
      </div>
        {/* <div className="space-x-10 text-blue-700 font-bold  ">

         
        {food.filter(food => food.type === selected).map((selected) => (
          <h2>{selected.accomaniments}</h2>
        ))}
          
        </div> */}

          </div>
          

    </div>
  )
}

export default NewMenu