function Footer() {
    return (
        <div className="flex justify-between bottom-0  p-2  text-white text-[15px]  w-[100%] bg-yellow-600 bg-opacity-20">
            
            <div className="flex space-y-2">
             <img className="object-contain justify-start w-[250px] ml-10" src="img/coffee.jpg" />
             
            

            </div>

            <div>
                <h1>Copyright</h1>
            </div>
            <div className="justify-center">
            <div className="   text-[30px] font-Koulen  pt-15  ">
             <h1 className="hover:scale-105 transition transform duration-700">Help & Service</h1>
                <p className="hover:scale-105 transition transform duration-700 pr-5">Privacy</p>
                <p className="hover:scale-105 transition transform duration-700">Terms & Conditions</p>
                <p className="hover:scale-105 transition transform duration-700 pr-5">Cookies</p>
                <p className="hover:scale-105 transition transform duration-700 pr-5">Privacy</p>
                <p className="hover:scale-105 transition transform duration-700">Terms & Conditions</p>
              
             </div>


            

            
            {/* <div className=" flex jusf  w-1/2">
                    <h1 className="hover:scale-105 transition transform duration-700">Help & Service</h1>
                <p className="hover:scale-105 transition transform duration-700">Privacy</p>
                <p className="hover:scale-105 transition transform duration-700">Terms & Conditions</p>
                <p className="hover:scale-105 transition transform duration-700">Cookies</p>
                <p className="hover:scale-105 transition transform duration-700">Privacy</p>
                <p className="hover:scale-105 transition transform duration-700">Terms & Conditions</p>
                <p className="hover:scale-105 transition transform duration-700">Cookies</p>
                    
            </div>
            <div className="">
                <h1 className="hover:scale-105 transition transform duration-700">Our Policy</h1>
                <p className="hover:scale-105 transition transform duration-700">Privacy</p>
                <p className="hover:scale-105 transition transform duration-700">Terms & Conditions</p>
                <p className="hover:scale-105 transition transform duration-700">Cookies</p>
                
            </div> */}
            </div>
        </div>
    )
}

export default Footer
