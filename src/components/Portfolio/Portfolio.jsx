import React from 'react'
import Section from '../Section/SectionTitle'
import PortfolioCard from './PortfolioCard'

const Portfolio = () => {
    const portfolioData = [
        {
            img: "/images/portfolio1.png",
            title: "Daily App",
            desc: "Increasing your productivity"
        }, {
            img: "/images/portfolio2.png",
            title: "Daily App",
            desc: "Increasing your productivity"
        }, {
            img: "/images/portfolio3.png",
            title: "Daily App",
            desc: "Increasing your productivity"
        }, {
            img: "/images/portfolio4.png",
            title: "Daily App",
            desc: "Increasing your productivity"
        }, {
            img: "/images/portfolio5.png",
            title: "Daily App",
            desc: "Increasing your productivity"
        }, {
            img: "/images/portfolio6.png",
            title: "Daily App",
            desc: "Increasing your productivity"
        },
    ]
    return (
        <div className='py-28 px-4'>
            <div className='flex flex-col md:flex-row items-start container mx-auto'>
                <Section
                    title="Our Portfolio"
                    color="text-white"
                    style="font-[400] text-2xl"
                />
                <div>
                    <p className='mb-14 text-xl md:text-4xl font-bold text-center'>We envision a world where every idea, product, or <br /> service is brought to life through exceptional design.</p>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        {
                            portfolioData.map((item, index) => {
                                return (

                                    <PortfolioCard key={index} img={item.img} title={item.title} desc={item.desc} />

                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio