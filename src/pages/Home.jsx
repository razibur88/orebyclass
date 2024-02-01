import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Sales from '../components/Sales'
import Newarrival from '../components/Newarrival'

const Home = () => {
  return (
    <>
        <Header/>
        <Navbar/>
        <Banner/>
        <Sales/>
        <Newarrival/>
    </>
  )
}

export default Home