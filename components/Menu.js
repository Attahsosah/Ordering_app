import React from 'react'

function Menu() {

    const handleClick = () => {
        setUpdate(true);
        setVisible(true);
        
    }

    
  return (
    <div className=''>
        
            <div className='pl-10 bg-gray-800'>
                <h1 className=' text-2xl font-serif font-bold text-white ' >The Menu</h1>
            </div>

            <div className=' bg-gray-200'>
                <ul className='flex p-4 justify-between bg-black'>
                    <li className='text-white font-bold text-2xl active:text-yellow-700 active:border-b-2 '>
                        <h1>Starters</h1>

                        <ul className='justify-between pb-4'>
                            <li className='text-yellow-500 pb-4'>Teryaki soup</li>
                            <li className='text-yellow-500pb-4'>Ipsum Lorem</li>
                            <li className='text-yellow-500'>Lorem soup</li>

                        </ul>

                    </li>
                    <li className='text-white font-bold text-2xl hover:text-yellow-700 '>
                        <h1>Burgers</h1>
                    </li>
                    <li className='text-white font-bold text-2xl hover:text-yellow-700 '>
                        <h1>Desert</h1>
                    </li>
                    <li className='text-white font-bold text-2xl  hover:text-yellow-700'>
                        <h1>Snacks</h1>
                    </li>
                </ul>

            </div>

        
    </div>
  )
}

export default Menu