import React from 'react'
import Parameters from './Parameters'



export default function Data(props) {

    
    let weather = props.weather;

    


    return (
        <div className='h-[500px] w-[550px] backdrop-blur bg-[#00000042] rounded-lg'>
            <div className='p-5'>
                <ul className='space-y-1'>
                    <li className='text-4xl font-bold text-white'>{props.date}</li>
                    <li className='text-2xl font-bold text-white'>{weather.data[0].city_name}, {weather.data[0].country_code}</li>
                </ul>
            </div>
            <hr />
            <hr />
            <div className='flex justify-between'>
                <div className='h-52 w-64 flex justify-center items-center text-white font-extrabold text-4xl'>
                    {
                        weather.data[0].weather.icon?<img src={require(`./Images/icons/${weather.data[0].weather.icon}.png`)} alt="" className='w-44' />:'--'

                    }
                </div>
                <div className='h-52 w-80 flex items-center justify-center'>
                    <ul className='text-white text-center'>
                        <li className='text-8xl font-extrabold p-5'>{weather.data[0].temp?weather.data[0].temp:'--'}&deg;C</li>
                        <li className='text-2xl font-semibold'>{weather.data[0].weather.description?weather.data[0].weather.description:'--'}</li>
                    </ul>
                </div>
            </div>
            <hr />
            <hr />
            <Parameters weather={props.weather} />
        </div>
    )
}
