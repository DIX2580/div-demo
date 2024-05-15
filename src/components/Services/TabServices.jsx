import React, { useState } from 'react'
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const TabServices = () => {

    const [servicesData, setServicesData] = useState([
        {
            title: "Visual Branding",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eos rem saepe necessitatibus, ipsum ea praesentium alias nostrum vero dolor illum dolores neque dolorem. Corporis nulla qui consequatur totam!",
            open: false,
        }, {
            title: "Visual Branding",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eos rem saepe necessitatibus, ipsum ea praesentium alias nostrum vero dolor illum dolores neque dolorem. Corporis nulla qui consequatur totam!",
            open: false,
        }, {
            title: "Visual Branding",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eos rem saepe necessitatibus, ipsum ea praesentium alias nostrum vero dolor illum dolores neque dolorem. Corporis nulla qui consequatur totam!",
            open: false,
        }, {
            title: "Visual Branding",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eos rem saepe necessitatibus, ipsum ea praesentium alias nostrum vero dolor illum dolores neque dolorem. Corporis nulla qui consequatur totam!",
            open: false,
        }, {
            title: "Visual Branding",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eos rem saepe necessitatibus, ipsum ea praesentium alias nostrum vero dolor illum dolores neque dolorem. Corporis nulla qui consequatur totam!",
            open: false,
        }, {
            title: "Visual Branding",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eos rem saepe necessitatibus, ipsum ea praesentium alias nostrum vero dolor illum dolores neque dolorem. Corporis nulla qui consequatur totam!",
            open: false,
        },
    ]);




    const toggleOpen = (index) => {
        const updatedServicesData = [...servicesData];

        updatedServicesData.forEach((item, idx) => {
            if (idx !== index) {
                item.open = false;
            }
        });

        updatedServicesData[index].open = !updatedServicesData[index].open;
        setServicesData(updatedServicesData);
    }; 


    return (
        <div>
            {servicesData.map((item, index) => {
                return (
                    <div key={index}>
                        <div className="flex items-center justify-between gap-4 cursor-pointer border-b p-4 border-white" onClick={() => toggleOpen(index)}>
                            <h2 className="text-2xl">{item.title}</h2>
                            {item.open ? <IoIosArrowUp size="30px" /> : <IoIosArrowDown size="30px" />}
                        </div>
                        <div className={`${item.open ? "max-h-screen opacity-100 transition-all duration-500 ease-in font-[400] text-[#ffffff91] p-2 text-md" : "max-h-0 opacity-0 transition-all duration-500 ease-out overflow-hidden text-md"}`}>
                            <p>{item.desc}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};



export default TabServices;