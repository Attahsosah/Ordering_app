import { data } from 'autoprefixer';
import { addDoc, collection } from 'firebase/firestore';
import { useState } from 'react';
import { db } from '../firebase';

function Admin() {
    const [name, setName] = useState("");
    const [type, setType] = useState('');
    const [price, setPrice] = useState('');
    const [image,setImage] = useState('');


    const addFood = async (e) => {
        e.preventDefault();
        await addDoc(collection(db, 'Food'), {
            name,
            Type:type,
            price,
            image,

            
        });
        setName(""),
        setType(""),
        setPrice(""),
        setImage("")

      
    };


  return (
    <div className=' flex justify-center  bg-bg14 bg-no-repeat bg-cover h-[100vh]  '>


        <div className='mx-auto bg-gray-900  px-10 h-[60vh] my-auto border rounded-md hover:scale-110'>




       
        <div className='block p-4'>
            <h1 className='p-4 text-center font-Koulen'>Type of Food</h1>
            <input className=' bg-transparent border border-yellow-600 rounded-md pl-4 hover:scale-105 transition-transform duration-1000' type={'text'} value={type}   onChange={(e) => setType(e.target.value)}  placeholder='Type here'>
                
            
            </input>
           
        </div>
        <div className='block p-4'>
            <h1 className='p-4 text-center'>Name of Food</h1>
            <input className=' bg-transparent border border-yellow-600 rounded-md pl-4 hover:scale-105 transition-transform duration-1000'  value={name}   onChange={(e) => setName(e.target.value)}  placeholder='Type here'>
                
            
            </input>
           
        </div>
        <div className='block p-4'>
            <h1 className='p-4 text-center'>Price</h1>
            <input className=' bg-transparent border border-yellow-600 rounded-md pl-4 hover:scale-105 transition-transform duration-1000' type={'number'} value={price}   onChange={(e) => setPrice(e.target.value)}  placeholder='Type here'>
                
            
            </input>
           
        </div>
        <div className='block p-4'>
            <h1 className='p-4 text-center'>Image</h1>
            <input className=' bg-transparent border border-yellow-600 rounded-md pl-4 hover:scale-105 transition-transform duration-1000'  value={image}   onChange={(e) => setImage(e.target.value)}  placeholder='Type here'>
                
            
            </input>
           
        </div>
       
        <div className='block p-4'>
            <button className='hover:bg-blue-500 justify-center items-center p-4 space-y-96 border rounded-md font-serif' onClick={addFood}  type='submit'>Submit</button>                
            
            
           
        </div>
        {/* <div className='block p-4'>
            <h1 className='p-6'>Name of Food</h1>
            <input className='p-4 hover:scale-105 transition-transform duration-1000 hover:' value={name} onChange={(e) => setName(e.target.value)}  placeholder='Type here'>
                
            
            </input>
           
        </div>

        <div className='block p-4'>
            <h1 className='p-4'>Price  of Food</h1>
            <input className='w-1/2 p-4 hover:scale-105 transition-transform duration-1000 hover:p-6' value={price}  onChange={(e) => setPrice(e.target.value)} type={'number'}  placeholder='  Type here'>
                
            
            </input>
          
        </div>

        <div className='w-1/2 justify-center items-center'>
        <button className='hover:bg-blue-500 justify-center items-center p-4 space-y-96' onClick={addFood}  type='submit'>Submit</button>

        </div> */}

        </div>
     
       
            
       
      
    </div>
  )
}

export default Admin