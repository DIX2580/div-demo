import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../Button/Button'

const Menu = () => {
    return (
        <nav>
            <ul className='flex items-center gap-12 text-[#6B72809] font-[400] text-[18px]'>
                <NavLink to="/" className="hidden lg:flex"><li>Home</li></NavLink>
                <NavLink to="/a" className="hidden lg:flex"><li>About Us</li></NavLink>
                <NavLink to="/as" className="hidden lg:flex"><li>Portfolio</li></NavLink>
                <Button
                    className="uppercase font-source-sans bg-[#1F1F39] text-white px-9 py-2 rounded-xl text-lg"
                    title="Get In Touch" />
            </ul>
        </nav>
    )
}

export default Menu