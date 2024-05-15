import React from 'react'
import Button from '../Button/Button'

const Hero = () => {
    return (
        <div className='container mx-auto flex flex-col lg:flex-row items-start justify-center gap-8 py-28 px-4 md:px-0'>
            <div className='flex items-start justify-start bg-[#1F1F39] mt-8 rounded-xl'>
                <span className='w-[94px] h-1' > </span>
            </div>
            <div>
                <h2 className='text-5xl md:text-7xl font-extrabold mb-12'>Where <br /> Design Meets <br /> Innovation!</h2>
                <p className='mb-16'>Whether you're a startup looking to establish your brand identity or an established business aiming to refresh your image, we've got the creative firepower to make it happen.</p>
                <Button
                    className="uppercase font-source-sans bg-[#1F1F39] text-white px-12 py-3 rounded-xl text-2xl"
                    title="LET'S TALK" />
            </div>
            <div className='w-full flex justify-center'>
                <img src="/images/hero.png" className='w-full md:w-[770px] md:h-[500px] object-contain' alt="" />
            </div>
        </div>
    )
}

export default Hero