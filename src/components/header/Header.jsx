import React from 'react'
import Logo from './Logo'
import Menu from './Menu'

const Header = () => {
  return (
    <div className='container mx-auto py-[47px] bg-white flex justify-between items-center'>
      <Logo />
      <Menu />
    </div>
  )
}

export default Header