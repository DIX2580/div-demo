import React from 'react'

const Footer = () => {
    return (
        <div className='bg-black text-white '>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-start pl-8 md:pl-0 gap-32 container mx-auto py-12'>
                <div className=''>
                    <img src="/images/footer-logo.png" className='w-[200px]' alt="" />
                    <p className='text-[#ffffff75] leading-8 py-6'>DIV-DEMO is where your imagination and our expertise converge to create design solutions that elevate your brand and set you apart from the competition.</p>
                    <h2 className='text-1xl pb-2'>dibyanjayapanda25@gmail.com</h2>
                    <h2 className='text-xl'>+1234567890</h2>
                </div>
                <div>
                    <h2 className='font-bold text-xl'>Company</h2>
                    <ul className='text-[#ffffff75] leading-10 mt-4'>
                        <li>About</li>
                        <li>Services</li>
                        <li>Careers</li>
                        <li>Blogs</li>
                        <li>Pricing</li>
                    </ul>
                </div>
                <div>
                    <h2 className='font-bold text-xl'>Contact</h2>
                    <ul className='text-[#ffffff75] leading-10 mt-4'>
                        <li>Help</li>
                        <li>FAQs</li>
                        <li>Press</li>
                        <li>Terms & Conditions</li>
                        <li>Partners</li>
                    </ul>
                </div>
                <div>
                    <h2 className='font-bold text-xl'>Discover</h2>
                    <ul className='text-[#ffffff75] leading-10 mt-4'>
                        <li>Affiliate</li>
                        <li>Partner Program</li>
                    </ul>
                </div>
            </div>
            <div className='border-t border-[#221F35] flex justify-center items-center py-12'>
                <div className="flex justify-center items-center ">
                    <h2>Copyright © 2024 DIV-DEMO®. All rights reserved.</h2>
                </div>
            </div>
        </div>
    )
}

export default Footer