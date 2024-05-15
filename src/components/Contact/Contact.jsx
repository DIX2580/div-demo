import React from 'react'
import Section from '../Section/SectionTitle'
import Button from '../Button/Button'

const Contact = () => {
    return (
        <div className='bg-black text-white h-[600px] flex  justify-center items-center mt-16 px-4'>
            <div className='flex flex-col md:flex-row items-start container mx-auto'>
                <Section
                    title="Let’s Collaborate"
                    color="text-white"
                    style="font-[400] text-2xl"
                />

                <div className='flex md:items-start justify-center items-center flex-col'>
                    <h2 className='text-xl md:text-4xl mb-16 text-center md:text-start'>Ready to turn your ideas into exceptional designs? <br /> Contact us today, and let's make something amazing <br /> together!</h2>
                    <Button
                        className="uppercase font-source-sans bg-[#ffffff] text-[#1f1f39] px-12 py-3 rounded-md font-bold text-lg"
                        title="LET’S TALK" />
                </div>
            </div>
        </div>
    )
}

export default Contact