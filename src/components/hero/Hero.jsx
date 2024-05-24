import React from 'react';
import Button from '../Button/Button';

const Hero = () => {
    return (
        <div className='container mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 py-2 px-1 md:px-0'>
            <div className='flex flex-col items-start justify-start bg-[#ffffff] mt-8 lg:mt-0 rounded-xl lg:w-1/4'>
                <span className='w-[9px] h-1 bg-white mb-4'></span>
            </div>
            <div className='flex-1'>
                <h2 className='text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 lg:mb-12 text-center lg:text-left'>
                    Where <br className='hidden lg:block' /> Design Meets <br className='hidden lg:block' /> Innovation!
                </h2>
                <p className='mb-8 lg:mb-16 text-center lg:text-left'>
                    Whether you're a startup looking to establish your brand identity or an established business aiming to refresh your image, we've got the creative firepower to make it happen.
                </p>
                <div className='flex justify-center lg:justify-start'>
                    <Button
                        className="uppercase font-source-sans bg-[#1F1F39] text-white px-8 md:px-12 py-3 rounded-xl text-xl md:text-2xl"
                        title="LET'S TALK"
                    />
                </div>
            </div>
            <div className='w-full lg:w-1/2 flex justify-center'>
                <img src="/images/hero.png" className='w-full md:w-[500px] lg:w-[770px] md:h-auto object-contain' alt="Hero" />
            </div>
        </div>
    );
}

export default Hero;
