import React from 'react'
import Container from '../components/Container'
import { ImCross } from "react-icons/im";
import { Link } from 'react-router-dom';
import cart from "../assets/cart.png"
import { FaPlus , FaMinus,FaCaretDown } from "react-icons/fa6";
import { useSelector } from 'react-redux';

const Cart = () => {
  let data = useSelector((state) => state)
  console.log(data);
  return (
    <>
     <div className='py-[65px]' >
        <Container>
        <h1 className='font-dm text-[49px] font-bold text-bl leading-[63.8px] '>Cart</h1>
      <span className=' font-dm text-[12px] font-normal text-grr leading-[15.62px] '> <Link to="/"> Home</Link> {'>'} <Link to="/contacts">Cart</Link> </span>
      <div className='py-4'>
        <div className="bg-[#F5F5F3] py-5">
        <ul className='flex justify-around items-center flex-wrap '>
            <li className='font-dm font-bold text-[16px] leading-[23px] text-bl'>Product</li>
            <li  className='font-dm font-bold text-[16px] leading-[23px] text-bl' >Price</li>
            <li  className='font-dm font-bold text-[16px] leading-[23px] text-bl' >Quantity</li>
            <li  className='font-dm font-bold text-[16px] leading-[23px] text-bl' >Total</li>
        </ul>
        </div>
        
      </div>
      <div className="  bg-[#FFFFFF] flex items-center justify-around flex-wrap ">
            <div className="lg:w-[25%] sm:w-[23%] w-full flex justify-evenly items-center py-8  ">
            <i><ImCross /></i>
            <img src={cart} alt="cart" />
            <h6  className='font-dm font-bold text-[16px] leading-[23px] text-bl'>Product name</h6>
            </div>
            <div className="lg:w-[23%] sm:w-[19%] w-full lg:pl-[78px] xxs:pl-0">
                <h5  className='font-dm font-bold text-[20px] leading-[26.04px] text-bl'>$44.00 </h5>
            </div>
            <div className="lg:w-[20%] sm:w-[23%] w-full lg:pr-[32px] xxs:pr-0 ">
            <div className="w-[142px] h-[36px] flex items-center justify-between gap-x-4 border-[1px]  ">
                <i className='text-gr'><FaPlus /></i>
                <h3 className='font-dm font-normal text-[16px] leading-[30px] text-gr'>1</h3>
                <i className='text-gr'><FaMinus /></i>
            </div>
              </div>
            <div className="lg:w-[20%] sm:w-[18%] w-full lg:pl-[89px] xxs:pl-7">
                <h5 className='font-dm font-bold text-[20px] leading-[26.04px] text-bl'>$44.00 </h5>
            </div>

        </div>
        
        </Container>
    </div>
    </>
  )
}

export default Cart