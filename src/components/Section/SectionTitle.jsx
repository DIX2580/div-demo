import React from 'react'

const SectionTitle = (props) => {
    return (
        <h2 className={`${props.color, props.style} w-full py-4 text-center text-3xl md:text-2xl md:text-start md:w-[350px]`}>{props.title}</h2>
    )
}

export default SectionTitle