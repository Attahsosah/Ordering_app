import React, { useContext } from 'react'
import { SelectedContext, TypeContext, HoverContext, ChangeContext } from './context/ColorContext'

function NewMenu() {
    // const [type, setType] = useContext(TypeContext)
    const handleOpen = () => setOpen(true);
    const [over, setOver] = useContext(HoverContext)
    const [clicked, setClicked] = useContext(ChangeContext);

    const [selected, setSelected] = useContext(SelectedContext)
    const food = useContext(TypeContext)
    console.log(food)

    const uniqueFood = Array.from(new Set(food.map(a => a.type)))
    .map(type => {
      return food.find(a => a.type === type)
    })

    console.log(uniqueFood)
    
    const changeColor = (food) => {
        setSelected(food.type)
      
    }
    
   

  return (
    <div className='   bg-bg4 bg-no-repeat bg-cover bg-fixed '>
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
        uniqueFood.map( (food) => (
          <div className="">
            

            <h2 onClick={() => setSelected(food.type)  }  onPointerOver={() => setSelected(food.type)} className= "text-[20px] pb-9 pl-2 text-yellow-600 hover:text-white hover:scale-105 active:scale-105 active:border-b-2  font-Koulen ">{food.type}</h2>
          </div>
        ))
        }
        </div>

        {/* Right side */}
        
        <div className="flex-col space-y-5 pb-5 font-bold  ml-20" >

         
        {food.filter(food => food.type === selected).map((selected) => (
          <h2>{selected.name}</h2>
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