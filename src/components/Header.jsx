import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Logo from "../assets/logo.png"

const Header = () => {
  return (
    <header className='py-6'>
        <Container>
        <Flex className="justify-between">
            <div className="">
                <img src={Logo} alt="logo" />
            </div>
            <div className="">
                <ul className='flex gap-x-8'>
                    <li>
                        <a href="#" className='font-dm font-normal text-[16px] text-[#767676] hover:text-[#222]'>Home</a>
                    </li>
                    <li className='font-dm font-normal text-[16px] text-[#767676] hover:text-[#222]'>Shop</li>
                    <li className='font-dm font-normal text-[16px] text-[#767676] hover:text-[#222]'>About</li>
                    <li className='font-dm font-normal text-[16px] text-[#767676] hover:text-[#222]'>Contacts</li>
                    <li className='font-dm font-normal text-[16px] text-[#767676] hover:text-[#222]'>Journal</li>
                </ul>
            </div>
        </Flex>
    </Container>
    </header>
  )
}

export default Header