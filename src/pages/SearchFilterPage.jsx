import React from 'react'
import { useLocation } from 'react-router-dom'
import Container from '../components/Container'
import { FaCartPlus, FaHeart } from "react-icons/fa";
import { IoGitCompare } from "react-icons/io5";

const SearchFilterPage = () => {
    let location = useLocation()
    let singleItemSearch = location.state.searchFilter
  return (
    <>
    <Container>
        <div className="flex justify-between flex-wrap">
            {singleItemSearch.map((item)=>(
            <div className="w-[32%]">
            <div className="py-3">
            <div className="relative group">
                <img src={item.thumbnail} className='h-[300px] w-full' alt="" />
                <div className="absolute bottom-0 overflow-y-hidden left-0 w-[100%] duration-300 ease-in bg-[#FFFFFF] h-[0px] opacity-0 group-hover:h-[200px] group-hover:opacity-100">
                    <div className=" flex items-center h-full justify-end">
                        <ul className='px-6 text-end'>
                            <li className=''>Add to Wish List <FaHeart className='inline-block' /> </li>
                            <li className=''>Compare <IoGitCompare className='inline-block' /></li>
                            <li className=''>Add to Cart <FaCartPlus className='inline-block' /></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex justify-between pt-3">
                <h3 className='font-dm font-bold text-[16px]'>{item.title}</h3>
                <p>${item.price}</p>
            </div>
        </div>
            </div>
        ))}
        </div>
       
    
    </Container>
        
    </>
  )
}

export default SearchFilterPage