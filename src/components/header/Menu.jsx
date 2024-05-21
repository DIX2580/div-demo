import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../Button/Button'

import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

const Menu = () => {
    const [mobileMenuToggle, setMobileMenuToggle] = useState(false);

    const menuContent = [
        {
            text: "Home",
            url: "/",
        }, {
            text: "About",
            url: "/",
        }, {
            text: "Pricing",
            url: "/",
        }, {
            text: "Blog",
            url: "/",
        },
    ]

    const mobileToggleClick = () => {
        setMobileMenuToggle(!mobileMenuToggle)
    }


    return (
        <div>
            <div className={`fixed top-0 ${mobileMenuToggle ? "left-0" : "-left-[75%]"} bg-[#000000ce]  flex flex-col justify-center items-center text-4xl font-semibold h-full w-[75%] z-50 md:hidden duration-700`}>
                <ul>
                    {
                        menuContent.map((item, index) => {
                            return (
                                <NavLink to="" key={index}><li className='flex items-center py-4 duration-200 text-white'>{item.text}</li></NavLink>
                            )
                        })
                    }
                </ul>
            </div>
            <nav className='hidden md:flex'>
                <ul className='flex items-center gap-12 text-[#6B72809] font-[400] text-[18px]'>
                    {
                        menuContent.map((item, index) => {
                            return (
                                <NavLink to={item.url} key={index}><li>{item.text}</li></NavLink>
                            )
                        })
                    }

                    <Button
                        className="uppercase font-source-sans bg-[#1F1F39] text-white px-9 py-2 rounded-xl text-lg"
                        title="Get In Touch" />
                </ul>
            </nav>
            <div className='md:hidden flex fixed top-12 right-6 cursor-pointer z-50'>
                <span className='text-black' onClick={mobileToggleClick}>{mobileMenuToggle ? <IoClose size={"26px"} /> : <RxHamburgerMenu size={"26px"} />}</span>
            </div>
        </div>
    )
}

export default Menu