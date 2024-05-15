import React from 'react'
import Section from '../Section/SectionTitle'
import TabServices from './TabServices'

const Services = () => {
    return (
        <div className='bg-black text-white h-[600px] flex  justify-center items-center my-12'>
            <div className='flex flex-col md:flex-row items-start container mx-auto'>
                <Section
                    title="Our Services"
                    color="text-white"
                    style="font-[400] text-2xl"
                />
                <TabServices />
            </div>
        </div>
    )
}

export default Services