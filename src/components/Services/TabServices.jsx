import React, { useState } from 'react'
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const TabServices = () => {

    const [servicesData, setServicesData] = useState([
        {
            title: "Cloud Storage",
            desc: "A service that allows users to store data on remote servers accessed via the internet. It provides scalable storage solutions, data backup, and synchronization across multiple devices, ensuring data availability and protection against hardware failures.",
            open: false,
        }, {
            title: "Cybersecurity Consulting",
            desc: ": A service offering specialized advice and strategies to safeguard organizations against cyber threats. It includes vulnerability assessments, security audits, compliance checks, and the implementation of robust security measures to protect sensitive data and ensure regulatory compliance.",
            open: false,
        }, {
            title: "Software as a Service (SaaS)",
            desc: "A cloud-based software delivery model where applications are hosted by a provider and made accessible to users over the internet. It eliminates the need for local installations, offers seamless updates, and provides scalable subscription-based access to various software solutions.",
            open: false,
        }, {
            title: "Managed IT Services",
            desc: "omprehensive IT support and management services for businesses. It includes proactive monitoring, maintenance, and troubleshooting of IT infrastructure, network security, data backup, and technical support, allowing organizations to focus on core operations while ensuring their technology runs smoothly.",
            open: false,
        }, {
            title: "Web Hosting",
            desc: "A service that provides the necessary technology and infrastructure to host websites on the internet. It ensures websites are accessible online, offers various hosting plans, and includes features like domain registration, email hosting, and technical support for website maintenance.",
            open: false,
        }, {
            title: "Data Analytics Services ",
            desc: "Services that involve analyzing large datasets to uncover patterns, trends, and insights. It helps businesses make data-driven decisions, optimize operations, and develop strategic initiatives by leveraging advanced analytical tools and techniques, including machine learning and statistical analysis.",
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