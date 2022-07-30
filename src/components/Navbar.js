import React from 'react'
import weather from './Images/weather.svg'

export default function Navbar() {
    return (
        <nav className='flex justify-center items-center h-14 w-full backdrop-blur font-bold text-3xl text-indigo-500 bg-[#00000042] pb-2 shadow-zinc-700 shadow-md'>
           <a href="#" className='flex justify-center items-center'><img src={weather} alt="" className='m-2 mt-4'/> Taapman.com</a> 
        </nav>
    )
}
