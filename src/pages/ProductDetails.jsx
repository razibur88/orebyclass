import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Container from '../components/Container';
import Flex from '../components/Flex';
import { IoIosStar,IoIosStarHalf } from "react-icons/io";
import { useContext } from 'react';
import { Apidata } from '../components/ContextApi';

const ProductDetails = () => {
    let [data, setData] = useState([])
    let productId = useParams()
    let info = useContext(Apidata)

    let dataId = () =>{
        axios.get(`https://dummyjson.com/products/${productId.id}`).then((response)=>{
            setData(response.data);
        })
    }

    useEffect(()=>{
        dataId()
    },[])

  return (
    <>
       <Container>
        <Flex className="justify-between">
            {data?.images?.map((item)=>(
                <div className="w-[32%] h-[400px]">
                <img src={item} alt="" className='w-full h-full' />
                </div>
        ))}
       
        </Flex>


        

        <div className="pt-6">
            <h2 className='font-dm font-bold text-[40px]'>Product</h2>
           <div className="">
           <div className="flex">
                <IoIosStar/>
                <IoIosStar/>
                <IoIosStar/>
                <IoIosStar/>
                <IoIosStarHalf />
            </div>
           
           </div>
           <h4 className='font-dm font-bold text-[20px] py-10'>${data.price}</h4>
           <div className="">
                <div className="flex items-center">
                    <h4 className='pr-5'>QUANTITY:</h4>
                    <div className="flex justify-between items-center px-4 h-[50px] w-[150px] border-2 border-black">
                       <button>-</button>
                       <div>0</div>
                       <button>+</button>
                    </div>
                </div>
           </div>
           <div className="py-10">
            <ul>
                <li className='py-[16px] px-[50px] bg-[#262626] text-white font-dm font-bold text-[16px] inline-block mr-8'>Add to Wish List</li>
                <li className='py-[16px] px-[50px] bg-[#262626] text-white font-dm font-bold text-[16px] inline-block'>Add to Cart</li>
            </ul>
           </div>
        </div>

       </Container>
    </>
  )
}

export default ProductDetails