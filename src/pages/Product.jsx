import React, { useContext, useEffect, useRef, useState } from 'react'
import Container from '../components/Container'
import { Link } from 'react-router-dom'
import Flex from '../components/Flex'
import { FaPlus,FaMinus, FaS } from "react-icons/fa6";
import { Apidata } from '../components/ContextApi'
import Post from '../components/pagination/Post'
import PaginationNum from '../components/pagination/PaginationNum'

const Product = () => {
    let data = useContext(Apidata)
    let [currentPage, setCurrentPage] = useState(1)
    let [perPage, setPerPage] = useState(6)
    let [showIcon, setShowIcon] = useState(false)
    let [show, setShow] = useState(false)
    let cateOne = useRef()
    let pageNumber = []
    for(let i = 0; i < Math.ceil(data.length / perPage); i++){
        pageNumber.push(i)
    }

    let lastPage = currentPage * perPage
    let firstPage = lastPage - perPage
    
    let allPage = data.slice(firstPage, lastPage)


    let paginate = (pageNumber)=>{
        setCurrentPage(pageNumber + 1)
    }

    let next = () =>{
       if(currentPage < pageNumber.length){
        setCurrentPage((state)=> state + 1)
       }
    }

    let prve = () =>{
        if(currentPage > 1){
            setCurrentPage((state)=> state - 1)
        }
    }

    useEffect(()=>{
        document.addEventListener("click",(e)=>{
            if(cateOne?.current?.contains(e.target) == true){
                setShow(!show)
                setShowIcon(!showIcon)
            }else{
                setShow(false)
                setShowIcon(false)

            }
            
        })
    },[show])

  return (
    <div>
        <Container>
            <span className='font-dm font-normal text-[18px]'><Link to="/">Home</Link> / Products</span>
            <Flex>
                <div className="w-[20%]">
                    <h2 className='font-dm font-bold text-[18px] pt-3'>Shop by Category</h2>
                    <div ref={cateOne} className="flex justify-between items-center px-2">
                        <h4 className='font-dm font-normal text-[18px] pt-2'>Category 1</h4>
                            {showIcon ? <FaMinus /> :  <FaPlus/>}
                    </div>
                    {show && 
                    <ul className='bg-[gray] py-4 px-2'>
                        <li>categoryone</li>
                        <li>categoryone</li>
                        <li>categoryone</li>
                        <li>categoryone</li>
                    </ul>
                    }
                    
                </div>
                <div className="w-[80%]">
                    <div className="flex justify-between flex-wrap">
                        <Post post={allPage}/>
                    </div>
                    <PaginationNum pageNumber={pageNumber} paginate={paginate} next={next} prve={prve} currentPage={currentPage}/>
                </div>
            </Flex>
        </Container>
    </div>
  )
}

export default Product
