import React, { useEffect, useRef, useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import { FaBars,FaCartPlus,FaRegUser  } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";


const Navbar = () => {
    let [cartshow, setCartshow] = useState(false)
    let [cartacc, setCartacc] = useState(false)
    let categoryRef = useRef()
    let cartaccRef = useRef()

    



    useEffect(()=>{
        document.addEventListener("click",(e)=>{
            if(categoryRef.current.contains(e.target) == true){
                setCartshow(!cartshow)
            }else{
                setCartshow(false)
            }
            if(cartaccRef.current.contains(e.target) == true){
                setCartacc(!cartacc)
            }else{
                setCartacc(false)
            }
        })
    },[cartshow,cartacc])

  return (
    <nav>
        <Container>
            <Flex className="items-center">
              <div className="w-1/4 relative">
                    <div className="flex items-center" ref={categoryRef}>
                        <FaBars/>
                        <p className='pl-3'>Shop by Category</p>
                    </div>
                    {cartshow && 
                        <div className="bg-[#262626] absolute top-[50px] left-0 w-full">
                        <ul>
                            <li className='text-[rgba(255,255,255,0.71)] py-3 pl-3 hover:text-white hover:pl-6 duration-300 ease-in'>Accesories</li>
                            <li className='text-[rgba(255,255,255,0.71)] py-3 pl-3 hover:text-white hover:pl-6 duration-300 ease-in'>Furniture</li>
                            <li className='text-[rgba(255,255,255,0.71)] py-3 pl-3 hover:text-white hover:pl-6 duration-300 ease-in'>Electronics</li>
                            <li className='text-[rgba(255,255,255,0.71)] py-3 pl-3 hover:text-white hover:pl-6 duration-300 ease-in'>Clothes</li>
                            <li className='text-[rgba(255,255,255,0.71)] py-3 pl-3 hover:text-white hover:pl-6 duration-300 ease-in'>Bags</li>
                            <li className='text-[rgba(255,255,255,0.71)] py-3 pl-3 hover:text-white hover:pl-6 duration-300 ease-in'>Home appliances</li>
                        </ul>
                    </div>
                    }
                   
                </div>  
              <div className="w-1/2">
                   <div className="relative">
                   <input type="search" placeholder='search...' className='w-full border-2 border-[#222] outline-0 py-3 px-2' />
                   <div className="absolute top-[50%] right-[15px] translate-y-[-50%] ">
                   <IoSearchSharp className='text-[20px]'/>
                   </div>
                   </div>
                </div>  
              <div className="w-1/4">
                    <div className="flex justify-end gap-x-4 relative">
                    <div className="flex" ref={cartaccRef}>
                        <FaRegUser />
                        <IoMdArrowDropdown/>
                    </div>
                    {cartacc &&
                        <div className="bg-[#262626] w-[200px] absolute top-[50px] right-0">
                        <ul>
                            <li className='text-[rgba(255,255,255,0.71)] py-3 pl-3 hover:text-white hover:pl-6 duration-300 ease-in'><a href="#">My Account</a></li>
                            <li className='text-[rgba(255,255,255,0.71)] py-3 pl-3 hover:text-white hover:pl-6 duration-300 ease-in'><a href="#">Login</a></li>
                        </ul>
                    </div>
                    }
                    
                    <div className="">
                        <FaCartPlus/>
                    </div>
                    </div>
                </div>  
            </Flex>
        </Container>
    </nav>
  )
}

export default Navbar