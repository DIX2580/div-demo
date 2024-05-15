import React from 'react'

const PortfolioCard = (props) => {
    return (
        <div key={props.key} className=''>
            <div className='mb-[25px]'><img src={props.img} className='w-[500px] h-[350px] object-cover' alt="" /></div>
            <div className='flex items-center gap-4 text-[#4D4D4D] text-xl'>
                <h2 className='font-bold'>{props.title}</h2>
                <p className='font-[400]'>{props.desc}</p>
            </div>
        </div>
    )
}

export default PortfolioCard