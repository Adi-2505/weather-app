import React from 'react'
import wind from './Images/wind.svg'
import rain from './Images/waterdrop.svg'
import snow from './Images/snowflake.svg'
import pressure from './Images/pressure-meter.svg'

export default function Parameters(props) {

    let weather = props.weather;

    return (
        <div className='grid grid-cols-2 justify-items-center items-center m-5 text-white font-semibold text-2xl gap-1'>
            <div className='w-[160px] h-16 flex justify-around items-center '>
                <img src={wind} alt="" className='w-20' /><p>{weather.data[0].wind_spd?weather.data[0].wind_spd:'--'}</p>
            </div>
            <div className='w-[160px] h-16 flex justify-around items-center'>
                <img src={rain} alt="" className='w-20' /><p>{weather.data[0].precip?weather.data[0].precip:'--'}</p>
            </div>
            <div className='w-[160px] h-16 flex justify-around items-center'>
                <img src={snow} alt="" className='w-20 p-3' /><p>{weather.data[0].snow?weather.data[0].snow:'--'}</p>
            </div>
            <div className='w-[160px] h-16 flex justify-around items-center'>
                <img src={pressure} alt="" className='w-20 p-3' /><p>{weather.data[0].pres?weather.data[0].pres:'--'}</p>
            </div>
        </div>
    )
}
