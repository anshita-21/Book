import React, { useState } from 'react'
import ReactStars from 'react-stars';

const Cards = () => {

    const [data, setData] = useState([
        {
            name: "CITY OF ORANGE",
            rating: 4.2,
            img: "https://images2.penguinrandomhouse.com/cover/9780593422182",
            author: "David Yoon",
        },
        {
            name: "CITY OF ORANGE",
            rating: 4.2,
            img: "https://images2.penguinrandomhouse.com/cover/9780593422182",
            author: "David Yoon",
        },
        {
            name: "CITY OF ORANGE",
            rating: 4.2,
            img: "https://images2.penguinrandomhouse.com/cover/9780593422182",
            author: "David Yoon",
        },
        {
            name: "CITY OF ORANGE",
            rating: 4.2,
            img: "https://images2.penguinrandomhouse.com/cover/9780593422182",
            author: "David Yoon",
        },
        {
            name: "CITY OF ORANGE",
            rating: 4.2,
            img: "https://images2.penguinrandomhouse.com/cover/9780593422182",
            author: "David Yoon",
        },
        {
            name: "CITY OF ORANGE",
            rating: 4.2,
            img: "https://images2.penguinrandomhouse.com/cover/9780593422182",
            author: "David Yoon",
        },
    ]);
    return (
        <div className='flex flex-wrap justify-between p-3 mt-2 '>
            {data.map((e, i) => {
                return (
                    <div key={i} className='card font-medium shadow-lg p-2 hover:-translate-y-3 cursor-pointer mt-6 transition-all duration-500'>
                        <img className='h-60 w-70 ' src={e.img} />
                        <h1> <span className='text-blue-500 mr-1'>Name:</span> {e.name}</h1>
                        <h1 className='flex items-center'> <span className='text-blue-500 mr-1'>Rating: </span> 
                            <ReactStars size={20} half={true} value={e.rating} edit={false}/>
                        </h1>
                        <h1> <span className='text-blue-500 mr-1'>Author:</span> {e.author}</h1>
                    </div>
                )
            })}
        </div>
    )
}
export default Cards