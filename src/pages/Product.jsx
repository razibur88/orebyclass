import React, { useContext, useEffect, useRef, useState } from 'react'
import Container from '../components/Container'
import { Link } from 'react-router-dom'
import Flex from '../components/Flex'
import { Apidata } from '../components/ContextApi'
import Post from '../components/pagination/Post'
import PaginationNum from '../components/pagination/PaginationNum'

const Product = () => {
    let data = useContext(Apidata)
    let [currentPage, setCurrentPage] = useState(1)
    let [perPage, setPerPage] = useState(6)
    let [category, setCategory] = useState([])
    let [cateFilter, setCateFilter] = useState([])
    let pageNumber = []
    for(let i = 0; i < Math.ceil(cateFilter.length > 0 ? cateFilter :data.length / perPage); i++){
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
        setCategory([...new Set(data.map((item)=> item.category))])
    },[data])

    let handleCategory = (citem)=>{
        let categoryFilter = data.filter((item)=>item.category == citem)
        setCateFilter(categoryFilter);
    }

  return (
    <div>
        <Container>
            <span className='font-dm font-normal text-[18px]'><Link to="/">Home</Link> / Products</span>
            <Flex>
                <div className="w-[20%]">
                    <h2 className='font-dm font-bold text-[18px] pt-3'>Shop by Category</h2>
                    <div className="flex justify-between items-center px-2">
                        <ul>
                          {category.map((item,i)=>(
                            <li onClick={()=>handleCategory(item)} key={i} className='font-dm font-normal text-[18px] pt-2'>{item}</li>
                          ))}
                        </ul>   
                    </div>
                </div>
                <div className="w-[80%]">
                    <div className="flex justify-between flex-wrap">
                        <Post post={allPage} cateFilter={cateFilter}/>
                    </div>
                    <PaginationNum pageNumber={pageNumber} paginate={paginate} next={next} prve={prve} currentPage={currentPage}/>
                </div>
            </Flex>
        </Container>
    </div>
  )
}

export default Product
