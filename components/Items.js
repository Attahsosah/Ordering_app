function Items() {
    return (
        <div className="items-center z-20 shadow-lg  bg-opacity-60 overflow-scroll">
            <h1 className="  pl-11 font-bold text-white items-center justify-center text-9xl py-10">The best food in town</h1>
        <div className="pl-24 bg-red-900 pb-0">
            <h1 className="text-white text-2xl font-bold">Our offers</h1>
        </div>
            <div className="flex items-center pt-4 pl-7">

                <div className="hover:scale-110 hover:pr-5 items-center border-r-2 border-gray-900 h-96 w-96 rounded-lg bg-bg1 transition transform duration-1000 ease-out bg-transparent hover:cursor-pointer">
                    <h1 className="font-bold shadow-lg bg-yellow-700 p-10">The Slider</h1>
                    <div>
                    <h1 className="text-red-900 text-xl font-bold ">199 KSH</h1>


                    </div>
                    
                </div>

                <div className="hover:scale-110 hover:pr-5  items-center border-r-2 border-gray-700 h-96 w-96 rounded-lg bg-bg2 transition transform duration-1000 ease-out bg-transparent hover:cursor-pointer">
                    <h1 className="font-bold shadow-lg bg-gray-700 p-10">Denim Delight</h1>
                </div>

                <div className="hover:scale-110 hover:pr-5  items-center border-r-2 border-gray-700 h-96 w-96 rounded-lg bg-bg3 transition transform duration-1000 ease-out bg-transparent hover:cursor-pointer">
                    <h1 className="font-bold shadow-lg bg-green-900 p-10">The Slider</h1>
                </div>

                <div className="hover:scale-110 hover:pr-5  items-center border-r-2 border-gray-700 h-96 w-96 rounded-lg bg-bg4 transition transform duration-1000 ease-out bg-transparent hover:cursor-pointer">
                    <h1 className="font-bold shadow-lg bg-purple-900 p-10 text-xl">The Royal Flush</h1>
                </div>

                
               
            </div>
        
        </div>

        
    )
}

export default Items
